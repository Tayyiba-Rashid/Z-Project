import React, { useState } from "react";
import Image from "next/image";

const Page03 = () => {
  const images = [
    "/03_Page/Group 4771.png",
    "/03_Page/Group 4772.png",
    "/03_Page/Group 4773.png",
    "/03_Page/Group 4774.png",
    "/03_Page/Group 4775.png",
    "/03_Page/Group 4776.png",
    "/03_Page/Group 4777.png",
    "/03_Page/Group 4778.png",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = 4;

  const handleNext = () => {
    if (startIndex + visibleImages < images.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="h-screen grid grid-rows-7">
      {/* Header */}
      <div className=" row-span-1 flex lg:flex-row flex-col lg:justify-between justify-center item-center lg:items-end px-4">
        <div className="flex justify-center lg:justify-start">
        
         <span className="font-lato md:text-3xl text-lg font-medium tracking-[0.25em] mb-4 text-center md:text-start"> OUR CATEGORIES</span>
        </div>
        <div className="lg:flex w-24 justify-between ml-4  lg:justify-between hidden  ">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`p-2 ${startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <Image src="/03_Page/Group 3100.png" width={15} height={15} alt="Previous" />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + visibleImages >= images.length}
            className={`p-2 ${startIndex + visibleImages >= images.length ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            <Image src="/03_Page/Group 3094.png" width={15} height={15} alt="Next" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className=" row-span-4 px-4 relative flex lg:justify-center items-center justify-evenly  lg:flex-row flex-col">
        <div className="lg:hidden  flex justify-between w-full">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`p-2 ${startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <Image src="/03_Page/Group 3100.png" width={15} height={15} alt="Previous" />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + visibleImages >= images.length}
            className={`p-2 ${startIndex + visibleImages >= images.length ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            <Image src="/03_Page/Group 3094.png" width={15} height={15} alt="Next" />
          </button>
        </div>
        <div className="w-full overflow-hidden ">
          <div
            className="flex transition-transform duration-300 "
            style={{
              transform: `translateX(-${startIndex * (100 / visibleImages)}%)`,
            }}
          >
            {images.map((bg, index) => (
              <div
                key={index}
                className=" flex-shrink-0 lg:w-1/4 w-2/4 flex items-center justify-center"
              >
                <Image
                  className="w-4/5 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 "
                  src={bg}
                  alt={`Image ${index + 1}`}
                  width={150}
                  height={150}
                />
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Footer */}
      <div className=" row-span-1 flex items-start justify-center px-4">
        <span className="font-lato md:text-3xl text-lg font-medium tracking-[0.20em] mb-4 text-center md:text-start"> ONE PLATFORM FOR ALL PREMIUM LISTENINGS</span>
      </div>
      <div className=" row-span-1 flex items-start justify-center px-4">
      <span className="font-lato md:text-[1.5em] text-lg font-medium tracking-[0.20em] mb-4 text-center md:text-start"> UNLIMITED POTENTIAL</span>
      </div>
    </div>
  );
};

export default Page03;
