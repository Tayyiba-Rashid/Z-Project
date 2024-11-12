import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

function ZimoGroup25() {
  useEffect(() => {
    Aos.init();
  }, []);


  return (
    //ZIMOTEAM TECHUB2
    <div className="lg:grid h-dvh lg:grid-cols-6 lg:gap-4 grid grid-cols-4 bg-black opacity-90">
      <div className="lg:col-start-2 lg:col-span-4  col-start-0 col-span-3 flex justify-center items-center pl-4 ">
        <Image
            data-aos="fade-down"
          src="/24-ZimoTeam2/Group 6438.png"
          width={500}
          height={500}
          alt="zimo team"
        />
      </div>
      {/* FOR LARGE SCREENS */}
      <div className="lg:col-end-7 lg:col-span-1   hidden lg:flex lg:justify-center lg:items-center lg:pr-4">
        <Image
          src="/24-ZimoTeam2/Group 6435.png"
          width={150}
          height={150}
          alt="techub"
        />
      </div>
      {/* FOR OTHER SCREENS */}
      <div className=" col-span-1  lg:hidden flex justify-center items-center pr-4">
        <Image
          src="/24-ZimoTeam2/Group 6435.png"
          width={150}
          height={150}
          alt="techub"
        />
      </div>

      <div className="lg:col-start-1 lg:col-end-7  col-span-4 flex justify-start items-center px-16">
        <Image
            data-aos="fade-right"
          src="/24-ZimoTeam2/Group 4753.png"
          width={300}
          height={300}
          alt="Discover now world"
        />
      </div>
      <div className="lg:col-start-1 lg:col-end-4   col-span-3 flex justify-start items-center px-16 pl-4">
        <Image
        data-aos="fade-up"
          src="/24-ZimoTeam2/Group 4768.png"
          width={600}
          height={600}
          alt="global vision"
        />
      </div>
      <div className="lg:col-end-7 lg:col-span-2  col-span-1 flex justify-end items-center lg:px-16 pr-4">
        <Image
        data-aos="fade-up"
          src="/24-ZimoTeam2/colorGroup 6436.png"
          width={130}
          height={130}
          alt="zimo career"
        />
      </div>
    </div>
  );
}

export default ZimoGroup25;
