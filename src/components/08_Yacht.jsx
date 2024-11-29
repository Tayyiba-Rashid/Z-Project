import React from 'react'
import Image from 'next/image'

function Yacht() {
    return (
        <div className='h-full '>
            <div className='relative w-full h-dvh '>
                <div
                    className=' bg-center bg-cover h-full w-full absolute z-0'
                    style={{
                        backgroundImage: "url('/08_Page/Path 27324.png')"
                    }}>
                </div>
                <div className='relative z-20 top-1/2 flex items-center sm:justify-evenly  h-dvh px-4 '>
                    <div className='md:pr-0 xl:pr-60 3xl:pr-0'>
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
                    </div>
                    <div className='md:block hidden'>
                        <Image
                         className='hidden lg:hidden 3xl:block  '
                            src='/08_Page/Group 4770.png'
                            width={350}
                            height={350}
                        />
                        <Image
                            className='hidden lg:block 3xl:hidden  '
                            src='/08_Page/Group 4770.png'
                            width={350}
                            height={350}
                        />
                        <Image
                            className='md:block lg:hidden hidden '
                            src='/08_Page/Group 4770.png'
                            width={400}
                            height={500}
                        />
                        
                    </div>
                </div>
            </div>
        </div>
     
    )
}

export default Yacht