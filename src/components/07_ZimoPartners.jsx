import React from 'react'
import Image from 'next/image'
function ZimoPartners() {
    return (
        <div className='h-dvh lg:grid lg:grid-cols-5 flex flex-col lg:items-center justify-evenly '>
            <div className='lg:col-span-2 flex lg:justify-start justify-center w-full  lg:pl-14 px-4'>
                <Image
                    className='hidden lg:hidden xd:block  '
                    src='/07_Page/Group 4766.png'
                    width={309}
                    height={163}
                />
                <Image
                    className='hidden lg:block xd:hidden  '
                    src='/07_Page/Group 4766.png'
                    width={200}
                    height={200}
                />
                <Image
                    className='block lg:hidden xd:hidden  '
                    src='/07_Page/Group 4766.png'
                    width={150}
                    height={150}
                />
            </div>
            <div className='lg:col-span-3 flex lg:justify-start justify-center w-full  px-4 '>
                <Image
                    className='hidden lg:hidden xd:block  '
                    src='/07_Page/Group 4769.png'
                    width={297}
                    height={121}
                />
                <Image
                    className='hidden lg:block xd:hidden  '
                    src='/07_Page/Group 4769.png'
                    width={200}
                    height={200}
                />
                <Image
                    className='block lg:hidden xd:hidden  '
                    src='/07_Page/Group 4769.png'
                    width={100}
                    height={100}
                />
            </div>
        </div>
    )
}

export default ZimoPartners