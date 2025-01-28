import React, { useState } from "react";

interface WordLimitTextAreaProps {
  maxWords: number;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const WordLimitTextArea: React.FC<WordLimitTextAreaProps> = ({ maxWords, text, setText }) => {
 
  const [wordCount, setWordCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const words = value.trim().split(/\s+/).filter(Boolean);
    if (words.length <= maxWords) {
      setText(value);
      setWordCount(words.length);
      if (words.length === maxWords) {
        setMessage("You've reached the word limit.");
      } else {
        setMessage("");
      }
    }
  };
  return (
    <>
      <span className="relative ">
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Begin typing or copy and paste..."
          className="resize-none border rounded-md overflow-hidden outline-none focus:ring-none border-gray-300 bg-light_blue p-2 
          2xl:w-[495px] xl:w-[382px] lg:w-[320px] md:w-[280px] sm:w-[240px] w-[220px] 
          2xl:h-[145px] xl:h-[100px] lg:h-[90px] md:h-[70px] sm:h-[70px] h-[60px] 
          2xl:text-[14px] xl:text-[11px] lg:text-[10px] md:text-[8px] sm:text-[7px] text-[8px]"
        ></textarea>
        <div className="absolute bottom-3 right-3  2xl:text-[12px] xl:text-[10px] lg:text-[9px] md:text-[8px] sm:text-[7px] text-[6px] text-gray-500 bg-light_blue">
          {wordCount} out of {maxWords} words
        </div>
        <div className="absolute -bottom-full left-0 text-green-500 text-start 2xl:text-[14px] xl:text-[11px] lg:text-[11px] md:text-[10px] sm:text-[10px] text-[9px]">
          {message}
        </div>
      </span>
    </>
  );
};

export default WordLimitTextArea;
