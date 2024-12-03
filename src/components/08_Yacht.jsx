import React, { useEffect } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

function Yacht() {
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
        <div className='h-full '>
            <div className='relative w-full h-dvh '>
                <motion.div
                    className=' bg-center bg-cover h-full w-full absolute z-0'
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 },
                    }}
                    initial="hidden"
                    animate={controls1}
                    transition={{ duration: 0.8 }}
                    ref={ref1}
                    style={{
                        backgroundImage: "url('/08_Page/Path 27324.png')"
                    }}>


                </motion.div>
                <div className='relative z-20 top-1/2 flex items-center justify-center sm:justify-evenly  h-dvh px-4 '>
                    <motion.div className='md:pr-0 xl:pr-60 3xl:pr-0'
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 },
                        }}
                        initial="hidden"
                        animate={controls2}
                        transition={{ duration: 0.8 }}
                        ref={ref2}
                    >
                        <Image
                            className='hidden lg:hidden 3xl:block  '
                            src='/08_Page/ale-aguilar-c9yY00KNTVs-unsplash.png'
                            width={519}
                            height={778}
                        />
                        <Image
                            className='hidden lg:block 3xl:hidden  '
                            src='/08_Page/ale-aguilar-c9yY00KNTVs-unsplash.png'
                            width={300}
                            height={300}
                        />
                        <Image
                            className='block lg:hidden 3xl:hidden  '
                            src='/08_Page/ale-aguilar-c9yY00KNTVs-unsplash.png'
                            width={300}
                            height={300}
                        />
                    </motion.div>
                    <motion.div className='md:block hidden '
                     variants={{
                        visible: { opacity: 1, scaleY: 1 },
                        hidden: { opacity: 0, scaleY: 0 },
                    }}
                    initial="hidden"
                    animate={controls3}
                    transition={{ duration: 0.8 }}
                    ref={ref3}
                    >
                        <Image
                            className='hidden lg:hidden 3xl:block'
                            src='/08_Page/Group 4770.png'
                            width={350}
                            height={350}
                        />
                        <Image
                            className='hidden lg:block 3xl:hidden'
                            src='/08_Page/Group 4770.png'
                            width={350}
                            height={350}
                        />
                        <Image
                            className='md:block lg:hidden hidden'
                            src='/08_Page/Group 4770.png'
                            width={400}
                            height={500}
                        />

                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Yacht