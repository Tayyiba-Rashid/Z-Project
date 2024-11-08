import React from "react";
import Image from "next/image";

function ZimoGroup1() {

   

  return (
    <div className="bg-white grid md:grid-cols-3 md:gap-4 h-dvh items-center grid-rows-10">
      <div class="row-span-9">
        <Image
          className="md:px-16 px-4 "
          src="/01_ZimoGroup1/zimoGroup.png"
          width={500}
          height={500}
        ></Image>
      </div>
      <div class="hidden md:block md:col-span-2 ... sm:disabled: row-span-9">
        <Image
          className="opacity-10 blur-md justify-start"
          src="/01_ZimoGroup1/zimo.png"
          width={800}
          height={400}
        ></Image>
      </div>
      <div className="md:col-span-3 row-span-1 flex justify-center">
      <Image
          src="/01_ZimoGroup1/arrow.png"
          width={50}
          height={50}
        ></Image>
      </div>
    </div>
  );
}

export default ZimoGroup1;


