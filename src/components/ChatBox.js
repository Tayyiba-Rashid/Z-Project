import { useState, useEffect } from "react";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { db, auth } from "@/firebaseConfig";

function ChatBox({ chatId }) {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const chatRef = doc(db, "chats", chatId);
    const unsubscribe = onSnapshot(chatRef, (doc) => {
      if (doc.exists()) {
        console.log("Chat data received:", doc.data());
        const data = doc.data();
        setMessages(data?.messages || []); 
      } else {
        console.warn("Chat document does not exist:", chatId);
        setMessages([]); 
      }
    });

    return () => unsubscribe();
  }, [chatId]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const chatRef = doc(db, "chats", chatId);

      const updatedMessages = [
        ...messages,
        {
          senderId: auth.currentUser.uid,
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

  return (
    
    <div className="flex flex-col shadow-md h-full">
      <div className="flex-grow px-4 overflow-y-auto pt-4 pb-16 bg-slate-100">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.senderId === auth.currentUser.uid
                ? "justify-end"
                : "justify-start"
            } mb-3`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-xl text-sm shadow ${
                message.senderId === auth.currentUser.uid
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
      </div>

      <form
        onSubmit={sendMessage}
        className="flex items-center p-3  bg-white fixed bottom-0 border right-0 w-2/3"
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
