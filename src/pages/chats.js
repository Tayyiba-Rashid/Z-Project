import {
  doc,
  getDoc,
  setDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import ChatBox from "../components/ChatBox";
import ContactList from "@/components/ContactList";
import { useRouter } from "next/router";
import Login from "./login";

function ChatPage() {
  const [chatId, setChatId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const router = useRouter();
  const previousMessagesCount = useRef({});
  const isFirstLoad = useRef(true); 
  
  const playNotificationSound = () => {
    const audio = new Audio("/notification.wav");
    audio.play();
  };
  
  useEffect(() => {
    const chatRef = collection(db, "chats");
  
    const unsubscribe = onSnapshot(
      chatRef,
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const chatData = doc.data();
          const participants = chatData?.participants || [];
  
          if (participants.includes(auth.currentUser.uid)) {
            const currentMessages = chatData?.messages || [];
  
            const chatId = doc.id; 
            const previousMessagesCountForChat =
              previousMessagesCount.current[chatId] || 0;
  
            const currentMessagesCount = currentMessages.length;
  
            if (
              currentMessagesCount > previousMessagesCountForChat &&
              selectedUser === null
            ) {
              // console.log("cm:",currentMessages.length)
              // console.log("pm:",previousMessagesCountForChat)
              if (!isFirstLoad.current) {
                playNotificationSound();
                // console.log("New messages added!");
              } else {
                // console.log("Skipping notification on first load.");
              }
                previousMessagesCount.current[chatId] = currentMessagesCount;
            }else{
              // console.log("you wont receive notification")
            }
          }
        });
  
        isFirstLoad.current = false;
      },
      (error) => {
        console.error("Error fetching chats: ", error);
      }
    );
  
    return () => unsubscribe();
  }, [chatId]);
  
  const startChat = async (user) => {
    const userId1 = auth.currentUser.uid;
    const userId2 = user.id;

    const chatId =
      userId1 > userId2 ? `${userId1}_${userId2}` : `${userId2}_${userId1}`;
    const chatDocRef = doc(db, "chats", chatId);

    try {
      const chatSnapShot = await getDoc(chatDocRef);

      if (!chatSnapShot.exists()) {
        await setDoc(chatDocRef, {
          participants: [userId1, userId2],
          messages: [],
        });
      }

      setChatId(chatId);
      setSelectedUser(user);
    } catch (error) {
      console.error("Error starting chat:", error);
    }
  };



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setIsSignedIn(false);
        router.push("/login");
      } else {
        setIsSignedIn(true);
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Handle Sign Out
  const handleSignOut = async () => {
    const confirmSignOut = window.confirm("Are you sure you want to sign out?");
    if (confirmSignOut) {
      try {
        await signOut(auth);
        setIsSignedIn(false);
        router.push("/login");
      } catch (error) {
        console.error("Error signing out: ", error);
        alert("There was an issue signing out. Please try again.");
      }
    }
  };
  const selectedUserId = selectedUser?.id;


  
  return (
    <>
      {isSignedIn ? (
        <div className="flex h-screen">
          {/* Sidebar with User List */}
          <div className="w-1/3 border-r bg-gray-50">
            <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <h2 className="text-lg font-bold">Contacts</h2>
              <button
                onClick={handleSignOut}
                className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-200"
              >
                Sign Out
              </button>
            </div>
            <div className="p-4">
              <ContactList selectUser={startChat} />

              {console.log("starting chat")}
            </div>
          </div>

          {/* Chat Window */}
          <div className="flex-1 flex flex-col">
            {chatId ? (
              <>
                <div className="p-4 bg- border text-xl font-extrabold text-center text-gray-800 tracking-wide">
                  {selectedUser?.displayName || selectedUser?.email}
                </div>
                <div className="flex-grow overflow-y-auto">
                  <ChatBox chatId={chatId} selectedUserId={selectedUserId} />
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-gray-50">
                <p className="text-gray-500">Select a user to start chatting</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default ChatPage;
