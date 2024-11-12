import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";


function ZimoGroup21() {

  useEffect(() => {
    Aos.init();
  }, []);


  return (
    //BRING THE WORLD CLOSER TOGETHER
    <div className='relative  h-screen flex justify-center items-center'>
      <div className='absolute inset-0 flex justify-center items-center mx-4'>
        <Image
           data-aos="zoom-in"
           data-aos-duration="1500" 
          src="/21_ZimoGroup15/Group 4519.png"
          width={700}
          height={500}
          alt="background image"
          className="blur-md" 
        />
      </div>

      {/* Foreground Text */}
      <div className='relative z-10 text-center flex flex-col justify-center items-center text-black'>
        <div className='px-4 py-2 text-2xl font-thin'
         data-aos="fade-up"
         data-aos-duration="1500" >Bringing the world closer together.</div>
        <div className='px-4 py-2'>
        <Image
           data-aos="fade-up"
           data-aos-duration="1500" 
          src="/21_ZimoGroup15/Group 3005.png"
          width={100}
          height={100}
          alt="BRING THE WORLD CLOSER TOGETHER"
        />
        </div>
      </div>
    </div>
  )
}

export default ZimoGroup21