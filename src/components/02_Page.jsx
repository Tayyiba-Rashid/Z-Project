import React from 'react'
import Image from 'next/image'

function Page02({ scrollToPage03 }) {
  const handleClick = () => {

    scrollToPage03.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className='h-dvh grid grid-rows-8'>
      <div className=' row-span-1 flex items-center justify-center p-4 '>
        <div className='tracking-[0.25em] font-lato md:text-sm text-[0.60em] text-center px-3'>
          A REAL ESTATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD
        </div>
      </div>
      <div className=' row-span-6 grid lg:grid-cols-3 grid-cols-1 '>
        <div className='lg:col-span-2 lg:row-span-3 row-span-4  grid lg:grid-rows-2 lg:pl-8'>
          <div className=' grid items-center justify-center lg:justify-start lg:items-start md:h-40 h-10'>
            <div className='tracking-widest font-lato md:text-2xl text-xs text-center md:text-start '>A REVOLUTIONARY PLATFORM</div>
            <div className='tracking-[0.15em] font-lato md:text-4xl text-lg text-center md:text-start '>ENTRIES - SELLER</div>
            <div className='tracking-[0.29em] font-lato md:text-5xl text-2xl font-medium text-center md:text-start '>WORLDWIDE</div>
          </div>
          <div className='flex flex-col md:items-start items-center justify-center px-3' >
            <div className="font-lato font-[550] md:text-3xl text-xl lg:font-medium tracking-[0.25em] mb-4 text-center md:text-start">
              THE BEST OF THE BEST
            </div>
            <div className="font-lato font-thin text-xs sm:text-[0.78em] sm:tracking-[0.15em] tracking-widest leading-loose text-center  md:text-start">
              A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND
              <br /> MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET
              <br /> FROM ACROSS THE WORLD.
            </div>

          </div>
        </div>
        <div className=' col-span-1 lg:row-span-3 row-span-2 flex flex-col items-center justify-center'>
          <Image
            className='lg:block hidden'
            src='/02_Page/Group 4743.png'
            width={350}
            height={350} />
          <Image
            className='lg:hidden block'
            src='/02_Page/Group 4743.png'
            width={200}
            height={200} />
          <span className='text-center font-lato font-thin text-[0.7em] sm:text-[0.79em] sm:tracking-[0.15em] tracking-widest leading-loose pt-6'>CONNECTING USERS FROM ACCROSS THE GLOBE <br />
            TO FACILITATE LIFE'S MOST IMPORTANT
            <br />
            PERSONAL TRANSACTIONS
          </span>
        </div>
      </div>
      <div className=' row-span-1 flex items-center justify-center'>
        <Image
          onClick={handleClick}
          className='lg:block hidden'
          src='/02_Page/Path 27315.png'
          width={45}
          height={45} />
        <Image
          onClick={handleClick}
          className='lg:hidden block'
          src='/02_Page/Path 27315.png'
          width={40}
          height={40} />
      </div>
    </div>
  )
}

export default Page02