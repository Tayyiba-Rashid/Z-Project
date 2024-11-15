import ImageUpload from '@/components/imageUpload'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { signOut } from "firebase/auth";
import auth from '@/firebaseConfig';
import Header from '@/components/header';
import Router, { useRouter } from 'next/router';

function gallery() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const router = useRouter();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((user)=>{
      if(!user){
        setIsSignedIn(false)
        router.push("/signin")
      }
    }
    )
        // Clean up the listener when the component is unmounted
        return () => unsubscribe();
  }, [router])

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setIsSignedIn(false);
      router.push("/signin")
      alert('You have signed out.');
    } catch (error) {
      console.error("Error signing out: ", error);
      alert("There was an issue signing out. Please try again.");
    }
  };

  return (
    <div>
      <Header onSignOut={handleSignOut} />
      {isSignedIn ? (
        <ImageUpload />
      ) : (
        <div className="flex justify-center items-center min-h-screen text-xl font-semibold text-gray-500">
          You are signed out. Please log in again.
        </div>
      )}
    </div>  );
}

export default gallery