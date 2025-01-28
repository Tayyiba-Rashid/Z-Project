import React from "react";

interface PopupButtonsProps {
  setIsOpen: (isOpen: boolean) => void;
  handleSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const PopupButtons: React.FC<PopupButtonsProps> = ({
  setIsOpen,
  handleSubmit,
}) => {
  return (
    <div className="flex gap-x-5 2xl:py-4 xl:py-2 lg:py-2 md:py-2 sm:py-2 py-2 ">
      <button
        className="bg-blue hover:opacity-90 font-semibold text-white py-1 px-3 sm:py-1 sm:px-3 md:py-1 md:px-3 lg:py-[6px] lg:px-2 xlpy-[6px] xl:px-3 2xl:py-2 2xl:px-4  rounded text-[9px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px] 3xl:text-[14px]"
        type="submit"
        onClick={handleSubmit}
        aria-label="Submit button"
      >
        Yes, SUBMIT
      </button>
      <button
        className="hover:opacity-90 font-bold text-blue border border-blue py-1 px-3 sm:py-1 sm:px-3 md:py-1 md:px-3 lg:py-[6px] lg:px-2 xl:py-[6px] xl:px-3 2xl:py-2 2xl:px-4  rounded text-[9px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[11px] 2xl:text-[14px] 3xl:text-[14px]"
        onClick={() => setIsOpen(false)}
        aria-label="Go back button"
      >
        No, Go Back
      </button>
    </div>
  );
};

export default PopupButtons;
