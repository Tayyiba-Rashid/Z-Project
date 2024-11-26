import React from 'react'
import Image from 'next/image'

function Page04() {
    return (
        <div className='h-dvh  grid lg:grid-cols-5 grid-col-1'>
            <div className='lg:col-span-2  flex flex-col md:items-start items-center justify-center px-4 lg:pl-16'>
            <Image
                    className='md:block hidden'
                    src='/04_Page/Group 4758.png'
                    width={350}
                    height={350} />
                    <Image
                    className='md:hidden block'
                    src='/04_Page/Group 4758.png'
                    width={250}
                    height={250} />
                    <span className='font-lato text-[1.6em] tracking-[0.2em] mt-4 text-center'>ONE SOURCE</span>
                    <span className='font-lato sm:text-4xl tracking-[0.2em] text-center'>ENTRY TICKETS</span>
                    <span className='font-lato text-xs tracking-[0.2em] mt-4 text-gray-500'>FOR ALL PREMIUM LISTENINGS</span>
                     
            </div>
            <div className='lg:col-span-3  flex flex-col items-center lg:justify-center justify-center px-4'>
                <Image
                    src='/04_Page/Group 4762.png'
                    width={700}
                    height={700} />
                   <span className='font-lato tracking-[0.2em] mt-12'>LET YOUR DREAMS FIND YOU</span> 
            </div>
        </div>
    )
}

export default Page04