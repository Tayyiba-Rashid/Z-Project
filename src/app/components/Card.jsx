import React from 'react'
import { motion } from 'framer-motion';
import { FileUploader } from 'react-drag-drop-files'
import { LockSvg, MenuSvg, PlusSvg } from './Svg';

function Card({secRef, ref, handleFileChange, bgImage, currentTheme, files}) {
    return (
        <>
            <motion.div
                drag
                dragConstraints={secRef}
                ref={ref}
                className='absolute  border-none 3xl:left-[157px] 2xl:left-[126px] xl:left-[105px] lg:left-[84px] md:left-[102px] sm:left-[70px] left-[15%] 3xl:h-[489px]  2xl:h-[391px]  xl:h-[326px] lg:h-[335px] md:h-[454px] sm:h-[330px] h-[370px] 3xl:w-[314px] 2xl:w-[265px] xl:w-[245px] lg:w-[235px] md:w-[300px] sm:w-[225px] w-[225px]  rounded-2xl bg-transparent z-10'>
                <div className='relative h-full w-full cursor-grab'>
                    {/* left */}
                    <div
                        className='absolute top-0 left-0 w-1/3 h-1/5 rounded-tl-2xl'>
                        {/* UPLOAD ICON */}
                        <FileUploader
                            multiple
                            handleChange={handleFileChange}
                            name="files" >
                            <div

                                className="h-full w-full flex items-center justify-center $ cursor-pointer">
                                <PlusSvg />
                            </div>
                        </FileUploader>

                    </div>
                    {/* right */}
                    <div className='absolute top-0 right-0 w-2/3 h-1/5 rounded-tr-2xl bg-black'>
                        <div className='relative h-full w-full text-white'>
                            {/* top text */}
                            <div className='pl-[11px] text-white w-full h-full flex flex-col justify-center items-start'>
                                <div className={`text-[8px] sm:text-[10px] md:text-[14px] lg:text-[10px] xl:text-[10px] 2xl:text-[13px] 3xl:text-[14px] tracking-widest  lg:mt-[19px] sm:mt-[11px] mt-[9px] ${bgImage ? "text-white" : currentTheme.fgColor}`}>UPLOAD FILES</div>
                                <div className={`text-[25px] sm:text-[25px] md:text-[33px] lg:text-[28px] xl:text-[28px] 2xl:text-[38px] 3xl:text-[40px] ${bgImage ? "text-white" : currentTheme.fgColor}`}>OR</div>

                            </div>
                            {/* LOCK */}
                            <div className='absolute top-0 right-0  pt-[21px] pr-[18px]'>
                                <LockSvg className={`w-12 ${bgImage ? "fill-white" : currentTheme.fill} `} />

                            </div>
                            {/* OUTER TEXT2 */}
                            <div className=' absolute flex justify-start items-start top-0 left-full pt-[21px]'>
                                <p className='font-thin 3xl:text-[8px] 2xl:text-[7px] xl:text-[6px] lg:text-[5px] md:text-[6px] sm:text-[5px] text-[5px] tracking-[0.2em] [writing-mode:vertical-rl] text-black'>ADVANCED ENCRYPTION STANDARD (AES) 256-BIT</p>
                            </div>
                            <div className='absolute top-[98%]  right-0 bg-black rounded-b-2xl h-[400%] 3xl:w-[314px] 2xl:w-[265px] xl:w-[245px] lg:w-[235px] md:w-[300px] sm:w-[225px] w-[225px] '>
                                {/* 2 */}
                                <div className='w-full h-full flex flex-col px-[19px]'>
                                    {/* FILE LIST */}
                                    <div className="h-2/5 w-full">
                                        {files.length > 0 ? (
                                            <div className=" row-span-2 flex flex-col justify-between items-start py-2  overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300  h-full cursor-ponter">
                                                {files.map((file, index) => (
                                                    <div key={index} className={`break-words text-start ${bgImage ? "text-white" : currentTheme.fgColor} text-[8px] sm:text-[10px] md:text-[14px] lg:text-[11px] xl:text-[10px] 2xl:text-[13px] 3xl:text-[14px] tracking-widest `}>
                                                        <ul>
                                                            <li>
                                                                <span className='text-[10px]'>{file.name}</span> <br />
                                                                <span className='text-[10px] font-extralight opacity-[50%]'>{file.size} - {file.type}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className={`relative h-full w-full text-white row-span-2 flex flex-col justify-between items-end pt-2 'bg-transparent '`}
                                            >
                                                <p className={`text-[8px] sm:text-[10px] md:text-[14px] lg:text-[10px] xl:text-[10px] 2xl:text-[13px] 3xl:text-[14px] tracking-widest ${bgImage ? "text-white" : currentTheme.fgColor}`}>SELECT A FOLDER</p>
                                                <p className={`absolute top-[30%] lg:-right-[42.5%] xl:-right-[41%] md:-right-[39%] -right-[41%] text-[25px] sm:text-[25px] md:text-[35px] lg:text-[28px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[40px] flex   ${bgImage ? "text-white" : currentTheme.fgColor}`}>UP TO &nbsp; <span className='text-black  3xl:pl-1 2xl:pl-[6px] xl:pl-2 lg:pl-1 md:pl-3 sm:pl-2 pl-2 '> 1 TB  </span>
                                                </p>
                                                <p className={`text-[8px] sm:text-[10px] md:text-[14px] lg:text-[11px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[20px] tracking-widest ${bgImage ? "text-white" : currentTheme.fgColor}`}>FREE</p>
                                            </div>
                                        )}
                                    </div>
                                    {/* FIELD PART */}
                                    <div className='h-2/5 w-full '>
                                        <div className={`relative h-1/2 w-full flex flex-col justify-end ${bgImage ? "text-white" : currentTheme.fgColor}`}>
                                            <input
                                                id="title"
                                                className={`peer w-full bg-transparent border-b ${bgImage ? "border-white" : currentTheme.border} focus:border-b-1 focus:border-opacity-50 focus:outline-none pt-4 pb-1 placeholder-transparent 3xl:text-[16px] 2xl:text-[14px] xl:text-[11px] lg:text-[10px] sm:text-[14px] text-[12px]`}
                                                type="text"
                                                placeholder="Title"
                                            />
                                            <label
                                                htmlFor="title"
                                                className={`absolute left-0 top-5 xl:top-3 3xl:top-7 
                                                              ${bgImage ? "text-white" : currentTheme.fgColor}  transition-all 2xl:peer-placeholder-shown:top-[60%]  peer-placeholder-shown:top-[60%]   peer-placeholder-shown:${bgImage ? "text-white" : currentTheme.fgColor}   peer-focus:text-opacity-50 peer-placeholder-shown:text-[9px] sm:peer-placeholder-shown:text-[9px] md:peer-placeholder-shown:text-[9px] 2xl:peer-placeholder-shown:text-[12px] tracking-widest peer-focus:text-[9px] sm:peer-focus:text-[9px] md:peer-focus:text-[9px]  lg:peer-focus:text-[9px]  2xl:peer-focus:text-[12px]  3xl:peer-focus:top-7 2xl:peer-focus:top-3 xl:peer-focus:top-3 peer-focus:top-5 text-[9px] sm:text-[9px] md:text-[9px]  lg:text-[9px]  2xl:text-[12px]`}>
                                                TITLE
                                            </label>
                                        </div>
                                        <div className={`relative ${bgImage ? "text-white" : currentTheme.fgColor} flex flex-col justify-end  h-1/2`}>
                                            <input
                                                id="title"
                                                className={`peer 3xl:text-[16px] 2xl:text-[14px] xl:text-[11px] sm:text-[14px] lg:text-[10px] text-[12px] bg-transparent border-b ${bgImage ? "border-white" : currentTheme.border}  focus:border-b-1 focus:border-opacity-50 focus:outline-none w-full pt-4 pb-1 placeholder-transparent`}
                                                type="text"
                                            />
                                            <label
                                                htmlFor="title"
                                                className="absolute left-0 top-4 2xl:top-3 3xl:top-[22px] transition-all peer-focus:text-opacity-50 text-[9px] sm:text-[9px] md:text-[9px] 2xl:text-[12px] tracking-widest peer-focus:text-[9px] sm:peer-focus:text-[9px] md:peer-focus:text-[9px] lg:peer-focus:text-[9px] 2xl:peer-focus:text-[12px]">
                                                NOTE
                                            </label>
                                        </div>
                                    </div>
                                    <div className='text-white h-1/5 flex justify-end items-center'>
                                        <MenuSvg className={`w-12 ${bgImage ? "fill-white" : currentTheme.fill} `} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default Card