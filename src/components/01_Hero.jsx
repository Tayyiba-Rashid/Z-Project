import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero({ scrollToRealEstate }) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const timeNow = new Date();
    setTime(
      timeNow.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
      })
    );
    setDate(
      timeNow.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    );
  }, []);

  const handleClick = () => {
    scrollToRealEstate.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="h-dvh relative">
      <div
        className="w-full h-full bg-cover bg-center relative z-0 bg-fixed"
        style={{ backgroundImage: "url('/01_Page/bg.png')" }}
      >
        <div className="h-dvh flex flex-col justify-between md:px-8 pt-6  ">
          <div>
            <div className="grid md:grid-cols-3  p-2 ">
              {/* 1 */}
              <div className="hidden md:flex flex-center col-span-1 ">
                <div className='flex items-end justify-center'>
                  <Image src="/01_Page/Group 3055.png" width={66} height={50} />
                </div>
                <div className=' flex items-end justify-center pl-8 pr-4'>
                  <Image className=''
                    src="/01_Page/Group 3385.png" width={185} height={50} />
                </div>
                <div className="text-white flex items-end justify-center px-4">
                  <span className="font-lato tracking-wider text-xl text-justify leading-none">ABOUT</span>
                </div>
              </div>
              {/* 2 */}
              <div className="lg:pl-12 col-span-1 flex justify-center items-end ">
                <div>
                  <Image className='flex' src="/01_Page/Group 3005.png" width={205} height={50} />
                </div>

              </div>
              {/* 3 */}
              <div className="hidden md:grid lg:grid-cols-2 col-span-1 ">
                <div className="hidden lg:flex flex-col justify-center col-span-1 ">
                  <div className=" flex text-xs item-end justify-end text-white w-full ">
                    <span className='xd:px-2 px-0 text-sm'></span><span className='md:text-right text-sm'>{time} LONDON UNITED KINGDOM</span>
                  </div>
                  <div className="flex items-end justify-end text-sm text-end text-gold">
                    {date}
                  </div>
                </div>
                {/* ICON */}
                <div className="flex w-full pl-4 col-span-1 md:gap-[60px] lg:gap-[30px] xd:gap-[90px] justify-start  ">
                  <div className="flex items-center">
                    <Image
                      src="/01_Page/Group 3035.png"
                      width={38}
                      height={25}
                    />
                  </div>
                  <div className="flex items-center">
                    <Image src="/01_Page/Path 7582.png" width={21} height={25} />
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/01_Page/Group 2867.png"
                      width={21}
                      height={25}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden h-[60px] md:flex items-end justify-start'>
              <span className='flex items-center '>
                <Image

                  src="/01_Page/Path 7815.png"
                  width={22}
                  height={16}
                />
              </span>
              <span className='text-white flex items-center text-[22px] ml-[14px]  leading-none'>BACK</span>
            </div>
          </div>
          <div className="flex lg:justify-start justify-center items-center lg:pl-8">
            <div className='flex flex-col h-[190px]'>
              <span className='text-white md:text-[40px] text-[20px] tracking-widest'>DISCOVER</span>
              <span className='text-white md:text-[60px] text-[30px] tracking-widest' >A NEW WORLD</span>
              <span className='text-[#737373] md:text-[20px] text-[15px] md:tracking-widest  md:pt-[26px] pt-[10px]' >FOR THOSE WHO WISH FOR MORE...</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="md:text-[20px] text-[12px] font-lato tracking-widest text-[#737373]  lg:pb-4">
              BRING THE WORLD CLOSER TOGETHER
            </div>
            <div className="pt-4 pb-4 " onClick={handleClick}>
              <Image
                src="/01_Page/Path 59.png"
                width={40}
                height={80}
                alt="move next"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
