import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";


function RealEstate({ scrollToCategories }) {

  const handleClick = () => {
    scrollToCategories.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });

  const controls1 = useAnimation();
  const controls3 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (inView1) controls1.start('visible');
    if (inView2) controls2.start('visible');
    if (inView3) controls3.start('visible');
  }, [inView1, inView2, inView3, controls1, controls2, controls3]);

  return (
    <div className='h-dvh grid xl:grid-rows-10 lg:grid-rows-11 md:grid-rows-10 2xl:pl-[60px] 2xl:pr-[65px] xl:pl-[40px] xl:pr-[45px] '>
      <div className=' xl:row-span-2 lg:row-span-2 row-span-1 flex items-center justify-center  2xl:py-[94px]'>
        <div className='3xl:text-[20px] 2xl:text-[16px]  xl:text-[13px] lg:text-[10px] md:text-[11px] sm:text-[9px]  text-[10px] font-lato 3xl:tracking-[0.2em]  2xl:tracking-[0.11em] lg:tracking-[0.125em] md:tracking-widest tracking-widest text-center md:px-0 px-2'>
          A REAL ESTATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD
        </div>
      </div>
      <div className=' row-span-8 grid lg:grid-cols-3 grid-cols-1 '>
        <div className='lg:col-span-2 lg:row-span-3 row-span-4  grid lg:grid-rows-2 lg:pl-8 '>
          <motion.div
            className="flex flex-col items-center justify-center lg:justify-start lg:items-start"
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            initial="hidden"
            animate={controls1}
            transition={{ duration: 0.8 }}
            ref={ref1}
          >
            <span className='tracking-[0.125em] pl-1 font-lato 3xl:text-[41px] 2xl:text-[32.8px] xl:text-[22.98px] lg:text-[20.4px] text-[12px] text-center lg:text-start leading-none'>A REVOLUTIONARY PLATFORM</span>
            <div className='3xl:tracking-[0.1em] tracking-widest font-lato 3xl:text-[70px] 2xl:text-[56px] xl:text-[39.2px] lg:text-[34.9px] text-[21px] text-center lg:text-start leading-none lg:py-6 py-3 '>ENTRIES - SELLER</div>
            <div className='tracking-[0.135em] pl-1 font-lato 3xl:text-[100px] 2xl:text-[80px] xl:text-[56px] lg:text-[50px] text-[30px] text-center lg:text-start leading-none '>WORLDWIDE</div>
          </motion.div>
          <motion.div className='flex flex-col lg:items-start items-center justify-center'
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            initial="hidden"
            animate={controls2}
            transition={{ duration: 0.8 }}
            ref={ref2}
          >
            <div className="font-lato  3xl:text-[40px] 2xl:text-[32px] xl:text-[25px] lg:text-[20px] md:text-[18px] text-[18px] tracking-[0.25em] mb-4 text-center lg:text-start">
              THE BEST OF THE BEST
            </div>
            <div className="font-lato 3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[10px] md:text-[9px] text-[8px]   tracking-widest leading-loose text-center  lg:text-start">
              A COMBINATION OF AUTOMATION AND MANUAL CURATION
              <br className='md:hidden block' />
              OUR PRO AGENTS AND
              <br className='md:block hidden' /> MODERATION TEAM SELECTS THE <br className='md:hidden block' />
              HIGHEST QUALITY LISTINGS ON THE MARKET
              <br className='md:block hidden' /> FROM
              <br className='md:hidden block' />
              ACROSS THE WORLD.
            </div>

          </motion.div>
        </div>
        <motion.div className=' col-span-1 lg:row-span-3 row-span-2 flex flex-col items-center justify-center'
          variants={{
            visible: { opacity: 1, scaleY: 1 },
            hidden: { opacity: 0, scaleY: 0 },
          }}
          initial="hidden"
          animate={controls3}
          transition={{ duration: 0.8 }}
          ref={ref3}>
          <Image
            className='2xl:block hidden'
            src='/02_Page/Group 4743.png'
            width={590}
            height={145} />
          <Image
            className='2xl:hidden xl:block hidden'
            src='/02_Page/Group 4743.png'
            width={380}
            height={92} />

          <Image
            className='hidden lg:block xl:hidden'
            src='/02_Page/Group 4743.png'
            width={290}
            height={300} />
          <Image
            className='lg:hidden md:block hidden'
            src='/02_Page/Group 4743.png'
            width={200}
            height={200} />
          <Image
            className='md:hidden block'
            src='/02_Page/Group 4743.png'
            width={200}
            height={200} />
          <span className='text-center font-lato 3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[10px] md:text-[9px]  text-[8px] 3xl:tracking-[0.13em] 2xl:tracking-[0.11em] xl:tracking-[0.125em]  tracking-widest leading-loose pt-6 '>CONNECTING USERS FROM ACCROSS THE GLOBE <br />
            TO FACILITATE LIFE'S MOST IMPORTANT
            <br />
            PERSONAL TRANSACTIONS
          </span>
        </motion.div>
      </div>
      <div className="xl:py-4 lg:py-0 md:py-3 py-4 flex items-center justify-center" onClick={handleClick}>
        <Image
          className='2xl:block hidden'
          src="/02_Page/Path 27315.png"
          width={40}
          height={80}
          alt="move next"
        />
        <Image
          className='2xl:hidden xl:block hidden'
          src="/02_Page/Path 27315.png"
          width={30}
          height={600}
          alt="move next"
        />
        <Image
          className='xl:hidden lg:block hidden'
          src="/02_Page/Path 27315.png"
          width={30}
          height={600}
          alt="move next"
        />
        <Image
          className='lg:hidden md:block hidden'
          src="/02_Page/Path 27315.png"
          width={25}
          height={600}
          alt="move next"
        />
        <Image
          className='md:hidden sm:block hidden '
          src="/02_Page/Path 27315.png"
          width={20}
          height={80}
          alt="move next"
        />
        <Image
          className='sm:hidden block '
          src="/02_Page/Path 27315.png"
          width={30}
          height={80}
          alt="move next"
        />
      </div>
    </div>
  )
}

export default RealEstate