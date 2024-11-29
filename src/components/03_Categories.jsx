import React, { useState } from "react";
import Image from "next/image";

const Categories = () => {
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
    <div className="h-screen grid grid-rows-7 ">
      <div className=" row-span-1 flex lg:flex-row flex-col  lg:justify-between xl:item-center lg:items-end md:items-center justify-end h-full  item-center px-16 ">
        <div className="flex justify-center lg:justify-start items-center ">
          <span className="font-lato 3xl:text-[40px] 2xl:text-[32px] xl:text-[27px] lg:text-[25px] md:text-[23px] sm:text-[30px] text-[20px] tracking-[0.2em] text-center md:text-start "> OUR CATEGORIES</span>
        </div>
        <div className="lg:flex w-32 justify-between ml-4  lg:justify-between hidden">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`p-4 ${startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <Image className="2xl:block hidden"  src="/03_Page/Group 3100.png" width={20} height={40} alt="Previous" />
            <Image className="2xl:hidden lg:block hidden"  src="/03_Page/Group 3100.png" width={16} height={40} alt="Previous" />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + visibleImages >= images.length}
            className={`p-2 ${startIndex + visibleImages >= images.length ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            <Image className="2xl:block hidden"  src="/03_Page/Group 3094.png" width={20} height={40} alt="Next" />
            <Image className="2xl:hidden lg:block hidden"  src="/03_Page/Group 3094.png" width={16} height={40} alt="Next" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="  row-span-4 px-4 relative flex lg:justify-center items-center justify-evenly  lg:flex-row flex-col">
        <div className="lg:hidden  flex justify-end  w-full">
          {/* NEXT/PREV */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`px-6 ${startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <Image className="sm:block hidden" src="/03_Page/Group 3100.png" width={15} height={15} alt="Previous" />
            <Image className="sm:hidden block" src="/03_Page/Group 3100.png" width={10} height={15} alt="Previous" />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + visibleImages >= images.length}
            className={`pl-6 pr-10 ${startIndex + visibleImages >= images.length ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
             <Image className="sm:block hidden" src="/03_Page/Group 3094.png" width={15} height={15} alt="Next"/>
            <Image className="sm:hidden block" src="/03_Page/Group 3094.png" width={10} height={15} alt="Next" />
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
                  className="w-4/5 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 3xl:block "
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
        <span className="font-lato 3xl:text-[50px] 2xl:text-[40px] xl:text-[37px] lg:text-[30px] md:text-[22px] sm:text-[20px] text-[12px] tracking-widest mb-4 text-center "> ONE PLATFORM FOR ALL PREMIUM LISTENINGS</span>
      </div>
      <div className=" row-span-1 flex items-start justify-center px-4">
        <span className="font-lato 3xl:text-[40px] 2xl:text-[32px] xl:text-[27px] lg:text-[25px] md:text-[20px] sm:text-[22px] text-[18px] tracking-[0.20em] mb-4 text-center md:text-start"> UNLIMITED POTENTIAL</span>
      </div>
    </div>
  );
};

export default Categories;
