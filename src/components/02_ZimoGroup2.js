import React, {useRef, useState, useEffect} from "react";
import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css'
function ZimoGroup2() {

  useEffect(
    ()=> {Aos.init()
 },[])
  
  return (

    <>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block lg:col-span-1  items-center m-0 p-0"
      data-aos="fade-right" data-aos-duration="1500">
        <Image
          className="m-0 p-0 "
          
          src="/02_ZimoGroup2/logo.png"
          width={200}
          height={200}
          alt="logo"
        />
      </div>
      <div className="hidden sm:hidden md:hidden lg:block xl:hidden lg:col-span-1  items-center m-0 p-0 "
      data-aos="fade-right">
        <Image
          className="ml-14 p-0"
          src="/02_ZimoGroup2/logo.png"
          width={400}
          height={400}
          alt="logo"
        />
      </div>
      <div className="hidden sm:hidden  lg:hidden xl:hidden lg:col-span-1  items-center m-0 p-0 md:flex md:justify-center md:items-center md:mb-20 "
      data-aos="fade-right">
        <Image
          className="ml-14 p-0"
          src="/02_ZimoGroup2/logo.png"
          width={300}
          height={300}
          alt="logo"
        />
      </div>
      <div className=" md:hidden lg:hidden xl:hidden lg:col-span-1 justify-center items-center m-0 p-0  sm:flex sm:justify-center sm:items-center sm:mb-20 mx-16 ">
        <Image
          className="m-0 p-0 "
          src="/02_ZimoGroup2/logo.png"
          width={300}
          height={300}
          alt="logo"
        />
      </div>

      <div className="lg:col-span-4 text-white flex flex-col text-center sm:text-center md:text-center md:justify-start lg:text-center xl:items-center lg:justify-center p-4"
      data-aos="fade-up"
      data-aos-duration="2000">
        <div className="sm:text-2xl">WE ARE THE GLOBAL PLATFORM</div>
        <div className="sm:text-2xl">
          SERVICES IN OUR ONE HUNDRED AND TWENTY COUNTRIES.
        </div>
      </div>
      </>
  );
}

export default ZimoGroup2;
