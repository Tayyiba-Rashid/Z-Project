import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";


function ZimoGroup26() {
  useEffect(() => {
    Aos.init();
  }, []);




  return (
    <div className='relative  h-screen flex justify-center items-center bg-black'>
      <div className='absolute inset-0 flex justify-center items-center mx-4'>
        <Image
        data-aos="flip-down"
        data-aos-duration="1000" 
          src="/26-ZimoGroup18/Group 4641.png"
          width={700}
          height={700}
          alt="background image"
          className="opacity-50 blur-md" 
        />
      </div>

      {/* Foreground Text */}
      <div className='relative z-10 text-center flex flex-col justify-center items-center text-black'>
        <div className='flex justify-center items-end'>
        <div className='px-4 py-2  font-light text-white lg:text-2xl'>INTERESTED IN WORKING WITH US?</div>
        
        </div>
        <div className='flex items-end justify-center'>
        <div className='px-4 py-2  font-light text-white lg:text-2xl'>Email</div>
        </div>
      </div>
    </div>
  )
}

export default ZimoGroup26