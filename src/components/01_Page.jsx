import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Page01({ scrollToPage02 }) {
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
    scrollToPage02.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="h-dvh relative ">
      <div
        className="w-full h-full bg-cover bg-center relative z-0 bg-fixed"
        style={{ backgroundImage: "url('/01_Page/bg.png')" }}
      >
        <div className="h-dvh flex flex-col justify-between md:px-8 pt-6 ">
          <div className="grid md:grid-cols-3 grid-cols-2 p-2 ">
            {/* 1 */}
            <div className="hidden md:flex flex-center col-span-1 ">
              <Image src="/01_Page/Group 4772.png" width={200} height={200} />
              <div className="text-white flex items-end justify-center px-4">
                <span className="font-normal tracking-wider">ABOUT</span>
              </div>
            </div>
            {/* 2 */}
            <div className="lg:pl-12 col-span-1 md:flex md:justify-center justify-start ">
              <Image src="/01_Page/Group 3005.png" width={150} height={150} />
            </div>
            {/* 3 */}
            <div className="grid sm:grid-cols-2 col-span-1 ">
              <div className="lg:hidden flex flex-row-reverse w-full justify-between pl-2 col-span-1 ">
                <div className="flex items-center">
                  <Image
                    src="/01_Page/Group 3035.png"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="flex items-center">
                  <Image src="/01_Page/Path 7582.png" width={15} height={15} />
                </div>
                <div className="flex items-center">
                  <Image
                    src="/01_Page/Group 2867.png"
                    width={15}
                    height={15}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center col-span-1 ">
                <div className="flex text-xs item-end justify-end text-white w-full ">
                  <span className='px-2'>{time}</span><span className='xl:text-xs lg:text-[0.7em]  md:text-right text-[0.7em] '>LONDON UNITED KINGDOM</span>
                </div>
                <div className="flex items-end justify-end text-xs text-end text-gold">
                  {date}
                </div>
              </div>
              <div className="hidden lg:flex w-full justify-between pl-2 col-span-1">
                <div className="flex items-center">
                  <Image
                    src="/01_Page/Group 3035.png"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="flex items-center">
                  <Image src="/01_Page/Path 7582.png" width={15} height={15} />
                </div>
                <div className="flex items-center">
                  <Image
                    src="/01_Page/Group 2867.png"
                    width={15}
                    height={15}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-start justify-center items-center lg:pl-8">
            <Image
              src="/01_Page/Group 47711.png"
              width={300}
              height={300}
              alt="Discover a new world"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-sm font-lato tracking-widest text-grey opacity-50">
              BRING THE WORLD CLOSER TOGETHER
            </div>
            <div className="pt-4 pb-4" onClick={handleClick}>
              <Image
                src="/01_Page/Path 59.png"
                width={45}
                height={45}
                alt="move next"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
