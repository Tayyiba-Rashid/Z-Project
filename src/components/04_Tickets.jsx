import React from 'react'
import Image from 'next/image'

function Tickets() {
    return (
        <div className='h-dvh  grid lg:grid-cols-5 grid-col-1'>
            <div className='lg:col-span-2  flex flex-col lg:items-start items-center justify-center px-4 lg:pl-16 pt-6'>

                <Image
                    className='xd:block hidden '
                    src='/04_Page/Group 4758.png'
                    width={565}
                    height={152} />
                <Image
                    className='hidden md:block xd:hidden'
                    src='/04_Page/Group 4758.png'
                    width={350}
                    height={350} />
                <Image
                    className='md:hidden block '
                    src='/04_Page/Group 4758.png'
                    width={150}
                    height={150} />
                <span className='font-lato xd:text-[40px] lg:text-[30px] md:text-[30px] text-[15px] tracking-widest mt-4 text-center'>ONE SOURCE</span>
                <span className='font-lato xd:text-[60px] lg:text-[35px] md:text-[40px] text-[25px] tracking-widest'>ENTRY TICKETS</span>
                <span className='font-lato xd:text-[20px] lg:text-[18px] md:text-[18px] text-[10px] tracking-widest md:mt-4 mt-2 text-[#737373]'>FOR ALL PREMIUM LISTENINGS</span>

            </div>
            <div className='lg:col-span-3  flex flex-col items-center lg:justify-center justify-center px-4'>
                <Image
                    className='lg:block hidden'
                    src='/04_Page/Group 4762.png'
                    width={1083}
                    height={718} />
                <Image
                    className='lg:hidden block '
                    src='/04_Page/Group 4762.png'
                    width={500}
                    height={300} />
                <span className='font-lato lg:text-[30px] text-[15px] tracking-[0.18em] mt-12'>LET YOUR DREAMS FIND YOU</span>
            </div>
        </div>
    )
}

export default Tickets