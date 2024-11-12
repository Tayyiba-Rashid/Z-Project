import React, {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'


function ZimoGroup11() {
  useEffect(
    ()=> {Aos.init()
 },[])


  return (
    //REAL EASTATE
    <div className="h-dvh">
      <div className="relative w-full h-dvh">
        <div
          className="w-full h-full bg-cover bg-center relative z-0 bg-fixed"
          style={{ backgroundImage: "url('/11-18_ZimoGroup5/Rectangle 922.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 flex items-center justify-center h-full">
            <h2 className="text-4xl font-MD opacity-75 text-white"
            data-aos="fade-left"
            data-aos-duration="1500">
              REAL ESTATE
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZimoGroup11;
