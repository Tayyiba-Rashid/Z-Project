import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function ZimoGroup22() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    //TEXT 2
    <div className="h-dvh bg-black flex items-center justify-center text-white p-6 text-center lg:text-2xl">
      <p data-aos="flip-down" data-aos-duration="1500">
        GLOBAL ACCESS TO REAL ESTATE AND PROPERTY TO EVERYONE. </p>
    </div>
  );
}

export default ZimoGroup22;
