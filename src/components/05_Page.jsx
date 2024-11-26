import React from 'react'
import Image from 'next/image'

function Page05() {
    return (
        <div className=' h-dvh'>
            <div className='relative w-full h-dvh '>
                <div
                    className='bg-cover bg-center h-full w-full absolute z-0'
                    style={{
                        backgroundImage: "url('/05_Page/Path 27320.png')"
                    }}>
                </div>
                <div className='relative z-20 flex lg:flex-row lg:items-center lg:justify-between justify-center  items-center  flex-col h-full '>
                    <div className='h-full flex items-center md:px-8 px-4 '>
                        <Image
                            src='/05_Page/Group 4764.png'
                            width={300}
                            height={300} />
                    </div>
                    <div className='flex flex-col items-end h-full md:px-8 px-6 pt-8 '>
                        <div className='flex flex-col '>
                            <span className='font-lato text-2xl text-white tracking-[0.2em] text-center'>PERSONALISED FOR YOU</span>
                            <span className='font-lato sm:w-96 text-xs leading-loose tracking-widest text-white opacity-50 md:mt-6 text-center'>DELIVERING THOUSANDS OF PERSONALISED ALERTS EVERYDAY, OUR USERS CAN BE FIRST IN LINE WHEN THAT OPPORTUNITY OF A LIFETIME IS HERE.</span>
                        </div>
                       <div className='flex items-center h-full'>
                        <Image
                            src='/05_Page/Group 4765.png'
                            width={200}
                            height={200} />
                        </div> 


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page05