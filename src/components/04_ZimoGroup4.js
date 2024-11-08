import React from "react";
import Image from "next/image";

function ZimoGroup4() {
  return (
    <>
      <div className="h-dvh bg-black flex items-center justify-center relative">
        <div className="absolute">
          <Image
            className="m-2 opacity-20 blur-sm"
            src="/04_ZimoGroup4/zimobg.png"
            width={800}
            height={800}
            alt="Zimo Group"
          />
        </div>
        <div className="text-zinc-700">
          <div className="absolute top-1/4 right-10">FINANCE</div>
          <div className="absolute top-10 left-5">LEGAL</div>
          <div className="absolute top-40 left-10">CYBER SECURITY</div>
          <div className="absolute top-32 right-1/3">JETS</div>
          <div className="absolute bottom-72 left-1/4">FILE TRANSFER</div>
          <div className="absolute bottom-1/2 left-10">PLATFORM</div>
          <div className="absolute top-48 left-">DATA</div>
          <div className="absolute bottom-10 left-10">FOUNDATION</div>
          <div className="absolute bottom-5 left-1/3">TRAVEL</div>
          <div className="absolute top-2/3 left-1/4">CARS</div>
          <div className="absolute top-16 ">ARTIFICIAL INTELLIGENCE
          </div>
          <div className="absolute top-96 right-10">GAMING</div>
          <div className="absolute bottom-5 left-2/3">DIAMONDS</div>
          <div className="absolute top-2/3 right-1/5">WATCHES</div>
          <div className="absolute bottom-28 left-48">YACHTS</div>
          <div className="absolute top-5 right-1/4">PRIVATE ISLANDS</div>
          <div className="absolute top-1/3 right-1/4">VIDEO COMMUNICATIONS</div>
        </div>
      </div>
    </>
  );
}

export default ZimoGroup4;
