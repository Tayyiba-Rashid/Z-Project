import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

function ZimoGroup19() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    //ZDOC
    <div className=" h-dvh grid grid-rows-8">
      <div className=" row-span-1 flex justify-center items-end m-4">
        <Image
          data-aos="fade-down"
          data-aos-duration="1500"
          src="/19_ZimoGroup13/Group 4774.png"
          width={800}
          height={800}
          alt="Zidoc encryption"
        />
      </div>
      <div className=" row-span-5 flex justify-center items-center">
        <Image
          data-aos="fade-up"
          data-aos-duration="1500"
          src="/19_ZimoGroup13/Group 4562.png"
          width={200}
          height={200}
          alt="ZDOC"
        />
      </div>
      <div className="row-span-1 flex justify-center items-center m-4">
        <Image
          data-aos="fade-up"
          data-aos-duration="1500"
          src="/19_ZimoGroup13/Document-signing software technology that lets you sign documents online..png"
          width={700}
          height={700}
          alt="ZDOC text"
        />
      </div>
      <div className=" row-span-1 flex justify-end items-center  px-4">
        <Image
          src="/19_ZimoGroup13/Group 6439.png"
          width={300}
          height={300}
          alt="signature"
        />
      </div>
    </div>
  );
}

export default ZimoGroup19;
