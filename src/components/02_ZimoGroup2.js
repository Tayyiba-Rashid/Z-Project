import React from 'react'
import Image from 'next/image'

function ZimoGroup2() {
  return (
    <div className="bg-black grid lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 md:gap-4 h-dvh items-center justify-center sm:flex sm:flex-col sm:justify-center lg:flex-row">
    <div className="hidden sm:hidden md:hidden lg:hidden xl:block lg:col-span-1  items-center m-0 p-0">
      <Image
        className="m-0 p-0"
        src="/02_ZimoGroup2/logo.png"
        width={200}
        height={200}
      />
    </div>
    <div className="hidden sm:hidden md:hidden lg:block xl:hidden lg:col-span-1  items-center m-0 p-0">
      <Image
        className="ml-14 p-0"
        src="/02_ZimoGroup2/logo.png"
        width={400}
        height={400}
      />
    </div>
    <div className="hidden sm:hidden  lg:hidden xl:hidden lg:col-span-1  items-center m-0 p-0 md:flex md:justify-center md:items-center md:mb-20 ">
      <Image
        className="ml-14 p-0"
        src="/02_ZimoGroup2/logo.png"
        width={400}
        height={400}
      />
    </div>
    <div className=" md:hidden lg:hidden xl:hidden lg:col-span-1 justify-center items-center m-0 p-0  sm:flex sm:justify-center sm:items-center sm:mb-20 mx-16" >
      <Image
        className="m-0 p-0 "
        src="/02_ZimoGroup2/logo.png"
        width={400}
        height={400}
      />
    </div>
    
    <div className="lg:col-span-4 text-white flex flex-col text-center sm:text-center md:text-center md:justify-start lg:text-center xl:items-center lg:justify-center p-4">
      <div className="sm:text-2xl">WE ARE THE GLOBAL PLATFORM</div>
      <div className="sm:text-2xl">SERVICES IN OUR ONE HUNDRED AND TWENTY COUNTRIES.</div>
    </div>
  </div>
  
  
  )
}

export default ZimoGroup2