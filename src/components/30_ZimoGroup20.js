import React from "react";
import Image from "next/image";

function ZimoGroup30() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 flex justify-center items-center mx-4">
        <Image
          src="/30_ZimoGroup20/Group 4519.png"
          width={700}
          height={700}
          alt="background image"
          className="opacity-50 blur-md"
        />
      </div>

      {/* Foreground Text */}
      <div className="absolute inset-0  p-4 h-full  py-6 overflow-hidden">
      <div className="font-medium flex justify-center items-center">CONTACT</div>
        <div className="h-full flex lg:flex-row flex-col lg:justify-between items-center">
          <div className="flex flex-col lg:justify-between h-full py-6">
          <div className="px-4 py-6">
            <Image
              src="/30_ZimoGroup20/Group 4720.png"
              width={100}
              height={100}
              alt="inquries"
            />
          </div>
          <div className="px-4 py-6">
            <Image
              src="/30_ZimoGroup20/Group 6438.png"
              width={400}
              height={400}
              alt="ZIMO GROUP"
            />
          </div>
          <div className="px-4 py-6">
            <Image
              src="/30_ZimoGroup20/text.png"
              width={500}
              height={500}
              alt="text"
            />
          </div>
        </div>
        
        <div className="flex flex-row justify-center items-center">
          <div className="px-4">
            <Image
              src="/30_ZimoGroup20/Group 4722.png"
              width={150}
              height={150}
              alt="footer links"
            />
          </div>
          <div className="px-4">
          <Image
              src="/30_ZimoGroup20/Groupqr.png"
              width={180}
              height={180}
              alt="footer links"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default ZimoGroup30;
