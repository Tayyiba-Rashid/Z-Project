import { useRef, useState, useEffect } from "react";
import { doc, updateDoc, onSnapshot, collection } from "firebase/firestore";
import { db, auth } from "@/firebaseConfig";

function ChatBox({ chatId, selectedUserId }) {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const previousMessagesCount = useRef({});
  const isFirstLoad = useRef(true);
  const currentUserId = auth.currentUser?.uid;

  useEffect(() => {
    const chatRef = doc(db, "chats", chatId);

    const unsubscribe = onSnapshot(chatRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        const updatedMessages = data?.messages || [];
        setMessages(updatedMessages);
      }
    });

    return () => unsubscribe();
  }, [chatId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const chatRef = doc(db, "chats", chatId);

      const updatedMessages = [
        ...messages,
        {
          senderId: currentUserId,
          text: newMessage.trim(),
          timestamp: Date.now(),
        },
      ];

      try {
        await updateDoc(chatRef, { messages: updatedMessages });
        setNewMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const playNotificationSound = () => {
    const audio = new Audio("/notification.wav");
    audio.play();
  };


  useEffect(() => {
    const chatRef = collection(db, "chats");
    const selectedPerson = selectedUserId;

    const unsubscribe = onSnapshot(
      chatRef,
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const chatData = doc.data();
          const participants = chatData?.participants || [];

          if (participants.includes(auth.currentUser.uid)) {
            const currentMessages = chatData?.messages || [];
            const chatIdFromFirestore = doc.id; 
            const previousMessagesCountForChat =
              previousMessagesCount.current[chatIdFromFirestore] || 0;

            const currentMessagesCount = currentMessages.length;

            if (currentMessagesCount > previousMessagesCountForChat) {
              if (!participants.includes(selectedPerson) && !isFirstLoad.current) {
                playNotificationSound();
              } else {
                console.log("dont play notification");
              }
              console.log(
                `New messages added! Total messages now: ${currentMessagesCount}`
              );
              console.log(
                "Previous Messages Count:",
                previousMessagesCountForChat
              );
              // console.log("Updated Messages Count:", currentMessagesCount);
              // console.log("participants", participants);
            }
            previousMessagesCount.current[chatIdFromFirestore] =
              currentMessagesCount;
          }
        });
        isFirstLoad.current = false;
      },
      (error) => {
        console.error("Error fetching chats: ", error);
      }
    );

    return () => unsubscribe();
  }, [selectedUserId, messages]); 

  return (
    <div className="flex flex-col shadow-md h-full">
      {/* Messages container */}
      <div className="flex-grow px-4 overflow-y-auto pt-4 pb-16 bg-slate-100">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.senderId === currentUserId
                ? "justify-end"
                : "justify-start"
            } mb-3`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-xl text-sm shadow ${
                message.senderId === currentUserId
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <p>{message.text}</p>
              <span className="block mt-1 text-xs text-gray-400">
                {new Date(message.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input box */}
      <form
        onSubmit={sendMessage}
        className="flex items-center p-3 bg-white fixed bottom-0 border right-0 w-2/3"
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="ml-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatBox;
