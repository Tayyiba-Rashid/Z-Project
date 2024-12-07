import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/firebaseConfig";
import React, { useState, useEffect } from "react";

function ContactList({ selectUser }) {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
      // console.log("user:", users);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!currentUser) {
      // console.log("user is null");
      return;
    }

    const fetchUsers = async () => {
      setIsLoading(true);
      console.log("loading2");
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const userList = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((u) => u.email !== currentUser.email); 
        setUsers(userList); 
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchUsers();
  }, [currentUser]); 

  const handleSelectUser = (user) => {
    setSelectedUserId(user.id); 
    selectUser(user); 
    // console.log("selected user chat list", user)
  };

  if (isLoading) {
    return console.log("loading1");
  }

  return (
    <div>
      {users.length === 0
        ? console.log("user not found")
        : users.map((user) => (
            <div
              key={user.id}
              onClick={() => handleSelectUser(user)}
              className={`cursor-pointer p-3  bg-white border-b rounded-sm  ${
                selectedUserId === user.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-400 text-white"
                  : "hover:bg-gray-50"
              }`}
            >
              {user.displayName || user.email} <br />
              <span className="text-gray-500">{user.email}</span>
            </div>
          ))}
    </div>
  );
}

export default ContactList;
