import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

function ZimoGroup5() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section>
      <div className=" h-dvh sm:h-dvh grid grid-rows-6 bg-white"
      data-aos="fade-up" data-aos-duration="1500">
      <div className="row-span-3 flex items-end justify-center">
        <Image
          src="/05_ZimoGroup4.1/zimoai.png"
          width={300}
          height={300}
          alt="Zimo AI"
        />
      </div>
      <div className=" row-span-2 flex items-end justify-center lg:text-lg">
        ARTIFICIAL INTELLIGENCE FOR EVERYONE
      </div>
      <div className=" row-span-1 flex items-center lg:items-center justify-end py-4">
        <Image
          className="mr-6"
          src="/05_ZimoGroup4.1/ai.png"
          width={100}
          height={100}
          alt="Zimo AI"
        />
      </div>
    </div>
    </section>
  );
}

export default ZimoGroup5;
