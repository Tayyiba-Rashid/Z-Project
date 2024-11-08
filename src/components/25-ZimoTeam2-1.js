import React from "react";
import Image from "next/image";

function ZimoGroup25() {
  return (
    <div class="lg:grid h-dvh lg:grid-cols-6 lg:gap-4 grid grid-col-2 bg-black opacity-90">
      <div class="lg:col-start-2 lg:col-span-4  col-start-2 col-span-1 flex justify-center items-center pl-4">
        <Image
          src="/24-ZimoTeam2/Group 6438.png"
          width={500}
          height={500}
          alt="phone image"
        />
      </div>
      <div class="lg:col-end-7 lg:col-span-1  col-start-3 col-span-1  flex justify-center items-center pr-4">
        <Image
          src="/24-ZimoTeam2/Group 6435.png"
          width={150}
          height={150}
          alt="phone image"
        />
      </div>

      <div class="lg:col-start-1 lg:col-end-7  col-start-1 col-span-2 flex justify-start items-center px-16">
        <Image
          src="/24-ZimoTeam2/Group 4753.png"
          width={300}
          height={300}
          alt="phone image"
        />
      </div>
      <div class="lg:col-start-1 lg:col-end-4  col-start-1 col-span-2 flex justify-start items-center px-16">
      <Image
          src="/24-ZimoTeam2/Group 4768.png"
          width={600}
          height={600}
          alt="phone image"
        />
      </div>
      <div class="lg:col-end-7 lg:col-span-2  col-start-3 col-span-1 flex justify-end items-center px-16">
      
        <Image
          src="/24-ZimoTeam2/colorGroup 6436.png"
          width={150}
          height={150}
          alt="phone image"
        />
      </div>
    </div>
  );
}

export default ZimoGroup25;



