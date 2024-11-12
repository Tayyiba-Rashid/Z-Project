import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function ZimoGroup20() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    //TEXT 1
    <div className="h-dvh bg-black flex items-center justify-center text-white p-6 text-center lg:text-2xl">
      <p data-aos="flip-down" data-aos-duration="1500">
        A REAL ESTATE AND PROPERTY PLATFORM THAT WILL CHANGE THE WORLD.
      </p>
    </div>
  );
}

export default ZimoGroup20;
