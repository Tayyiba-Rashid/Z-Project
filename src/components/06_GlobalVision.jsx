import React from 'react'

function GlobalVision() {
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
                    <span className='font-lato 3xl:text-[40px] 2xl:text-[30px] lg:text-[19px] md:text-[20px] text-[20px] sm:tracking-widest tracking-[0.2em] py-6 text-center'>GLOBAL VISION</span>
                    <span className='font-lato 3xl:text-[20px] 2xl:text-[14px] lg:text-[10px] md:text-[10px] text-[8px] tracking-widest w-2/3 lg:w-2/4 text-center md:px-16'>WITH A REMOTE CULTURE, DIVERSITY IS NATURALLY IN OUR DNA. BASED ACROSS THE GLOBE, WE REPRESENT OVER 23 DIFFERENT NATIONALITIES.</span>
                </div>
            </div>
        </div>
    )
}

export default GlobalVision