import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";


function Personalise() {

    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });

    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();

    useEffect(() => {
        if (inView1) controls1.start('visible');
        if (inView2) controls2.start('visible');
        if (inView3) controls3.start('visible');
    }, [inView1, inView2, inView3, controls1, controls2, controls3]);

    return (
        <div className=' h-dvh'>
            <div className='relative w-full h-dvh '>
                <div
                    className='bg-cover bg-center h-full w-full absolute z-0'
                    style={{
                        backgroundImage: "url('/05_Page/Path 27320.png')"
                    }}>
                </div>
                <div className='relative z-20 flex lg:flex-row lg:items-center lg:justify-between justify-center  items-center  flex-col-reverse h-full'>
                    <motion.div className='h-full flex items-center lg:px-8 px-4'
                        variants={{
                            visible: { opacity: 1, scaleY: 1 },
                            hidden: { opacity: 0, scaleY: 0 },
                        }}
                        initial="hidden"
                        animate={controls1}
                        transition={{ duration: 1 }}
                        ref={ref1}
                    >
                        <Image
                            className='hidden 2xl:hidden 3xl:block  '
                            src='/05_Page/Group 4764.png'
                            width={548}
                            height={134} />
                        <Image
                            className='3xl:hidden 2xl:block hidden'
                            src='/05_Page/Group 4764.png'
                            width={441}
                            height={108} />
                        <Image
                            className='2xl:hidden lg:block hidden'
                            src='/05_Page/Group 4764.png'
                            width={393}
                            height={96} />
                        <Image
                            className='md:block lg:hidden hidden  '
                            src='/05_Page/Group 4764.png'
                            width={523}
                            height={128} />
                        <Image
                            className='sm:block md:hidden hidden  '
                            src='/05_Page/Group 4764.png'
                            width={400}
                            height={100} />
                        <Image
                            className='block sm:hidden'
                            src='/05_Page/Group 4764.png'
                            width={300}
                            height={100} />
                    </motion.div>
                    <div className='flex flex-col items-end h-full lg:px-8 md:px-12 sm:px-10 px-6 sm:pt-8'
                    >
                        <motion.div className='flex flex-col lg:w-2/4 pt-16'
                        ref={ref2}
                        animate={controls2}
                        initial="hidden"
                        variants={{
                          visible: { opacity: 1, y: 0 },
                          hidden: { opacity: 0, y: -100 },
                        }}
                        transition={{ duration: 1 }}
                        >
                            <span className='font-lato 3xl:text-[40px] 2xl:text-[32px] xl:text-[30px] lg:text-[22px] md:text-[33px] sm:text-[20px]  text-[20px] text-white lg:text-start text-center 2xl:tracking-[0.15em] 3xl:tracking-[0.25em]'>PERSONALISED FOR YOU</span>
                            <span className='font-lato  3xl:text-[19px] 2xl:text-[14px] xl:text-[11px] lg:text-[8px] md:text-[15px] sm:text-[12px] text-[10px] lg:leading-loose sm:leading-8 2xl:tracking-[0.24em] lg:text-start text-center tracking-[0.2em]  text-white opacity-60 3xl:mt-6 xl:mt-0 lg:mt-4 mt-8 '>DELIVERING THOUSANDS OF PERSONALISED ALERTS EVERYDAY, OUR USERS CAN BE FIRST IN LINE WHEN THAT OPPORTUNITY OF A LIFETIME IS HERE.</span>
                        </motion.div>
                        <motion.div className='flex lg:items-center items-end h-full lg:pr-4 md:pr-0 sm:pr-2 3xl:pr-2 2xl:pr-7 xl:pr-11'
                          ref={ref3}
                          animate={controls3}
                          initial="hidden"
                          variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 100 },
                          }}
                          transition={{ duration: 1 }}
                        >
                            <span className='font-lato 3xl:text-[21px] 2xl:text-[16px] xl:text-[12px] lg:text-[9px] md:text-[16px] sm:text-[15px] text-[11px] tracking-[0.15em] text-white px-2'>CREATE USER ID</span>
                            <Image
                                className='hidden lg:hidden 3xl:block'
                                src='/05_Page/Path 7815.png'
                                width={45}
                                height={19} />
                            <Image
                                className='hidden lg:block 3xl:hidden'
                                src='/05_Page/Path 7815.png'
                                width={30}
                                height={19} />
                            <Image
                                className='md:block lg:hidden hidden pb-1'
                                src='/05_Page/Path 7815.png'
                                width={40}
                                height={20} />
                            <Image
                                className='sm:block md:hidden hidden pb-1'
                                src='/05_Page/Path 7815.png'
                                width={30}
                                height={20} />
                            <Image
                                className='block sm:hidden pb-1'
                                src='/05_Page/Path 7815.png'
                                width={20}
                                height={20} />
                        </motion.div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personalise