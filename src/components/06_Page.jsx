import React from 'react'
import Image from 'next/image'

function Page06() {
    return (
        <div className=' h-dvh'>
            <div className='relative w-full h-dvh '>
                <div
                    className='bg-cover bg-center h-full w-full absolute z-0'
                    style={{
                        backgroundImage: "url('/06_Page/Group 4767.png')"
                    }}>
                    </div>
                <div className='relative z-20 flex items-center justify-center h-full px-4 '>
                    <Image
                        src='/06_Page/Group 4768.png'
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    )
}

export default Page06