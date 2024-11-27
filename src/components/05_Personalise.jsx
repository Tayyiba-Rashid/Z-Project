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
                             className='hidden lg:hidden xd:block  '
                            src='/05_Page/Group 4764.png'
                            width={548}
                            height={134} />
                        <Image
                          className='hidden lg:block xd:hidden  '
                            src='/05_Page/Group 4764.png'
                            width={500}
                            height={500} />
                        <Image
                           className='block lg:hidden xd:hidden  '
                            src='/05_Page/Group 4764.png'
                            width={300}
                            height={100} />
                    </div>
                    <div className='flex flex-col items-end h-full lg:px-8 px-6 pt-8  '>
                        <div className='flex flex-col lg:w-2/4 pt-16'>
                            <span className='font-lato xd:text-[40px] md:text-[30px] text-[20px] text-white text-start tracking-[0.1em] '>PERSONALISED FOR YOU</span>
                            <span className='font-lato  xd:text-[20px] md:text-[15px] text-[10px] leading-loose tracking-[0.15em]  text-white opacity-60 xd:mt-6 text-start'>DELIVERING THOUSANDS OF PERSONALISED ALERTS EVERYDAY, OUR USERS CAN BE FIRST IN LINE WHEN THAT OPPORTUNITY OF A LIFETIME IS HERE.</span>
                        </div>
                        <div className='flex items-center h-full '>
                            <span className='font-lato xd:text-[21px] md:text-[16px] text-[11px] tracking-widest text-white px-2'>CREATE USER ID</span>
                            <Image
                                className='hidden lg:hidden xd:block  '
                                src='/05_Page/Path 7815.png'
                                width={45}
                                height={19} />
                            <Image
                               className='hidden lg:block xd:hidden  '
                                src='/05_Page/Path 7815.png'
                                width={45}
                                height={19} />
                            <Image
                                 className='block lg:hidden xd:hidden  '
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