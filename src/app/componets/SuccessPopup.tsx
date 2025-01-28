import React from "react";
import CloseSvg from "./svg/CloseSvg";
import SuccessSvg from "./svg/successSvg";

interface SuccessPopupProps {
  onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ onClose }) => {
  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    //   <div className="bg-white p-6 rounded shadow-lg text-center">
    //     <h2 className="text-lg font-semibold text-green-500">
    //       Submission Successful!
    //     </h2>
    //     <p className="mt-2 text-gray-600">Your text has been submitted successfully.</p>
    //     <button
    //       onClick={onClose}
    //       className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    //     >
    //       Close
    //     </button>
    //   </div>
    // </div>
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
        <div className="2xl:h-[430px] xl:h-[300px] lg:h-[250px] md:h-[220px] sm:h-[200px] h-[200px] 2xl:w-[677px] xl:w-[478px] lg:w-[400px] md:w-[350px] sm:w-[330px] w-[80%] bg-white rounded-lg  text-center">
          <div className="h-full flex flex-col items-center justify-evenly bg-graybg rounded-lg">
            <div className="w-full flex items-start justify-center">
              <p className="w-full text-left py-1 pl-2 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[10px] text-[9px]">
                You have submitted
              </p>
            </div>
            <div className="relative bg-white flex flex-col items-center justify-center 2xl:gap-7 xl:gap-4 lg:gap-3 md:gap-4 sm:gap-3 gap-3 mx-4 mb-1 2xl:mb-2 rounded w-[98%] h-[95%]">
              <div>
                <SuccessSvg />
              </div>
              <div className="font-bold 2xl:text-[18px] xl:text-[14px] lg:text-[12px] md:text-[10px] sm:text-[8px] text-[9px]">
                Application has been submitted for approval
              </div>
              <div className="2xl:text-[14px] xl:text-[11px] lg:text-[10px] md:text-[8px] sm:text-[7px] text-[8px]">
                Once Approved, application will be appear <br /> in your
                dashboard under APPLICATIONS: APPROVED.
              </div>
              <div className="absolute top-3 right-3" onClick={onClose}>
                <CloseSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPopup;
