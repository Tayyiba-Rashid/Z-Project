import React from 'react'
import { FooterSvg } from './Svg'

function Footer() {
    return (
        <>
            <footer className='row-span-1 flex flex-col justify-end xl:px-[50px] md:px-[27px] px-[16px] lg:gap-0  xl:pb-[24px] md:pb-[20px] sm:pb-[16px] pb-[12px] '>
                <div className='w-full  text-start  tracking-widest  3xl:text-[8px] 2xl:text-[7px] xl:text-[6px] lg:text-[5px] md:text-[6px] sm:text-[5px] text-[4.5px] lg:block hidden '>
                    ZITRANSFER 2023
                </div>
                <div className='w-full   flex flex-col-reverse lg:flex-row justify-between '>
                    <div className=' text-start flex lg:justify-start lg:items-end justify-center items-center  2xl:gap-8 lg:gap-4 gap-2'>
                        <span className=' 3xl:text-[8px] 2xl:text-[7px] xl:text-[6px] lg:text-[5px] md:text-[6px] sm:text-[5px] text-[4.5px]  tracking-wide lg:hidden block'> ZITRANSFER 2023</span>
                        <span className=' 3xl:text-[8px] 2xl:text-[7px] xl:text-[6px] lg:text-[5px] md:text-[6px] sm:text-[5px] text-[4.5px]  tracking-wide'>ALL RIGHTS RESERVED</span>
                        <span className=' 3xl:text-[8px] 2xl:text-[7px] xl:text-[6px] lg:text-[5px] md:text-[6px] sm:text-[5px] text-[4.5px]  tracking-wide'>ZITRANSFER IS A PART OF ZIMO GROUP</span>
                    </div>
                    <div className=" flex items-end justify-center sm:tracking-widest tracking-tighter 3xl:text-[8px] 2xl:text-[7px] xl:text-[6px] lg:text-[5px] md:text-[6px] sm:text-[5px] text-[4.5px]">
                        <div className="flex h-full items-end gap-2 ">
                            {/* Lock Icon */}
                            <span className="flex items-end h-full">
                                <FooterSvg />
                            </span>
                            {/* Text */}
                            <span className=" flex items-end h-full leading-none tracking-wide">
                                ZITRANSFER USES ADVANCED ENCRYPTION STANDARD (AES) 256-BIT TO PROTECT THE CONFIDENTIALITY OF THE DATA YOU UPLOAD.
                            </span>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer