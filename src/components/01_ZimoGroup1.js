import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

function ZimoGroup1({ scrollToZimoGroup2 }) {
  const handleArrowClick = () => {
    // Use the scrollToZimoGroup2 ref to scroll to the second component
    scrollToZimoGroup2.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    
    <>
      <div className="bg-white h-dvh">
        <div className="absolute inset-0 flex justify-center items-center mx-4">
          <Image
            className="md:px-16 px-4 opacity-100 blur-md "
            data-aos="flip-down"
            src="/01_ZimoGroup1/Group 4519.png"
            width={800}
            height={600}
            alt="bg image"
          ></Image>
        </div>

        {/* Foreground */}
        <div className="absolute inset-0  p-4 h-full py-6 overflow-hidden grid grid-col-2">
          <div className="col-span-1  flex items-end justify-start">
            <Image
              className=" px-4 "
              data-aos="fade-right"
              data-aos-duration="1500"
              src="/01_ZimoGroup1/zimoGroup.png"
              width={500}
              height={500}
              alt="logo"
            ></Image>
          </div>
          <div className=" col-span-2 flex items-end justify-center">
            <Image
              className="bounce"
              src="/01_ZimoGroup1/arrow.png"
              width={50}
              height={50}
              onClick={handleArrowClick}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export default ZimoGroup1;
