import React, {useEffect} from "react";
import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css'

function ZimoGroup3() {

  useEffect(
    ()=> {Aos.init()
 },[])
  
  return (
    <div className="grid grid-row-3 h-dvh  ">
      <div className=" flex justify-center items-end text-1xl"
      data-aos="fade-down" data-aos-duration="1500">
      REVOLUTIONARY
      </div>
      <div className=" grid lg:grid-cols-5 grid-cols-1 grid-row-11">
        <div className=" m-2 lg:col-span-2 flex lg:justify-end justify-center items-center row-span-5"
        data-aos="flip-down" data-aos-duration="1500">
          <Image
            className="m-0 p-0"
            src="/03_ZimoGroup3/zimo.png"
            width={200}
            height={200}
            alt="zimo"
          />
        </div>
        <div className="lg:col-span-1 flex justify-center items-center row-span-1 lg:row-span-5">
        <Image
            className="m-0 p-0 hidden lg:block"
            src="/03_ZimoGroup3/linevert.png"
            width={1}
            height={80}
            style={{ height: '100px'}}
            alt="line break"
          />
        </div>
        <div className="lg:col-span-1 flex justify-center items-center row-span-1 lg:row-span-5 lg:hidden">
        <Image
            className="m-0 p-0 block lg:hidden rotate-90"
            src="/03_ZimoGroup3/linevert.png"
            width={1}
            height={80}
            style={{ height: '100px'}}
            alt="line break"
          />
        </div>
        
        <div className="m-2 lg:col-span-2 flex lg:justify-start justify-center items-center row-span-5"
        data-aos="flip-down" data-aos-duration="1500">
          <Image
            className="m-0 p-0"
            src="/03_ZimoGroup3/zimopro.png"
            width={200}
            height={200}
            alt="zimo-pro"
          />
        </div>
      </div>
      <div className=" flex justify-center lg:items-start items-center mx-4 text-1xl text-center"
      data-aos="fade-up" data-aos-duration="1500">
      THE ONLY PLATFORM OF IT'S KIND IN THE WORLD.
      </div>
    </div>
  );
}

export default ZimoGroup3;
