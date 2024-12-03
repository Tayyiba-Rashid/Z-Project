import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'

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
      timeNow
        .toLocaleDateString('en-GB', {
          weekday: 'long',
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })
        .replace(/^(.*?)(\s)/, '$1, ')
        .toUpperCase()
    );
  }, []);


  const handleClick = () => {
    scrollToRealEstate.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };


  const pageVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="h-dvh relative ">
      <div
        className="w-full h-full bg-cover bg-center relative z-0 bg-fixed"
        style={{ backgroundImage: "url('/01_Page/bg.png')" }}
      >
        <div className="h-dvh flex flex-col justify-between py-2  3xl:px-[60px] sm:px-[30px] px-2 lg:pt-6 md:pt-6 pt-5  ">
          <div>
            {/* HEAD */}
            <div className="grid grid-cols-3  ">
              {/* 1 */}

              <div className='grid lg:grid-cols-6 md:grid-cols-5 grid-cols-5 col-span-1'>
                <div className='lg:col-span-1 md:col-span-1 col-span-1 flex items-end'>
                  <Image
                    className='3xl:block hidden'
                    src="/01_Page/Group 3055.png" width={66} height={50} />
                  <Image
                    className='3xl:hidden 2xl:block hidden'
                    src="/01_Page/Group 3055.png" width={53} height={40} />
                  <Image
                    className='2xl:hidden xl:block hidden'
                    src="/01_Page/Group 3055.png" width={47} height={36} />
                  <Image
                    className='xl:hidden lg:block hidden'
                    src="/01_Page/Group 3055.png" width={41} height={30} />
                  <Image
                    className='lg:hidden md:block hidden'
                    src="/01_Page/Group 3055.png" width={32} height={25} />
                  <Image
                    className='md:hidden sm:block hidden '
                    src="/01_Page/Group 3055.png" width={27} height={20} />
                  <Image
                    className='sm:hidden block '
                    src="/01_Page/Group 3055.png" width={20} height={20} />
                </div>
                <div className='lg:col-span-2 md:col-span-2 col-span-4 flex items-end pl-2 md:pl-0'>
                  <Image
                    className='3xl:block hidden'
                    src="/01_Page/Group 3385.png" width={185} height={50} />
                  <Image
                    className='3xl:hidden 2xl:block hidden'
                    src="/01_Page/Group 3385.png" width={148} height={40} />
                  <Image
                    className='2xl:hidden xl:block hidden'
                    src="/01_Page/Group 3385.png" width={130} height={35} />
                  <Image
                    className='xl:hidden lg:block hidden'
                    src="/01_Page/Group 3385.png" width={112} height={50} />
                  <Image
                    className='lg:hidden md:block hidden'
                    src="/01_Page/Group 3385.png" width={82} height={22} />
                  <Image
                    className='md:hidden sm:block hidden'
                    src="/01_Page/Group 3385.png" width={74} height={20} />
                  <Image
                    className='sm:hidden block '
                    src="/01_Page/Group 3385.png" width={70} height={20} />
                </div>
                <div className='ld:col-span-3 md:col-span-2 hidden md:flex items-end  md:pl-2 3xl:pl-0'>
                  <span className=" text-white font-lato tracking-wider 2xl:text-[20px] xl:text-[18px] md:text-[13px] text-[15px]  text-justify leading-none flex items-end h-full">ABOUT</span>
                </div>
              </div>

              {/* 2 */}
              <div className="xl:pl-12 col-span-1 flex justify-center items-end ">
                <div>
                  <Image
                    className='3xl:block hidden' src="/01_Page/Group 3005.png" width={205} height={50} />
                  <Image
                    className='3xl:hidden 2xl:block hidden' src="/01_Page/Group 3005.png" width={164} height={40} />
                  <Image
                    className='2xl:hidden xl:block hidden' src="/01_Page/Group 3005.png" width={144} height={35} />
                  <Image
                    className='xl:hidden lg:block hidden' src="/01_Page/Group 3005.png" width={150} height={50} />
                  <Image
                    className='lg:hidden md:block hidden' src="/01_Page/Group 3005.png" width={103} height={25} />
                  <Image
                    className='md:hidden block ' src="/01_Page/Group 3005.png" width={84} height={20} />
                </div>

              </div>
              {/* 3 */}
              <div className="grid md:grid-cols-2 col-span-1 ">
                <div className="hidden md:flex flex-col justify-center col-span-1 ">
                  <div className=" flex text-xs item-end justify-end text-white w-full ">
                    <span className='3xl:px-2 px-0 2xl:text-[14px] xl:text-[12px]'></span><span className='md:text-right 2xl:text-[14px] xl:text-[12px] lg:text-[10px] md:text-[7px]'>{time} LONDON UNITED KINGDOM</span>
                  </div>
                  <div className="flex items-end justify-end 2xl:text-[14px] xl:text-[12px] lg:text-[10px]  md:text-[7px] text-end text-gold">
                    {date}
                  </div>
                </div>
                {/* ICON */}

                <div className="grid md:grid-cols-3 sm:grid-cols-5 grid-cols-3 px-2 2xl:pl-4 col-span-1 md:items-center items-end h-full">
                  <div className='md:hidden hidden sm:block sm:col-span-2'></div>
                  <div className="md:col-span-1 col-span-1 flex lg:justify-start justify-end">
                    <Image
                      className='2xl:block hidden'
                      src="/01_Page/Group 3035.png"
                      width={38}
                      height={25}
                    />
                    <Image
                      className='2xl:hidden xl:block hidden'
                      src="/01_Page/Group 3035.png"
                      width={30}
                      height={20}
                    />
                    <Image
                      className='xl:hidden lg:block hidden'
                      src="/01_Page/Group 3035.png"
                      width={24}
                      height={17}
                    />
                    <Image
                      className='lg:hidden md:block hidden '
                      src="/01_Page/Group 3035.png"
                      width={21}
                      height={12}
                    />
                    <Image
                      className='md:hidden block h-full'
                      src="/01_Page/Group 3035.png"
                      width={18}
                      height={12}
                    />
                  </div>
                  <div className="md:col-span-1 col-span-1 flex lg:justify-center justify-end">
                    <Image
                      className='2xl:block hidden'
                      src="/01_Page/Path 7582.png"
                      width={21}
                      height={25} />
                    <Image
                      className='2xl:hidden xl:block hidden'
                      src="/01_Page/Path 7582.png"
                      width={17}
                      height={20} />
                    <Image
                      className='xl:hidden lg:block hidden'
                      src="/01_Page/Path 7582.png"
                      width={13}
                      height={16} />
                    <Image
                      className='lg:hidden md:block hidden '
                      src="/01_Page/Path 7582.png"
                      width={13}
                      height={12} />
                    <Image
                      className='md:hidden block h-full'
                      src="/01_Page/Path 7582.png"
                      width={11}
                      height={12} />
                  </div>
                  <div className="md:col-span-1col-span-1  flex justify-end">
                    <Image
                      className='2xl:block hidden'
                      src="/01_Page/Group 2867.png"
                      width={21}
                      height={25}
                    />
                    <Image
                      className='2xl:hidden lg:block hidden'
                      src="/01_Page/Group 2867.png"
                      width={13}
                      height={16}
                    />
                    <Image
                      className='lg:hidden md:block hidden '
                      src="/01_Page/Group 2867.png"
                      width={13}
                      height={18}
                    />
                    <Image
                      className='md:hidden block h-full'
                      src="/01_Page/Group 2867.png"
                      width={10}
                      height={12}
                    />
                  </div>
                </div>

              </div>
            </div>
            {/* BACK */}
            <div className='hidden h-[60px] md:flex items-end justify-start '>
              <span className='flex items-center '>
                <Image
                  className='lg:block hidden'
                  src="/01_Page/Path 7815.png"
                  width={22}
                  height={16}
                />
                <Image
                  className='lg:hidden md:block'
                  src="/01_Page/Path 7815.png"
                  width={16}
                  height={16}
                />
              </span>
              <span className='text-white flex items-center 2xl:text-[22px] xl:text-[18px] lg:text-[15px] md:text-[12px] ml-[14px]  leading-none'>BACK</span>
            </div>
          </div>
          {/* body */}
          <div className="flex lg:justify-start justify-center items-center ">
            <motion.div className='flex flex-col justify-center h-[190px]'
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <span className='text-white 2xl:text-[40px] xl:text-[25px]  lg:text-[23px] md:text-[21px] sm:text-[20px] text-[18px] tracking-widest md:text-start text-center'>DISCOVER</span>
              <span className='text-white 2xl:text-[60px] xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[28px] text-[26px] tracking-widest md:text-start text-center' >A NEW WORLD</span>
              <span className='text-[#737373] 2xl:text-[20px] xl:text-[13px] lg:text-[10px] md:text-[12px] 
              sm:text-[11px] text-[10px] md:tracking-widest  2xl:pt-[26px] lg:pt-[20] pt-[10px] md:text-start text-center' >FOR THOSE WHO WISH FOR MORE...</span>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="text-[#737373] 2xl:text-[20px] xl:text-[13px] lg:text-[10px] md:text-[11px] sm:text-[11px] text-[10px] md:tracking-widest lg:pb-2">
              BRING THE WORLD CLOSER TOGETHER
            </div>
            <div className="2xl:py-4 lg:py-1 md:py-3 sm:py-2 py-4" onClick={handleClick} >
              <Image
                className='2xl:block hidden'
                src="/01_Page/Path 59.png"
                width={40}
                height={80}
                alt="move next"
              />
              <Image
                className='2xl:hidden xl:block hidden'
                src="/01_Page/Path 59.png"
                width={30}
                height={600}
                alt="move next"
              />
              <Image
                className='xl:hidden lg:block hidden'
                src="/01_Page/Path 59.png"
                width={30}
                height={600}
                alt="move next"
              />
              <Image
                className='lg:hidden md:block hidden'
                src="/01_Page/Path 59.png"
                width={25}
                height={600}
                alt="move next"
              />
              <Image
                className='md:hidden sm:block hidden '
                src="/01_Page/Path 59.png"
                width={20}
                height={80}
                alt="move next"
              />
              <Image
                className='sm:hidden block '
                src="/01_Page/Path 59.png"
                width={30}
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
