import React from 'react'
import Image from 'next/image'

function Page08() {
    return (
        <div className='h-full '>
            <div className='relative w-full h-dvh '>
                <div
                    className=' bg-center h-full w-full absolute z-0'
                    style={{
                        backgroundImage: "url('/08_Page/Path 27324.png')"
                    }}>
                </div>
                <div className='relative z-20 top-1/2 flex items-center justify-evenly h-dvh px-4 '>
                    <div>
                        <Image
                            className='hidden lg:hidden xd:block  '
                            src='/08_Page/ale-aguilar-c9yY00KNTVs-unsplash.png'
                            width={519}
                            height={778}
                        />
                        <Image
                            className='hidden lg:block xd:hidden  '
                            src='/08_Page/ale-aguilar-c9yY00KNTVs-unsplash.png'
                            width={300}
                            height={300}
                        />
                        <Image
                            className='block lg:hidden xd:hidden  '
                            src='/08_Page/ale-aguilar-c9yY00KNTVs-unsplash.png'
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className='md:block hidden'>
                        <Image
                         className='hidden lg:hidden xd:block  '
                            src='/08_Page/Group 4770.png'
                            width={350}
                            height={350}
                        />
                        <Image
                            className='hidden lg:block xd:hidden  '
                            src='/08_Page/Group 4770.png'
                            width={350}
                            height={350}
                        />
                        <Image
                            className='block lg:hidden xd:hidden  '
                            src='/08_Page/Group 4770.png'
                            width={650}
                            height={650}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page08