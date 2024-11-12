import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

function ZimoGroup23() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    //DOWNLOAD ZIMO
    <div className=" h-full lg:h-dvh lg:grid lg:grid-col-6 lg:grid-rows-4 grid grid-rows-5  ">
      <div className="  col-start-1 col-end-3 row-span-3  lg:flex lg:items-center lg:justify-end hidden">
      <Image
          data-aos="fade-down-right"
          data-aos-duration="1500" 
          src="/23_ZimoGroup17/Group 4799.png"
          width={300}
          height={300}
          alt="phone image"
        />
      </div>
      <div className=" lg:col-start-3 lg:col-span-2 lg:row-span-3 row-span-4 flex justify-center items-center">
      <Image
          src="/23_ZimoGroup17/Group 6437.png"
          width={200}
          height={200}
          alt="download zimo"
        />
      </div>
      <div className="col-end-7 col-span-2 row-span-3 lg:flex lg:items-center lg:justify-start hidden">
      <Image
          data-aos="fade-down-left"
          data-aos-duration="1500" 
          src="/23_ZimoGroup17/Group 4800.png"
          width={300}
          height={300}
          alt="phone image"
        />
      </div>
      <div className=" lg:col-start-2 lg:col-span-4 flex items-center justify-between flex-col row-span-1 px-2">
        <div className="flex flex-col justify-center">
          <div className="text-center text-amber-600 font-thin">Get the ZIMO app on a phone or tablet</div>
          <div className="text-center  text-zinc-700 font-thin">To install ZIMO, follow the link for your device from your smartphone or tablet.</div>
        </div>
        <div className="text-center pb-4 text-zinc-700 font-thin">ZIMO is available on many devices. The ZIMO app may come pre-installed or you may need to download and install it.</div>
      </div>
    </div>
  );
}

export default ZimoGroup23;
