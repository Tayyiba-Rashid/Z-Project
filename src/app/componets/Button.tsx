'use client'
import React, { useState } from 'react';

interface popUpButton {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Button({setIsOpen}: popUpButton){


  return (
    <button
      className="bg-blue hover:opacity-90 text-white font-semibold py-2 px-4 border rounded shadow"
      onClick={()=> (setIsOpen((prev)=>(!prev)))}
    >
      Apply
    </button>
  );
};
