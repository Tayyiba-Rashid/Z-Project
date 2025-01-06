import React from 'react'

function Headline() {
    return (
        <>
            <div className='flex flex-col justify-center items-end'>
                <p className='3xl:text-[60px] 2xl:text-[50px] xl:text-[35px] lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] tracking-widest leading-none 3xl:pr-[18px] xl:pr-[11px] lg:pr-[9px] md:pr-[8px] sm:pr-[7px] pr-[6px] '>LET'S DO</p>
                <p className='3xl:text-[185px] 2xl:text-[150px] xl:text-[95px] lg:text-[90px]  md:text-[90px] sm:text-[70px] text-[60px] tracking-widest sm:leading-normal leading-none  2xl:pr-0 '>THIS</p>
                <p className='3xl:text-[12px] 2xl:text-[9px] xl:text-[8px] lg:text-[6.5px] md:text-[6px] sm:text-[5px] text-[4.5px] 2xl:tracking-widest 3xl:pr-[25px] 2xl:pr-[24px]  xl:pr-[14px] lg:pr-[15px] md:pr-[15px] sm:pr-[11px] pr-[10px] '>UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW</p>
            </div>
        </>
    )
}

export default Headline