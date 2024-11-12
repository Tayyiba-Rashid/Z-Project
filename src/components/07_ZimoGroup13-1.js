import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

function ZimoGroup7() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    //ZIMO MEET 1
    <div
      className="h-dvh flex items-center justify-center relative"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="absolute mx-2">
        <Image
          className="m-2 opacity-20 blur-sm"
          src="/07_ZimoGroup13-1/bgmeet.png"
          width={600}
          height={600}
          alt="Zimo Group"
        />
      </div>
      <div className="w-full h-full grid grid-col-2 lg:grid-cols-3">
        <div className=" lg:col-span-1 col-span-1 flex flex-col  justify-between">
          <div className=" flex justify-center items-center pt-8">
            <Image
              className=""
              src="/07_ZimoGroup13-1/zimomeet.png"
              width={300}
              height={300}
              alt="Zimo meet text"
            />
          </div>
          <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center lg:ml-16 ">
            <div className="text-sm">PREMIUM VIDEO MEETINGS</div>
            <div className="text-sm">END-TO-END ENCRYPTION</div>
            <div className="text-sm">LOBBY MODE</div>
            <div className="text-sm">PASSWORD PROTECTED MEETINGS</div>
            <div className="text-sm">CUSTOMISED LINKS</div>
            <div className="text-sm">RECORDINGS</div>
            <div className="text-sm">FREE FOR EVERYONE</div>
          </div>
          <div className=" flex items-center justify-center ml-16">
            <Image
              className="m-2"
              src="/07_ZimoGroup13-1/text.png"
              width={600}
              height={600}
              alt="discover platform image"
            />
          </div>
          <div className="lg:ml-16 flex items-center justify-center lg:items-start lg:justify-start text-sm">
            END-TO-END ENCRYPTION
          </div>
        </div>
        <div className=" lg:col-span-1 col-span-1 flex flex-col items-center justify-center">
          <div>
            <Image
              className="m-2"
              src="/07_ZimoGroup13-1/meetlogo.png"
              width={300}
              height={300}
              alt="Zimo meet logo"
            />
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:items-end lg:justify-between  lg:col-span-1 pr-8 py-8">
          <div>
            <Image
              className="m-2"
              src="/07_ZimoGroup13-1/mobile.png"
              width={300}
              height={300}
              alt="Zimo mobile view image"
            />
          </div>
          <div>
            <Image
              className="m-2"
              src="/07_ZimoGroup13-1/lock.png"
              width={50}
              height={50}
              alt="Zimo encryption"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZimoGroup7;
