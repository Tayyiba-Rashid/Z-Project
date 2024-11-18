import React from 'react'
import Image from 'next/image'
function Page07() {
    return (
        <div className='h-dvh lg:grid lg:grid-cols-5 flex flex-col lg:items-center justify-evenly '>
            <div className='lg:col-span-2 flex lg:justify-start justify-center w-full  lg:pl-14 px-4'>
                <Image
                    src='/07_Page/Group 4766.png'
                    width={200}
                    height={200}
                />
            </div>
            <div className='lg:col-span-3 flex lg:justify-start justify-center w-full  px-4 '>
                <Image
                    src='/07_Page/Group 4769.png'
                    width={200}
                    height={200}
                />
            </div>
        </div>
    )
}

export default Page07