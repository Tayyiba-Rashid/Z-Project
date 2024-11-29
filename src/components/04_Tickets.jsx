import React from 'react'
import Image from 'next/image'

function Tickets() {
    return (
        <div className='h-dvh  grid lg:grid-cols-5 grid-col-1'>
            <div className='lg:col-span-2  flex flex-col lg:items-start items-center justify-center px-4 lg:pl-16 pt-6'>

                <Image
                    className='3xl:block hidden '
                    src='/04_Page/Group 4758.png'
                    width={565}
                    height={152} />
                <Image
                    className='3xl:hidden 2xl:block hidden'
                    src='/04_Page/Group 4758.png'
                    width={456}
                    height={123} />
                <Image
                    className='2xl:hidden xl:block  hidden'
                    src='/04_Page/Group 4758.png'
                    width={403}
                    height={110} />
                <Image
                    className='xl:hidden lg:block  hidden'
                    src='/04_Page/Group 4758.png'
                    width={276}
                    height={75} />
                <Image
                    className='lg:hidden md:block  hidden'
                    src='/04_Page/Group 4758.png'
                    width={280}
                    height={90} />
                     <Image
                    className='md:hidden sm:block  hidden'
                    src='/04_Page/Group 4758.png'
                    width={280}
                    height={90} />
                <Image
                    className='sm:hidden block '
                    src='/04_Page/Group 4758.png'
                    width={150}
                    height={150} />
                <span className='font-lato 3xl:text-[40px] 2xl:text-[32px] xl:text-[27px] lg:text-[16px] md:text-[24px] text-[15px] tracking-widest mt-4 text-center'>ONE SOURCE</span>
                <span className='font-lato 3xl:text-[60px] 2xl:text-[48px] xl:text-[42px] lg:text-[24px] md:text-[29px] text-[25px] tracking-widest'>ENTRY TICKETS</span>
                <span className='font-lato 3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[10px] md:text-[13px] text-[10px] tracking-widest xl:mt-4 lg:mt-1 mt-2 text-[#737373]'>FOR ALL PREMIUM LISTENINGS</span>

            </div>
            <div className='lg:col-span-3  flex flex-col items-center lg:justify-center justify-center px-4'>
                <Image
                    className='3xl:block hidden'
                    src='/04_Page/Group 4762.png'
                    width={1083}
                    height={718} />
                <Image
                    className='3xl:hidden 2xl:block hidden '
                    src='/04_Page/Group 4762.png'
                    width={873}
                    height={578} />
                <Image
                     className='2xl:hidden xl:block  hidden'
                    src='/04_Page/Group 4762.png'
                    width={773}
                    height={513} />
                <Image
                     className='xl:hidden lg:block  hidden'
                    src='/04_Page/Group 4762.png'
                    width={552}
                    height={489} />
                <Image
                     className='lg:hidden md:block hidden'
                    src='/04_Page/Group 4762.png'
                    width={552}
                    height={489} />
                <Image
                     className='md:hidden sm:block hidden'
                    src='/04_Page/Group 4762.png'
                    width={552}
                    height={489} />
                <Image
                     className='sm:hidden block'
                    src='/04_Page/Group 4762.png'
                    width={552}
                    height={489} />
                <span className='font-lato 3xl:text-[30px] 2xl:text-[24px] xl:text-[20px] lg:text-[18px]  text-[15px] tracking-[0.18em] mt-12'>LET YOUR DREAMS FIND YOU</span>
            </div>
        </div>
    )
}

export default Tickets