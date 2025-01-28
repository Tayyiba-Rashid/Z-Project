import React, { useState } from "react";
import WordLimitTextArea from "./TextArea";
import PopupButtons from "./PopupButtons";
import WarnSvg from "./svg/WarnSvg";
import CloseSvg from "./svg/CloseSvg";

interface popUp {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Submition_pop_up({ setIsOpen, setIsSubmitted }: popUp) {
  const [text, setText] = useState("");
  const maxwords = 250;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      setIsSubmitted(true);
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
        <div className="2xl:h-[706px] xl:h-[458px] lg:h-[400px] md:h-[400px] sm:h-[350px] h-[350px]  2xl:w-[677px] xl:w-[478px] lg:w-[400px] md:w-[350px] sm:w-[330px] w-[80%] bg-white rounded-lg shadow-lg text-center">
          <div className="h-full flex flex-col items-center justify-evenly bg-graybg rounded-lg">
            <div className="w-full flex items-start justify-center">
              <p className="w-full text-left py-1 pl-2 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[10px] text-[9px]">
                Submit Approval?
              </p>
            </div>
            <div className="relative bg-white flex flex-col items-center justify-center 2xl:gap-7 xl:gap-4 lg:gap-3 md:gap-4 sm:gap-3 gap-3 mx-4 mb-1 2xl:mb-2 rounded w-[98%] h-[95%]">
              <div>
                <WarnSvg />
              </div>
              <div className="font-bold  2xl:text-[18px] xl:text-[14px] lg:text-[12px] md:text-[10px] sm:text-[8px] text-[9px]">
                Are you sure you want to submit this <br /> application for
                APPROVAL?
              </div>
              <div className="leading-tight">
                <p className="text-blue font-[650] 2xl:text-[14px] xl:text-[10px] lg:text-[11px] md:text-[9px] sm:text-[8px] text-[9px]">
                  JH Industries, Inc.
                </p>
                <p className="opacity-70 2xl:text-[14px] xl:text-[11px] lg:text-[10px] md:text-[9px] sm:text-[8px] text-[9px]">
                  Jack Steward, Program Manager
                </p>
                <p className="opacity-70 2xl:text-[14px] xl:text-[11px] lg:text-[10px] md:text-[9px] sm:text-[8px] text-[9px]">
                  jack.steward@mail.mail
                </p>
              </div>
              <div className="2xl:text-[14px] xl:text-[11px] lg:text-[10px] md:text-[8px] sm:text-[7px] text-[8px]">
                Send a Message to the MPP Director/Manager.
              </div>
              <div className="relative w-full">
                <WordLimitTextArea
                  maxWords={maxwords}
                  text={text}
                  setText={setText}
                />
              </div>
              <div>
                <PopupButtons
                  handleSubmit={handleSubmit}
                  setIsOpen={setIsOpen}
                />
              </div>
              <div
                className="absolute top-3 right-3"
                onClick={() => setIsOpen(false)}
              >
                <CloseSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
