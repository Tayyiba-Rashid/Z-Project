"use client"
import { useClickAway } from '@uidotdev/usehooks';
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext';
import Svg from './Svg';
function ZTFR() {
    const { currentTheme } = useTheme()
    const [isDragging, setIsDragging] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [files, setFiles] = useState([]);
    const fileInput = useRef(null);


    useEffect(() => {
        console.log(currentTheme.fgColor);
        console.log(currentTheme.border);
      }, [currentTheme.fgColor, currentTheme.border]);
    
    

    const handleClick = () => {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };

    const formatFileSize = (size) => {
        if (size < 1024) return `${size} B`;
        if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
        if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
        return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    };

    const getFileExtension = (fileName) => {
        const parts = fileName.split(".");
        return parts.length > 1 ? parts.pop() : "Unknown";
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files).map((file) => ({
            name: file.name,
            size: formatFileSize(file.size).toUpperCase(),
            type: getFileExtension(file.name).toUpperCase(),
        }));
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };

    const ref = useClickAway(() => {
        setIsOpen(true);
    });

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
        console.log("1", isDragging);

    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
        console.log("2", isDragging);
    };


    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files).map((file) => ({
            name: file.name,
            size: formatFileSize(file.size).toUpperCase(),
            type: getFileExtension(file.name).toUpperCase(),
        }));
        setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    };
    

    return (
        <>
            <section className={`h-[100vh] ${currentTheme.bgColor} grid grid-rows-9 xl:pt-[40px] md:pt-[34px] sm:pt-[25px] pt-[16px]`}
                style={{
                    backgroundImage: currentTheme.image ? `url(${currentTheme.image})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                {/* HEADER */}
                <header className=' row-span-1 flex justify-between items-start xl:px-[50px] md:px-[27px] px-[16px]'>
                    {/* header-left */}
                    <div>
                        <svg
                            className="3xl:w-[148px] 3xl:h-[50px] 2xl:w-[117px] 2xl:h-[40px] xl:w-[99px] xl:h-[34px] lg:w-[79px] lg:h-[27px] md:w-[119px] md:h-[40px] sm:w-[73px] sm:h-[25px] w-[73px] h-[25px] cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 147.169 50"
                            fill="currentColor"
                        >
                            <defs>
                                <clipPath id="clip-path">
                                    <rect id="Rectangle_2276" data-name="Rectangle 2276" width="147.169" height="50" fill="none" />
                                </clipPath>
                            </defs>
                            <g id="Group_5944" data-name="Group 5944" clipPath="url(#clip-path)">
                                <path
                                    id="Path_28412"
                                    data-name="Path 28412"
                                    d="M37.032,0V1.237a2.5,2.5,0,0,1-.494,1.448L4.806,47H36.75v3H 0V48.693a2.168,2.168,0,0,1,.424-1.272L32.226,3H.919V0Z"
                                    transform="translate(0 0)"
                                />
                                <path
                                    id="Path_28413"
                                    data-name="Path 28413"
                                    d="M77.5,0V3.075H59.934V50H56.329V3.075H38.662V0Z"
                                    transform="translate(3.434 0)"
                                />
                                <rect id="Rectangle_2274" data-name="Rectangle 2274" width="22.06" height="3.003" transform="translate(85.994 24.028)" />
                                <rect id="Rectangle_2275" data-name="Rectangle 2275" width="25.593" height="3.004" transform="translate(85.994 0)" />
                                <path
                                    id="Path_28414"
                                    data-name="Path 28414"
                                    d="M120.445,28.375a5.733,5.733,0,0,0-1.52-1.413,19.891,19.891,0,0,0,5.9-1.5,15.164,15.164,0,0,0,4.47-2.933,12.272,12.272,0,0,0,2.845-4.152,13.445,13.445,0,0,0,.989-5.23q0-6.468-4.276-9.806T115.922,0h-8.788V2.863h8.788q6.678,0,10.176,2.579t3.5,7.916a11.169,11.169,0,0,1-.954,4.7,9.841,9.841,0,0,1-2.774,3.569,12.84,12.84,0,0,1-4.452,2.279,20.572,20.572,0,0,1-5.954.795h-8.328v2.685h6.173a5.375,5.375,0,0,1,2.137.319,3.535,3.535,0,0,1,1.29,1.1l16.007,20.283a2.549,2.549,0,0,0,.8.707,2.081,2.081,0,0,0,.97.211h3.146Z"
                                    transform="translate(9.516 0)"
                                />
                            </g>
                        </svg>
                    </div>
                    {/* header-right */}
                    <div className='flex justify-center items-center '>
                        {/* right-1 */}
                        <div className='xl:px-[31px] px-[16px] '>
                            <svg
                                className='3xl:w-[21px] 3xl:h-[25px] 2xl:w-[16px] 2xl:h-[20px] xl:w-[13px] xl:h-[16px] lg:w-[10px] lg:h-[13px] md:w-[20px] md:h-[23px] sm:w-[14px] sm:h-[18px] w-[14px] h-[18px] cursor-pointer'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 21.088 25.5"
                            >
                                <g id="Group_2867" data-name="Group 2867" transform="translate(0.25 0.25)">
                                    <g id="Group_2661" data-name="Group 2661" transform="translate(3.676 0)">
                                        <path
                                            id="Path_7580"
                                            data-name="Path 7580"
                                            d="M113.274,88.712a6.618,6.618,0,1,1,6.618-6.618A6.625,6.625,0,0,1,113.274,88.712Zm0-11.765a5.147,5.147,0,1,0,5.147,5.147A5.153,5.153,0,0,0,113.274,76.948Z"
                                            transform="translate(-106.656 -75.477)"
                                            stroke="#000"
                                            strokeWidth="0.5"
                                        />
                                    </g>
                                    <g id="Group_2662" data-name="Group 2662" transform="translate(0 13.971)">
                                        <path
                                            id="Path_7581"
                                            data-name="Path 7581"
                                            d="M107.022,160.556a.735.735,0,0,1-.735-.735,8.824,8.824,0,0,0-17.616-.735h14.675a.735.735,0,1,1,0,1.471H87.169v-.735a10.294,10.294,0,0,1,20.588,0A.736.736,0,0,1,107.022,160.556Z"
                                            transform="translate(-87.169 -149.527)"
                                            stroke="#000"
                                            strokeWidth="0.5"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        {/* right-2 */}
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className='3xl:size-[50px] 2xl:size-[40px] xl:size-[33px] lg:size-[26.67px] md:size-[40px] sm:size-[25px] size-[25px] cursor-pointer'
                                viewBox="0 0 50 50"
                            >
                                <g
                                    id="Group_5511"
                                    data-name="Group 5511"
                                    transform="translate(-140.575 -31.907)"
                                >
                                    <path
                                        id="Path_27777"
                                        data-name="Path 27777"
                                        d="M207.306,36.1a12.455,12.455,0,0,0-9.319-4.189h-4.312V45.183Z"
                                        transform="translate(-19.913 0)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27778"
                                        data-name="Path 27778"
                                        d="M159.3,31.907h-4.312a12.454,12.454,0,0,0-9.319,4.19L159.3,45.184Z"
                                        transform="translate(-1.908 0)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27779"
                                        data-name="Path 27779"
                                        d="M218.629,57.512V55.35l-3.244,2.162Z"
                                        transform="translate(-28.054 -8.792)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27780"
                                        data-name="Path 27780"
                                        d="M218.587,87.221V85.012h-3.313Z"
                                        transform="translate(-28.013 -19.915)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27781"
                                        data-name="Path 27781"
                                        d="M140.575,85.012V87.22l3.312-2.208Z"
                                        transform="translate(0 -19.915)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27782"
                                        data-name="Path 27782"
                                        d="M193.675,103.97h4.312a12.454,12.454,0,0,0,9.292-4.16l-13.6-9.067Z"
                                        transform="translate(-19.913 -22.064)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27783"
                                        data-name="Path 27783"
                                        d="M145.707,99.809A12.455,12.455,0,0,0,155,103.97h4.312V90.742Z"
                                        transform="translate(-1.925 -22.064)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27784"
                                        data-name="Path 27784"
                                        d="M140.575,55.351v2.162h3.243Z"
                                        transform="translate(0 -8.792)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27785"
                                        data-name="Path 27785"
                                        d="M160.8,31.907h-3.409V45.184L143.756,36.1a12.46,12.46,0,0,0-2.6,4.541l12.152,8.083h-6.483l-6.25-4.158v2l3.244,2.162h-3.244v3.411H160.8Z"
                                        transform="translate(0 0)"
                                        fill="#fff"
                                    />
                                    <path
                                        id="Path_27786"
                                        data-name="Path 27786"
                                        d="M188.215,99.771h3.412V86.544l13.6,9.067a12.466,12.466,0,0,0,2.658-4.67l-12-7.979h6.482L208.44,87V85.171l-3.312-2.209h3.312V79.545H188.215Z"
                                        transform="translate(-17.865 -17.865)"
                                        fill="#fff"
                                    />
                                    <path
                                        id="Path_27787"
                                        data-name="Path 27787"
                                        d="M191.627,48.721V47.088l14.633-9.731a12.588,12.588,0,0,0-1-1.262l-13.631,9.087V31.907h-3.412V52.132H208.44V48.721H205.2l3.244-2.162V44.407a12.48,12.48,0,0,0-.59-3.794l-12.189,8.109Z"
                                        transform="translate(-17.865 0)"
                                        fill="#fff"
                                    />
                                    <path
                                        id="Path_27788"
                                        data-name="Path 27788"
                                        d="M140.575,79.545v3.417h3.312l-3.312,2.208v2.1a12.5,12.5,0,0,0,.551,3.674l12.007-7.984h4.254v1.476l-14.7,9.779a12.513,12.513,0,0,0,1.1,1.393l13.6-9.067V99.771H160.8V79.545Z"
                                        transform="translate(0 -17.865)"
                                        fill="#fff"
                                    />
                                    <path
                                        id="Path_27789"
                                        data-name="Path 27789"
                                        d="M170.35,31.907H160.8V52.132H140.575V61.68H160.8V81.906h9.553V61.68h20.225V52.132H170.35Z"
                                        transform="translate(0)"
                                        fill="#c20320"
                                    />
                                    <path
                                        id="Path_27790"
                                        data-name="Path 27790"
                                        d="M200.5,85.012l12,7.979a12.486,12.486,0,0,0,.55-3.67v-.275l-6.067-4.034Z"
                                        transform="translate(-22.471 -19.915)"
                                        fill="#c20320"
                                    />
                                    <path
                                        id="Path_27791"
                                        data-name="Path 27791"
                                        d="M193.675,50.359v1.633h4.034L209.9,43.883a12.463,12.463,0,0,0-1.589-3.255Z"
                                        transform="translate(-19.913 -3.271)"
                                        fill="#c20320"
                                    />
                                    <path
                                        id="Path_27792"
                                        data-name="Path 27792"
                                        d="M157.718,85.012h-4.254L141.457,93a12.432,12.432,0,0,0,1.558,3.272l14.7-9.779Z"
                                        transform="translate(-0.331 -19.915)"
                                        fill="#c20320"
                                    />
                                    <path
                                        id="Path_27793"
                                        data-name="Path 27793"
                                        d="M153.308,53.96l-12.152-8.083a12.49,12.49,0,0,0-.581,3.769V49.8l6.25,4.158Z"
                                        transform="translate(0 -5.239)"
                                        fill="#c20320"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                </header>
                <main className='h-full row-span-7 grid lg:grid-cols-3 grid-cols-4  items-center'>
                    {/* MAIN COL 1 */}
                    <div className='h-full sm:col-span-1  flex items-center justify-start'>
                        {isOpen ? (
                            <>
                                <div
                                    onClick={handleToggle}
                                    className={`relative bg-black flex flex-col 3xl:w-[157px] 3xl:h-[489px] 2xl:w-[126px] 2xl:h-[391px] xl:w-[105px] xl:h-[326px] lg:w-[84px]  lg:h-[335px] md:w-[102px]  md:h-[454px] sm:w-[70px]  sm:h-[330px] h-[370px] w-3/5 rounded-r-2xl cursor-pointer`}>
                                    {/* LOCK SVG */}
                                    <div className={`absolute top-0 right-0  pt-[21px] pr-[18px]`}>
                                        <Svg className={`w-12 ${currentTheme.fill} `} />
                                    </div>
                                    {/* INNER TEXT */}
                                    <div className="flex justify-center items-center w-full h-full">
                                        <p className={`[writing-mode:vertical-rl] rotate-180 3xl:text-[12px] 2xl:text-[9px] xl:text-[8px] lg:text-[7px] md:text-[9px] sm:text-[7px] text-[7px] text-center md:leading-5 lg:tracking-widest tracking-[0.2em] ${currentTheme.fgColor}`}>UPLOAD FILES OR FOLDERS BY DROPPING <br /> THEM ANYWHERE IN THIS WINDOW
                                        </p>
                                    </div>
                                    {/* OUTER TEXT */}
                                    <div className=' absolute flex justify-start items-start top-0  w-full h-full left-full pt-[21px]'>
                                        <p className='font-thin 3xl:text-[8px] 2xl:text-[7px] xl:text-[6px] lg:text-[5px] md:text-[6px] sm:text-[5px] text-[5px] tracking-[0.2em] [writing-mode:vertical-rl]'>ADVANCED ENCRYPTION STANDARD (AES) 256-BIT</p>
                                    </div>

                                </div>
                            </>
                        ) : (<>
                            {/* ON OPEN */}
                            <div
                                ref={ref}
                                className='absolute  border-none 3xl:left-[157px] 2xl:left-[126px] xl:left-[105px] lg:left-[84px] md:left-[102px] sm:left-[70px] left-[15%] 3xl:h-[489px]  2xl:h-[391px]  xl:h-[326px] lg:h-[335px] md:h-[454px] sm:h-[330px] h-[370px] 3xl:w-[314px] 2xl:w-[265px] xl:w-[245px] lg:w-[235px] md:w-[300px] sm:w-[225px] w-[225px]  rounded-2xl bg-transparent z-10'
                            >
                                <div className='relative h-full w-full'>
                                    {/* left */}
                                    <div

                                        className='absolute top-0 left-0 w-1/3 h-1/5 rounded-tl-2xl'>
                                        {/* UPLOAD ICON */}
                                        <input
                                            multiple
                                            type="file"
                                            className='hidden'
                                            ref={fileInput}
                                            onChange={handleFileChange} />
                                        <div
                                            onDrop={handleDrop}
                                            onDragOver={handleDragOver}
                                            onDragLeave={handleDragLeave}
                                            className="h-full w-full flex items-center justify-center $ cursor-pointer">

                                            <svg
                                                onClick={handleClick}
                                                className='size-[40px] sm:size-[48px] md:size-[62px] lg:size-[50px] xl:size-[45px] 2xl:size-[57px] 3xl:size-[67.557px] '
                                                xmlns="http://www.w3.org/2000/svg"

                                                viewBox="0 0 67.557 67.557"
                                            >
                                                <path
                                                    id="Path_27378"
                                                    data-name="Path 27378"
                                                    d="M369.266,311H339.241V280.978h-7.506V311H301.709v7.506h30.025v30.025h7.506V318.51h30.025Z"
                                                    transform="translate(-301.709 -280.978)"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* right */}
                                    <div className='absolute bg-black top-0 right-0 w-2/3 h-1/5 rounded-tr-2xl '>
                                        <div className='relative h-full w-full text-white'>
                                            {/* top text */}
                                            <div className='pl-[11px] text-white w-full h-full flex flex-col justify-center items-start'>
                                                <div className={`text-[8px] sm:text-[10px] md:text-[14px] lg:text-[10px] xl:text-[10px] 2xl:text-[13px] 3xl:text-[14px] tracking-widest  lg:mt-[19px] sm:mt-[11px] mt-[9px] ${currentTheme.fgColor}`}>UPLOAD FILES</div>
                                                <div className={`text-[25px] sm:text-[25px] md:text-[33px] lg:text-[28px] xl:text-[28px] 2xl:text-[38px] 3xl:text-[40px] ${currentTheme.fgColor}`}>OR</div>

                                            </div>
                                            {/* LOCK */}
                                            <div className='absolute top-0 right-0  pt-[21px] pr-[18px]'>
                                                <svg
                                                    className={`2xl:w-[12.18px] 2xl:h-[15.5px] xl:w-[8.12px] xl:h-[10.33px] w-[8px] h-[10px] ${currentTheme.fill}`}
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    width="12.176" 
                                                    height="15.496" 
                                                    viewBox="0 0 12.176 15.496"
                                                    fill='inherit'>
                                                    <path id="Path_27800" data-name="Path 27800" d="M70.088-30.72a4.135,4.135,0,0,0-3.874,4.339v1.24H65.107A1.179,1.179,0,0,0,64-23.9v7.438a1.179,1.179,0,0,0,1.107,1.24h9.962a1.179,1.179,0,0,0,1.107-1.24V-23.9a1.179,1.179,0,0,0-1.107-1.24H73.962v-1.24a4.137,4.137,0,0,0-3.677-4.294A.5.5,0,0,0,70.088-30.72Zm0,1.24a2.938,2.938,0,0,1,2.767,3.1v1.24H67.321v-1.24A2.938,2.938,0,0,1,70.088-29.48Z" transform="translate(-64 30.72)" 
                                                     />
                                                </svg>

                                            </div>
                                            {/* OUTER TEXT2 */}
                                            <div className=' absolute flex justify-start items-start top-0 left-full pt-[21px]'>
                                                <p className='font-thin 3xl:text-[8px] 2xl:text-[7px] xl:text-[6px] lg:text-[5px] md:text-[6px] sm:text-[5px] text-[5px] tracking-[0.2em] [writing-mode:vertical-rl] text-black'>ADVANCED ENCRYPTION STANDARD (AES) 256-BIT</p>
                                            </div>
                                            <div className='absolute  top-full right-0 bg-black rounded-b-2xl h-[400%] 3xl:w-[314px] 2xl:w-[265px] xl:w-[245px] lg:w-[235px] md:w-[300px] sm:w-[225px] w-[225px] '>
                                                {/* 2 */}
                                                <div className='w-full h-full flex flex-col px-[19px]'>
                                                    {/* FILE LIST */}
                                                    <div className="h-2/5 w-full">
                                                        {files.length > 0 ? (
                                                            <div className="text-white row-span-2 flex flex-col justify-between items-start py-2  overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300  h-full ">
                                                                {files.map((file, index) => (
                                                                    <div key={index} className='break-words text-start text-white text-[8px] sm:text-[10px] md:text-[14px] lg:text-[11px] xl:text-[10px] 2xl:text-[13px] 3xl:text-[14px] tracking-widest'>
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
                                                            <div className={`relative h-full w-full text-white row-span-2 flex flex-col justify-between items-end pt-2
                                                            ${isDragging ? 'bg-gray-400 opacity-50' : 'bg-transparent'
                                                                }`}
                                                            >
                                                                <p className={`text-[8px] sm:text-[10px] md:text-[14px] lg:text-[10px] xl:text-[10px] 2xl:text-[13px] 3xl:text-[14px] tracking-widest ${currentTheme.fgColor}`}>SELECT A FOLDER</p>
                                                                <p className={`absolute top-[30%] -right-[40%] text-[25px] sm:text-[25px] md:text-[35px] lg:text-[28px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[40px] flex ${currentTheme.fgColor}`}>UP TO &nbsp; <span className='text-black 3xl:pl-1 2xl:pl-[6px] xl:pl-2 lg:pl-1 md:pl-3 sm:pl-2 pl-2 '> 1 TB  </span>
                                                                </p>
                                                                <p className={`text-[8px] sm:text-[10px] md:text-[14px] lg:text-[11px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[20px] tracking-widest ${currentTheme.fgColor}`}>FREE</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    {/* FIELD PART */}
                                                    <div className='h-2/5 w-full '>
                                                        <div className={`relative h-1/2 w-full flex flex-col justify-end ${currentTheme.fgColor}`}>
                                                            <input
                                                                id="title"
                                                                className={`peer w-full bg-transparent border-b ${currentTheme.border} focus:border-b-2 focus:border-gray-400 focus:outline-none pt-4 pb-1 placeholder-transparent 3xl:text-[16px] 2xl:text-[14px] xl:text-[11px] lg:text-[10px] sm:text-[14px] text-[12px]`}
                                                                type="text"
                                                                placeholder="Title"
                                                            />
                                                            <label
                                                                htmlFor="title"
                                                                className={`absolute left-0 top-5 xl:top-3 3xl:top-7 
                                                              ${currentTheme.fgColor}  transition-all 2xl:peer-placeholder-shown:top-[60%]  
                                                                peer-placeholder-shown:top-[60%]  
                                                              peer-placeholder-shown:${currentTheme.fgColor}  
                                                              peer-focus:text-gray-400
                                                                peer-placeholder-shown:text-[9px]
                                                                sm:peer-placeholder-shown:text-[9px]
                                                                md:peer-placeholder-shown:text-[9px]
                                                                2xl:peer-placeholder-shown:text-[12px]
                                                                tracking-widest
                                                                peer-focus:text-[9px]
                                                                sm:peer-focus:text-[9px]
                                                                md:peer-focus:text-[9px] 
                                                                lg:peer-focus:text-[9px] 
                                                                2xl:peer-focus:text-[12px] 
                                                                3xl:peer-focus:top-7
                                                                2xl:peer-focus:top-3
                                                                xl:peer-focus:top-3
                                                                peer-focus:top-5
                                                                text-[9px]
                                                                sm:text-[9px]
                                                                md:text-[9px] 
                                                                lg:text-[9px] 
                                                                2xl:text-[12px]`}>
                                                                TITLE
                                                            </label>
                                                        </div>


                                                        <div className={`relative ${currentTheme.fgColor} flex flex-col justify-end  h-1/2`}>
                                                            <input
                                                                id="title"
                                                                className={`peer 3xl:text-[16px] 2xl:text-[14px] xl:text-[11px] sm:text-[14px] lg:text-[10px] text-[12px] bg-transparent border-b 
                                                                ${currentTheme.border}  focus:border-b-2 focus:border-gray-400 focus:outline-none w-full pt-4 pb-1 placeholder-transparent`}
                                                                type="text"
                                                            />
                                                            <label
                                                                htmlFor="title"
                                                                className="absolute left-0 top-4 2xl:top-3 3xl:top-[22px] transition-all
                                                              peer-focus:text-gray-400
                                                                text-[9px]
                                                                sm:text-[9px]
                                                                md:text-[9px] 
                                                                2xl:text-[12px]
                                                                tracking-widest
                                                                peer-focus:text-[9px]
                                                                sm:peer-focus:text-[9px] 
                                                                md:peer-focus:text-[9px]
                                                                lg:peer-focus:text-[9px] 
                                                                2xl:peer-focus:text-[12px]"
                                                            >
                                                                NOTE
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='text-white h-1/5 flex justify-end items-center'>
                                                        <svg
                                                            className={`size-4 md:size-4 xl:size-5 2xl:size-[6.71] ${currentTheme.fill}`}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            width="6.706"
                                                            height={25}
                                                            viewBox="0 0 6.706 25"
                                                        >
                                                            <defs>
                                                                <clipPath id="clip-path">
                                                                    <rect
                                                                        id="Rectangle_1037"
                                                                        data-name="Rectangle 1037"
                                                                        width="6.706"
                                                                        height={25}
                                                                        transform="translate(0 0)"
                                                                        // fill="#fff"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                            <g id="Group_5526" data-name="Group 5526" transform="translate(0 0)">
                                                                <g
                                                                    id="Group_5525"
                                                                    data-name="Group 5525"
                                                                    transform="translate(0 0)"
                                                                    clipPath="url(#clip-path)"
                                                                >
                                                                    <path
                                                                        id="Path_27808"
                                                                        data-name="Path 27808"
                                                                        d="M0,3.354A3.353,3.353,0,1,0,3.354,0,3.353,3.353,0,0,0,0,3.354"
                                                                        transform="translate(0 0)"
                                                                        fill="inherit"
                                                                    />
                                                                    <path
                                                                        id="Path_27809"
                                                                        data-name="Path 27809"
                                                                        d="M0,25.347a3.353,3.353,0,1,0,3.354-3.354A3.353,3.353,0,0,0,0,25.347"
                                                                        transform="translate(0 -3.7)"
                                                                        fill="inherit"
                                                                    />
                                                                    <path
                                                                        id="Path_27810"
                                                                        data-name="Path 27810"
                                                                        d="M0,14.35A3.353,3.353,0,1,0,3.354,11,3.353,3.353,0,0,0,0,14.35"
                                                                        transform="translate(0 -1.85)"
                                                                        fill="inherit"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </svg>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </>)}
                    </div>
                    {/* MAIN COL 2 */}
                    <div className='h-full lg:col-span-1 col-span-2  flex items-center justify-center'>
                        <div className='flex flex-col justify-center items-end'>
                            <p className='3xl:text-[60px] 2xl:text-[50px] xl:text-[35px] lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] tracking-widest leading-none 3xl:pr-[18px] xl:pr-[11px] lg:pr-[9px] md:pr-[8px] sm:pr-[7px] pr-[6px] '>LET'S DO</p>
                            <p className='3xl:text-[185px] 2xl:text-[150px] xl:text-[95px] lg:text-[90px]  md:text-[90px] sm:text-[70px] text-[60px] tracking-widest sm:leading-normal leading-none  2xl:pr-0 '>THIS</p>
                            <p className='3xl:text-[12px] 2xl:text-[9px] xl:text-[8px] lg:text-[6.5px] md:text-[6px] sm:text-[5px] text-[4.5px] 2xl:tracking-widest 3xl:pr-[25px] 2xl:pr-[24px]  xl:pr-[14px] lg:pr-[15px] md:pr-[15px] sm:pr-[11px] pr-[10px] '>UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW</p>
                        </div>
                    </div>
                    {/* MAIN COL 3 */}
                    <div className='h-full sm:col-span-1 flex items-center justify-end'>
                        <div className='bg-black flex flex-col 3xl:w-[50px] 3xl:h-[203px] 2xl:w-[40px] 2xl:h-[171px] xl:w-[37px] xl:h-[142px] lg:w-[33px] lg:h-[147px] md:w-[40px] md:h-[171px] sm:w-[30px] sm:h-[143px] w-[25px]  h-[140px] rounded-l-2xl cursor-pointer'>
                            <div className="flex justify-center items-center w-full h-full">
                                <span className={`rotate-90 ${currentTheme.fill}`}>
                                    <svg
                                        className='3xl:w-[90px] 3xl:h-[22px] 2xl:w-[72px] 2xl:h-[18px] xl:w-[60px] xl:h-[15px] lg:w-[62px] lg:h-[13px]  md:w-[62px] md:h-[13px] sm:w-[70px] sm:h-[12px] w-[70px] h-[12px]'
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width={90}
                                        height="22.883"
                                        viewBox="0 0 90 22.883"
                                    >
                                        <defs>
                                            <clipPath id="clip-path">
                                                <rect
                                                    id="Rectangle_2351"
                                                    data-name="Rectangle 2351"
                                                    width={90}
                                                    height="22.883"
                                                />
                                            </clipPath>
                                        </defs>
                                        <g id="Group_5915" data-name="Group 5915" clipPath="url(#clip-path)">
                                            <path
                                                id="Path_35780"
                                                data-name="Path 35780"
                                                d="M27.829,18.988v-.479a7.684,7.684,0,0,0-.479-2.264,32.151,32.151,0,0,0-2.178-3.877c-1.4-2.435-2.985-5.252-4.4-7.709C19.609,2.637,18.526.039,15.634,0c-3-.044-4,2.61-5.1,4.528C7.077,10.616,0,22.865,0,22.865H3.267s6.75-11.948,10.1-17.987c.429-.772,1.28-1.788,2.264-1.788,1.5,0,2.248,1.781,2.918,3.007,1.8,3.277,3.537,6.414,5.226,9.582.533.994,1.61,2.305.873,3.658-.483.883-1.454.826-2.832.826,0,.025-13.326,0-13.326,0v2.7H20.6a28.669,28.669,0,0,0,4.007-.13,4.042,4.042,0,0,0,3.223-3.747"
                                                transform="translate(0 0.003)"
                                                fill="inherit"
                                            />
                                            <path
                                                id="Path_35781"
                                                data-name="Path 35781"
                                                d="M7.221,3.893v.479A7.683,7.683,0,0,0,7.7,6.636a32.15,32.15,0,0,0,2.178,3.877c1.4,2.438,2.985,5.252,4.4,7.709,1.165,2.023,2.248,4.62,5.14,4.658,3,.044,4-2.61,5.1-4.528C27.973,12.266,35.05.017,35.05.017H31.783S25.033,11.964,21.68,18c-.429.772-1.28,1.788-2.264,1.788-1.5,0-2.248-1.781-2.918-3.007-1.8-3.277-3.537-6.414-5.226-9.582-.533-.994-1.61-2.305-.873-3.658.483-.883,1.454-.826,2.832-.826,0-.025,13.326,0,13.326,0V.017H14.451a28.67,28.67,0,0,0-4.007.13A4.042,4.042,0,0,0,7.221,3.893"
                                                transform="translate(15.706 0)"
                                                fill="inherit"
                                            />
                                            <path
                                                id="Path_35782"
                                                data-name="Path 35782"
                                                d="M40.189,18.988v-.479a7.683,7.683,0,0,0-.479-2.264,32.151,32.151,0,0,0-2.178-3.877c-1.4-2.435-2.985-5.252-4.4-7.709C31.969,2.637,30.886.039,27.994,0c-3-.044-4,2.61-5.1,4.528C19.437,10.616,12.36,22.865,12.36,22.865h3.267s6.75-11.948,10.1-17.987c.429-.772,1.28-1.788,2.264-1.788,1.5,0,2.248,1.781,2.918,3.007,1.8,3.277,3.537,6.414,5.226,9.582.533.994,1.61,2.305.873,3.658-.483.883-1.454.826-2.832.826,0,.025-13.326,0-13.326,0v2.7H32.96a28.669,28.669,0,0,0,4.007-.13,4.042,4.042,0,0,0,3.223-3.747"
                                                transform="translate(26.884 0.003)"
                                                fill="inherit"
                                            />
                                            <path
                                                id="Path_35783"
                                                data-name="Path 35783"
                                                d="M19.581,3.893v.479a7.683,7.683,0,0,0,.479,2.264,32.153,32.153,0,0,0,2.178,3.877c1.4,2.438,2.985,5.252,4.4,7.709,1.165,2.023,2.248,4.62,5.14,4.658,3,.044,4-2.61,5.1-4.528C40.333,12.266,47.41.017,47.41.017H44.143S37.393,11.964,34.04,18c-.429.772-1.28,1.788-2.264,1.788-1.5,0-2.248-1.781-2.918-3.007-1.8-3.277-3.537-6.414-5.226-9.582-.533-.994-1.61-2.305-.873-3.658.483-.883,1.454-.826,2.832-.826,0-.025,13.326,0,13.326,0V.017H26.811A28.67,28.67,0,0,0,22.8.147a4.042,4.042,0,0,0-3.223,3.747"
                                                transform="translate(42.59 0)"
                                                fill="inherit"
                                            />
                                        </g>
                                    </svg>

                                </span>
                            </div>
                        </div>
                    </div>
                </main>

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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="md:h-[6px] md:w-[5px] h-[6px] w-[5px]"
                                        viewBox="0 0 5.018 6.386"
                                    >
                                        <path
                                            id="Path_27216"
                                            data-name="Path 27216"
                                            d="M66.509-30.72a1.7,1.7,0,0,0-1.6,1.788v.511h-.456A.486.486,0,0,0,64-27.91v3.065a.486.486,0,0,0,.456.511h4.106a.486.486,0,0,0,.456-.511V-27.91a.486.486,0,0,0-.456-.511h-.456v-.511A1.705,1.705,0,0,0,66.59-30.7.207.207,0,0,0,66.509-30.72Zm0,.511a1.211,1.211,0,0,1,1.14,1.277v.511H65.369v-.511A1.211,1.211,0,0,1,66.509-30.209Z"
                                            transform="translate(-64 30.72)"
                                        />
                                    </svg>
                                </span>
                                {/* Text */}
                                <span className=" flex items-end h-full leading-none tracking-wide">
                                    ZITRANSFER USES ADVANCED ENCRYPTION STANDARD (AES) 256-BIT TO PROTECT THE CONFIDENTIALITY OF THE DATA YOU UPLOAD.
                                </span>
                            </div>
                        </div>

                    </div>
                </footer>
            </section>
        </>
    )
}
export default ZTFR