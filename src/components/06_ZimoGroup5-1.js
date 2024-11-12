import React from "react";
import Image from "next/image";

function ZimoGroup6() {
  return (
    <div
      className="w-full h-dvh relative bg-no-repeat bg-cover overflow-hidden "
      style={{ backgroundImage: "url('/06_ZimoGroup5-1/lion.png')" }}
    >
      <div className="relative top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center flex-col gap-5 px-4">
      
        <Image
          src="/06_ZimoGroup5-1/gamestudio.png"
          width={600}
          height={600}
          alt="Game Studio"
        />
      </div>
    </div>
  );
}

export default ZimoGroup6;

