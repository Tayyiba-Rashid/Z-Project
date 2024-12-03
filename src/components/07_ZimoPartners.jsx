import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";


function ZimoPartners() {

    const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });

    const controls1 = useAnimation();
    const controls2 = useAnimation();

    useEffect(() => {
        if (inView1) controls1.start('visible');
        if (inView2) controls2.start('visible');
    }, [inView1, inView2, controls1, controls2,]);

    return (
        <div className='h-dvh lg:grid lg:grid-cols-5 flex flex-col lg:items-center justify-evenly '>
            <motion.div className='lg:col-span-2 flex lg:justify-start justify-center w-full  lg:pl-14 px-4'
                variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -50 },
                }}
                initial="hidden"
                animate={controls1}
                transition={{ duration: 0.8 }}
                ref={ref1}
            >
                <Image
                    className='hidden lg:hidden 3xl:block  '
                    src='/07_Page/Group 4766.png'
                    width={309}
                    height={163}
                />
                <Image
                    className='hidden lg:block 3xl:hidden  '
                    src='/07_Page/Group 4766.png'
                    width={200}
                    height={200}
                />
                <Image
                    className='block lg:hidden 3xl:hidden  '
                    src='/07_Page/Group 4766.png'
                    width={150}
                    height={150}
                />
            </motion.div>
            <motion.div className='lg:col-span-3 flex lg:justify-start justify-center w-full  px-4'
                variants={{
                    visible: { opacity: 1, scaleY: 1 },
                    hidden: { opacity: 0, scaleY: 0 },
                }}
                initial="hidden"
                animate={controls2}
                transition={{ duration: 0.8 }}
                ref={ref2}
            >
                <Image
                    className='hidden lg:hidden 3xl:block  '
                    src='/07_Page/Group 4769.png'
                    width={297}
                    height={121}
                />
                <Image
                    className='hidden lg:block 3xl:hidden  '
                    src='/07_Page/Group 4769.png'
                    width={200}
                    height={200}
                />
                <Image
                    className='block lg:hidden 3xl:hidden  '
                    src='/07_Page/Group 4769.png'
                    width={100}
                    height={100}
                />
            </motion.div>
        </div>
    )
}

export default ZimoPartners