import React from 'react'
import ZTFRSvg, { FlagSvg, ProfileSvg } from './Svg'

export default function Header() {
    return (
        <>
            <header className='row-span-1 flex justify-between items-start xl:px-[50px] md:px-[27px] px-[16px]'
            >
                {/* header-left */}
                <div>
                    <ZTFRSvg />
                </div>
                {/* header-right */}
                <div className='flex justify-center items-center '>
                    {/* right-1 */}
                    <div className='xl:px-[31px] px-[16px] '>
                        <ProfileSvg />
                    </div>
                    {/* right-2 */}
                    <div>
                        <FlagSvg />
                    </div>
                </div>
            </header>
        </>
    )
}

