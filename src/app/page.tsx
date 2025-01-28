"use client";
import Button from "./componets/Button";
import Submition_pop_up from "./componets/Submition_pop_up";
import { useState } from "react";
import SuccessPopup from "./componets/SuccessPopup";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <>
      {isSubmitted ? (
        <SuccessPopup onClose={() => setIsSubmitted(false)} />
      ) : isOpen ? (
        <Submition_pop_up
          setIsOpen={setIsOpen}
          setIsSubmitted={setIsSubmitted}
        />
      ) : (
        <Button setIsOpen={setIsOpen} />
      )}
    </>
  );
}
