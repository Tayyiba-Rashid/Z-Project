import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

function GlobalVision() {

    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: false });
    const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: false });

    const controls1 = useAnimation();
    const controls2 = useAnimation();

    useEffect(() => {
        if (inView1) controls1.start('visible');
        
        if (inView2) controls2.start('visible');
    }, [inView1, inView2, controls1, controls2,]);

    return (
        <div className=' h-dvh'>
            <div className='relative w-full h-dvh '>
                <div
                    className='bg-cover bg-center h-full w-full absolute z-0'
                    style={{
                        backgroundImage: "url('/06_Page/Group 4767.png')"
                    }}>
                </div>
                <div className='relative z-20 flex flex-col items-center justify-center h-full px-4'>
                    <motion.div className='font-lato 3xl:text-[40px] 2xl:text-[30px] lg:text-[19px] md:text-[20px] text-[20px] sm:tracking-widest tracking-[0.2em] py-6 text-center'
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: -80 },
                        }}
                        initial="hidden"
                        animate={controls1}
                        transition={{ duration: 0.8 }}
                        ref={ref1}
                    >
                        GLOBAL VISION
                    </motion.div>
                    <motion.div className='font-lato 3xl:text-[20px] 2xl:text-[14px] lg:text-[10px] md:text-[10px] text-[8px] tracking-widest w-2/3 lg:w-2/4 text-center md:px-16'
                     variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 80 },
                    }}
                    initial="hidden"
                    animate={controls2}
                    transition={{ duration: 0.8 }}
                    ref={ref2}
                    >
                        WITH A REMOTE CULTURE, DIVERSITY IS NATURALLY IN OUR DNA. BASED ACROSS THE GLOBE, WE REPRESENT OVER 23 DIFFERENT NATIONALITIES.
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default GlobalVision