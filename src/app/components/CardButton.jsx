import React from 'react'
import { Svg } from './Svg'

function CardButton({handleToggle, bgImage, currentTheme}) {
    return (
        <>
            <div
                onClick={handleToggle}
                className={`relative bg-black flex flex-col 3xl:w-[157px] 3xl:h-[489px] 2xl:w-[126px] 2xl:h-[391px] xl:w-[105px] xl:h-[326px] lg:w-[84px]  lg:h-[335px] md:w-[102px]  md:h-[454px] sm:w-[70px]  sm:h-[330px] h-[370px] w-3/5 rounded-r-2xl cursor-pointer`}

            >
                {/* LOCK SVG */}
                <div className={`absolute top-0 right-0  pt-[21px] pr-[18px]`}>
                    <Svg className={`w-12 ${bgImage ? "fill-white" : currentTheme.fill} `} />
                </div>
                {/* INNER TEXT */}
                <div className="flex justify-center items-center w-full h-full">
                    <p className={`[writing-mode:vertical-rl] rotate-180 3xl:text-[12px] 2xl:text-[9px] xl:text-[8px] lg:text-[7px] md:text-[9px] sm:text-[7px] text-[7px] text-center md:leading-5 lg:tracking-widest tracking-[0.2em] ${bgImage ? "text-white" : currentTheme.fgColor}`}>UPLOAD FILES OR FOLDERS BY DROPPING <br /> THEM ANYWHERE IN THIS WINDOW
                    </p>
                </div>
                {/* OUTER TEXT */}
                <div className=' absolute flex justify-start items-start top-0  w-full h-full left-full pt-[21px]'>
                    <p className='font-thin 3xl:text-[8px] 2xl:text-[7px] xl:text-[6px] lg:text-[5px] md:text-[6px] sm:text-[5px] text-[5px] tracking-[0.2em] [writing-mode:vertical-rl]'>ADVANCED ENCRYPTION STANDARD (AES) 256-BIT</p>
                </div>

            </div>
        </>
    )
}

export default CardButton