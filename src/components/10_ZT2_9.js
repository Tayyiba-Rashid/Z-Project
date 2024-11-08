import React from "react";
import Image from "next/image";

function ZimoGroup10() {
  return (
  
    <div className="h-dvh">
      <div className="relative w-full h-dvh">
        <div
          className="w-full h-full bg-cover bg-center relative z-0"
          style={{
            backgroundImage: "url('/10_ZT2_9/Group 6438.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
          <div className="h-dvh  grid grid-row-9 ">
            <div className=" row-span-6 flex justify-end items-end px-16">
              <Image
                src="/10_ZT2_9/Group 4852.png"
                width={900}
                height={900}
                alt="Zimo meet text"
              />
            </div>
            <div className=" row-span-4 flex lg:justify-end lg:items-center lg:pr-16 justify-center items-end pb-4">
              <Image
                src="/10_ZT2_9/WWW.ZITRANSFER.COM.png"
                width={150}
                height={150}
                alt="Zimo meet text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZimoGroup10;
