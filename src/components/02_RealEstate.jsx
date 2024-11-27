import React from 'react'
import Image from 'next/image'

function RealEstate({ scrollToCategories }) {
  const handleClick = () => {
    scrollToCategories.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <div className='h-dvh grid grid-rows-10'>
      <div className=' xl:row-span-2 row-span-1 flex items-center justify-center px-4 xl:py-[94px]'>
        <div className='xl:text-[20px] lg:text-[15px] text-[10px]  font-lato tracking-[0.2em] text-center'>
          A REAL ESTATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD
        </div>
      </div>
      <div className=' row-span-8 grid xl:grid-cols-3 grid-cols-1 '>
        <div className='xl:col-span-2 xl:row-span-3 row-span-4  grid xl:grid-rows-2 xl:pl-8 '>
          <div className=' flex flex-col items-center justify-center xl:justify-start xl:items-start '>
           <span className='tracking-[0.13em] font-lato xl:text-[41px] lg:text-[25px] text-[12px] text-center xl:text-start leading-none'>A REVOLUTIONARY PLATFORM</span>
            <div className='tracking-widest font-lato xl:text-[70px] lg:text-[43px] text-[21px] text-center xl:text-start leading-none xl:py-6 py-3'>ENTRIES - SELLER</div>
            <div className='tracking-[0.125em] font-lato xl:text-[100px] lg:text-[62px] text-[30px] text-center xl:text-start leading-none'>WORLDWIDE</div>
          </div>
          <div className='flex flex-col xl:items-start items-center justify-center px-3 ' >
            <div className="font-lato  xl:text-[40px] lg:text-[30px] text-[18px] tracking-[0.25em] mb-4 text-center xl:text-start">
              THE BEST OF THE BEST
            </div>
            <div className="font-lato xl:text-[20px] lg:text-[14px] text-[7px]   tracking-widest leading-loose text-center  xl:text-start">
              A COMBINATION OF AUTOMATION AND MANUAL CURATION
              <br className='md:hidden block'/>
              OUR PRO AGENTS AND
              <br className='xl:block hidden'/> MODERATION TEAM SELECTS THE <br className='xl:hidden block'/>
              HIGHEST QUALITY LISTINGS ON THE MARKET 
              <br className='xl:block hidden'/> FROM
              <br className='md:hidden block'/>
               ACROSS THE WORLD.
            </div>

          </div>
        </div>
        <div className=' col-span-1 xl:row-span-3 row-span-2 flex flex-col items-center justify-center'>
          <Image
            className='xl:block hidden'
            src='/02_Page/Group 4743.png'
            width={590}
            height={145} />
          <Image
            className='hidden lg:block xl:hidden'
            src='/02_Page/Group 4743.png'
            width={300}
            height={300} />
          <Image
            className='lg:hidden block'
            src='/02_Page/Group 4743.png'
            width={200}
            height={200} />
          <span className='text-center font-lato xl:text-[20px] lg:text-[15px] text-[8px] tracking-widest leading-loose pt-6 '>CONNECTING USERS FROM ACCROSS THE GLOBE <br />
            TO FACILITATE LIFE'S MOST IMPORTANT
            <br />
            PERSONAL TRANSACTIONS
          </span>
        </div>
      </div>
      <div className=' row-span-1 flex items-center justify-center xl:pb-4'>
        <Image
          onClick={handleClick}
          className='xl:block hidden'
          src='/02_Page/Path 27315.png'
          width={40}
          height={80} />
        <Image
          onClick={handleClick}
          className='xl:hidden block'
          src='/02_Page/Path 27315.png'
          width={40}
          height={40} />
      </div>
    </div>
  )
}

export default RealEstate