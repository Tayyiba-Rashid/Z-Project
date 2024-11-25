import React from 'react'
import Image from 'next/image'

function Page04() {
    return (
        <div className='h-dvh  grid lg:grid-cols-5 grid-col-1'>
            <div className='lg:col-span-2  flex items-center justify-center px-4'>
                <Image
                    className='md:block hidden'
                    src='/04_Page/Group 4761.png'
                    width={350}
                    height={350} />
                    <Image
                    className='md:hidden block'
                    src='/04_Page/Group 4761.png'
                    width={250}
                    height={250} />
            </div>
            <div className='lg:col-span-3  flex items-center lg:justify-start justify-center px-4'>
                <Image
                    src='/04_Page/Group 4771.png'
                    width={700}
                    height={700} />
            </div>
        </div>
    )
}

export default Page04