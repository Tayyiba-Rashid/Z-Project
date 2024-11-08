import React from "react";
import Image from "next/image";

function ZimoGroup12() {
  return (
    <div className="h-dvh">
      <div className="relative w-full h-dvh">
        <div
          className="w-full h-full bg-cover bg-center relative z-0"
          style={{
            backgroundImage: "url('/11-18_ZimoGroup5/carRectangle 922.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 grid grid-row-5   h-full">
            <div className=" row-span-4 flex lg:items-end justify-center items-center text-4xl font-MD opacity-75 text-white">
              CARS
            </div>
            <div className=" row-span-1 flex lg:justify-end items-end justify-center pr-8 pb-4 pl-4">
              <Image
                src="/11-18_ZimoGroup5/Group 4570.png"
                width={300}
                height={300}
                alt="Zimo AI"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZimoGroup12;