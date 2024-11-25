import React from 'react'
import Image from 'next/image'

function Page05() {
    return (
        <div className=' h-dvh'>
            <div className='relative w-full h-dvh bg-blue-400'>
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
                    <div className='flex items-start h-full md:px-8 px-6 pt-8 '>
                        <Image
                            src='/05_Page/Group 4772.png'
                            width={400}
                            height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page05