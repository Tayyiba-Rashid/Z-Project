import React from 'react'
import Image from 'next/image'

function Personalise() {
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
                    <div className='h-full flex items-center lg:px-8 px-4 '>
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
                    </div>
                    <div className='flex flex-col items-end h-full lg:px-8 md:px-12 sm:px-10 px-6 sm:pt-8  '>
                        <div className='flex flex-col lg:w-2/4 pt-16'>
                            <span className='font-lato 3xl:text-[40px] 2xl:text-[32px] xl:text-[25px] lg:text-[19px] md:text-[33px] sm:text-[20px]  text-[20px] text-white lg:text-start text-center tracking-[0.15em] '>PERSONALISED FOR YOU</span>
                            <span className='font-lato  3xl:text-[20px] 2xl:text-[15px] xl:text-[11px] lg:text-[8px] md:text-[15px] sm:text-[12px] text-[10px] lg:leading-loose sm:leading-8 2xl:tracking-[0.24em] lg:text-start text-center tracking-[0.2em]  text-white opacity-60 3xl:mt-6 xl:mt-0 lg:mt-4 mt-8 '>DELIVERING THOUSANDS OF PERSONALISED ALERTS EVERYDAY, OUR USERS CAN BE FIRST IN LINE WHEN THAT OPPORTUNITY OF A LIFETIME IS HERE.</span>
                        </div>
                        <div className='flex lg:items-center items-end h-full lg:pr-4 xl:pr-1 md:pr-0 sm:pr-2 3xl:pr-4'>
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
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personalise