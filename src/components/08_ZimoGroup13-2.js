import React from 'react'
import Image from "next/image";


function ZimoGroup8() {
  
  return (
    
    <div className="h-dvh flex items-center justify-center relative bg-zinc-800">
      <div className="absolute mx-2 ">
        <Image
          className="m-2 opacity-20 blur-sm"
          src="/07_ZimoGroup13-1/bgmeet.png"
          width={600}
          height={600}
          alt="Zimo Group"
        />
      </div>
      <div className="w-full h-full grid grid-col-2 lg:grid-cols-3 bg-zinc-600">
        <div className=" lg:col-span-1 col-span-1 flex flex-col  justify-between">
          <div className=" flex justify-center items-center pt-8">
            <Image
              className=""
              src="/08_ZimoGroup13-2/zimomeet.png"
              width={300}
              height={300}
              alt="Zimo meet text"
            />
          </div>
          <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center lg:ml-16 ">
            <div className="text-sm text-white">PREMIUM VIDEO MEETINGS</div>
            <div className="text-sm text-white">END-TO-END ENCRYPTION</div>
            <div className="text-sm text-white">LOBBY MODE</div>
            <div className="text-sm text-white">PASSWORD PROTECTED MEETINGS</div>
            <div className="text-sm text-white">CUSTOMISED LINKS</div>
            <div className="text-sm text-white">RECORDINGS</div>
            <div className="text-sm text-white">FREE FOR EVERYONE</div>
          </div>
          <div className=" flex items-center justify-center mx-16">
            <Image
              className="m-2"
              src="/08_ZimoGroup13-2/text.png"
              width={600}
              height={600}
              alt="discover platform image"
            />
          </div>
          <div className="bg-pink lg:ml-16 flex items-center justify-center lg:items-start lg:justify-start text-sm text-white">
            END-TO-END ENCRYPTION
          </div>
        </div>
        <div className=" lg:col-span-1 col-span-1 flex flex-col items-center justify-center">
          <div>
            <Image
              className="m-2"
              src="/08_ZimoGroup13-2/meetlogo.png"
              width={300}
              height={300}
              alt="Zimo meet logo"
            />
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:items-end lg:justify-center  lg:col-span-1 pr-8 py-8">
         
            <Image
              className="m-2"
              src="/08_ZimoGroup13-2/mobile.png"
              width={290}
              height={290}
              alt="Zimo mobile view image"
            />
        </div>
      </div>
    </div>
  )
}

export default ZimoGroup8