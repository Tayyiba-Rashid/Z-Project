'use client'
import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HowToZTFR, MenuClose, MenuFB, MenuFlagSvg, MenuPrinterest, MenuProfile, MenuTikTok, MenuVimeo, MenuX, MenuYoutube, WhiteZTFR, YellowZTFR, ZTransfer } from './Svg';

const Images = [
    "/menu/Group 6424.png",
    "/menu/Group 6425.png",
    "/menu/Group 6426.png",
    "/menu/Group 6427.png",
    "/menu/Group 6428.png",
    "/menu/Group 6429.png",
    "/menu/Group 6430.png",

];
const VerticalImages = [
    "/menu/Group 6430.png",
    "/menu/Group 6429.png",
    "/menu/Group 6428.png",
    "/menu/Group 6427.png",
    "/menu/Group 6426.png",
    "/menu/Group 6425.png",
    "/menu/Group 6424.png",
    "/menu/Group 6430.png",
    "/menu/Group 6429.png",
    "/menu/Group 6428.png",
    "/menu/Group 6427.png",
    "/menu/Group 6426.png",
    "/menu/Group 6425.png",
    "/menu/Group 6424.png",
];
const data = [
    { id: 1, thumbnail: "/new/cat.png", bg: "/new/catbg.png" },
    { id: 2, thumbnail: "/new/flowers.png", bg: "/new/flowersbg.png" },
    { id: 3, thumbnail: "/new/girl.png", bg: "/new/girlbg.png" },
    { id: 4, thumbnail: "/new/red.png", bg: "/new/redbg.png" },
    { id: 5, thumbnail: "/new/owl.png", bg: "/new/owlbg.png" },
    { id: 6, thumbnail: "/new/snow.png", bg: "/new/snowbg.png" },
    { id: 7, thumbnail: "/new/tiger.png", bg: "/new/tigerbg.png" },
];




function Menu({ handleMenu, handleBackground }) {
    const [slidesToShow, setSlidesToShow] = useState(0);
    const greenDivRef = useRef(null);


    const settings = {
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 7,
        autoplay: true,
        speed: 20000,
        autoplaySpeed: 0,
        cssEase: "linear",
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        pauseOnHover: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: slidesToShow,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: slidesToShow,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: slidesToShow,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: slidesToShow,
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: slidesToShow - 1,
                }
            },
        ]
    };


    const adjustSlidesToShow = () => {
        if (greenDivRef.current) {
            const greenDivHeight = greenDivRef.current.offsetHeight;
            const greenDivWidth = greenDivRef.current.offsetWidth;
            const slidesCount = parseFloat((greenDivHeight / greenDivWidth).toFixed(2) - 0.4);
            setSlidesToShow(slidesCount > 0 ? slidesCount : 1);
        }
    };

    useEffect(() => {
        adjustSlidesToShow();
        window.addEventListener("resize", adjustSlidesToShow);
        return () => window.removeEventListener("resize", adjustSlidesToShow);
    }, []);


    const hScrollSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 7,
        autoplay: true,
        speed: 20000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 7,
                    speed: 20000,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5.6,
                    slidesToScroll: 7,
                    autoplay: true,
                    speed: 20000,
                    infinite: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 7,
                    speed: 20000,
                    infinite: true,
                }
            },
        ]
    };
    return (
        <div className=' h-full flex flex-col justify-between'>
            <header className=' flex justify-between'>

                {/* left */}
                <div className='w-full h-full flex '>
                    <span
                        onClick={handleMenu}
                        className='h-full flex justify-start items-start cursor-pointer hover:fill-[#BE9F56] fill-white '>
                        <MenuClose />
                    </span>
                    <p className='h-full flex justify-start items-start text-white  2xl:text-[14px] xl:text-[13px] lg:text-[11px] md:text-[12px] sm:text-[10px] text-[8px] tracking-widest 3xl:ml-[40px] 2xl:ml-[30px] xl:ml-[20px] lg:ml-[15px] md:ml-[15px] sm:ml-[8px] ml-[8px] cursor-pointer '>
                        MENU
                    </p>
                </div>
                {/* middle */}
                <div className=' flex items-end justify-center w-full cursor-pointer'>
                    <ZTransfer />


                </div>
                {/* right */}
                <div className=' w-full h-full flex justify-end items-center'>
                    {/* right-1 */}
                    <div className='xl:px-[31px] px-[16px] fill-white'>
                        <MenuProfile />
                    </div>
                    {/* right-2 */}
                    <div>
                        <MenuFlagSvg />
                    </div>
                </div>
            </header>
            <main className='flex flex-col  flex-grow'>
                <div className=" flex xl:h-[75%] lg:h-[80%] md:h-[80%] sm:h-[80%] h-[85%] ">
                    {/* VERTICAL CAROUSEL */}
                    <div className="  lg:w-[25%] md:w-[15%] sm:w-[18%] w-[25%] overflow-y-hidden ">
                        <div ref={greenDivRef} className="h-full 3xl:w-[91.5%] xl:w-[87%] lg:w-[85%] md:w-full sm:w-[93%] w-[80%] ">
                            <Slider {...settings} >
                                {data.map((image, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleBackground(image)}
                                        className="flex flex-col justify-center items-center border-none outline-none"

                                    >
                                        <img
                                            src={image.thumbnail}
                                            alt={`Image ${image.id}`}
                                            className="md:rounded-2xl rounded-xl hover:scale-100 scale-95 transition-transform duration-300 w-full  max-w-[200px] mt-[5%] cursor-pointer"

                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className='relative lg:w-[75%] w-[85%] flex flex-col items-end '>
                        <div className='absolute 3xl:top-4 2xl:top-8 xl:top-8 lg:top-7  md:top-7 sm:top-6  top-5 left-0 3xl:size-[400px] 2xl:size-[290px] xl:size-[210px] lg:size-[180px] md:size-[270px] sm:size-[200px] size-[150px] 2xl:left-[34px] xl:left-[25px] lg:left-[25px] md:left-[45px] sm:left-[15px] '>
                            <div className='relative w-full h-full'>
                                <img className='xl:pb-0 pb-4' src="/menu/Group 6449.png" alt="image" />
                                <div className='absolute block xl:hidden 2xl:px-[34px] xl:pl-[15px]'>
                                    <img
                                        className='xl:hidden block z-10 lg:h-[100px] lg:w-[159px] md:h-[140px] md:w-[250px] sm:h-[100px] sm:w-[150px] h-[80px] w-[130px]'
                                        src="/menu/Group 6431.png"
                                        alt="water resistance" />
                                </div>
                            </div>
                        </div>
                        {/* LIST */}
                        <div className='text-end 3xl:space-y-8 2xl:space-y-5 xl:space-y-3 lg:space-y-[10px] md:space-y-4 sm:space-y-2 space-y-2 3xl:pt-[32px] 2xl:py-[20px] xl:pt-[20px] lg:py-[15px] md:py-[25px] sm:pt-[25px] sm:pb-[15px] pt-[25px] pb-[15px]'>
                            <p className='text-white hover:text-[#BE9F56] 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px] cursor-pointer lg:tracking-widest tracking-[0.3em]'>FEATURES</p>
                            <p className='text-white hover:text-[#BE9F56] 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px]  cursor-pointer lg:tracking-widest tracking-[0.3em]'>PRODUCTS</p>
                            <div className='flex justify-end items-center text-white 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px]   lg:tracking-widest tracking-[0.3em] cursor-pointer hover:text-[#BE9F56] group'>
                                <p>HOW TO &nbsp; </p>
                                <span className='fill-white group-hover:fill-[#BE9F56]'>
                                    <HowToZTFR />
                                </span>

                            </div>
                            <p className='text-white hover:text-[#BE9F56] 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px]   cursor-pointer lg:tracking-widest tracking-[0.3em]'>PRICING</p>
                            <p className='text-white hover:text-[#BE9F56] 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px]   cursor-pointer lg:tracking-widest tracking-[0.3em]'>ADVERTISING</p>
                            <p className='text-white hover:text-[#BE9F56] 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px]   cursor-pointer lg:tracking-widest tracking-[0.3em]'>CAREER</p>
                            <p className='text-white hover:text-[#BE9F56] 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px]  cursor-pointer lg:tracking-widest tracking-[0.3em]'>MY ACCOUNT</p>
                            <p className='text-white hover:text-[#BE9F56] 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px]  cursor-pointer lg:tracking-widest tracking-[0.3em]'>NEWSROOM/PRESS</p>
                        </div>
                        <div className='flex justify-end items-center'>
                            {/* Water Resistance */}
                            <div className='relative lg:block hidden 2xl:px-[34px] xl:px-[15px] lg:px-[15px]'>
                                <img
                                    className='xl:block hidden 3xl:w-[334px] 3xl:h-[200px] 2xl:w-[334px] 2xl:h-[150px] xl:w-[200px] xl:h-[130px] lg:w-[159px]'
                                    src="/menu/Group 6431.png"
                                    alt="water resistance" />
                            </div>
                            {/* 2 yelllow */}
                            <div className='3xl:w-[118px] 3xl:h-[150px] 2xl:w-[118px] 2xl:h-[130px] xl:w-[80px] xl:h-[90px] lg:w-[70px] lg:h-[80px] md:w-[80px] md:h-[90px] sm:w-[60px] sm:h-[70px] w-[40px] h-[50px] flex flex-col items-center justify-center sm:rounded-2xl rounded-lg  cursor-pointer hover:bg-opacity-95 bg-[#FFFF00]'>
                                <span>
                                    <YellowZTFR />
                                </span>
                                <span className='xl:text-[7px] md:text-[6px] sm:text-[5px] text-[3px] sm:pt-[15px] pt-[6px] '>LOG IN</span>
                            </div>
                            {/* 3 white */}
                            <div className='3xl:w-[118px] 3xl:h-[150px] 2xl:w-[118px] 2xl:h-[130px] xl:w-[80px] xl:h-[90px] lg:h-[80px] lg:w-[70px] md:w-[80px] md:h-[90px] sm:w-[60px] sm:h-[70px] w-[40px] h-[50px]  flex flex-col items-center justify-center sm:rounded-2xl rounded-lg bg-white xl:ml-[20px] lg:ml-[10px] md:ml-[10px] sm:ml-[10px] ml-[8px] cursor-pointer hover:bg-opacity-90'>
                                <span>
                                    <WhiteZTFR />

                                </span>
                                <span className='xl:text-[7px] md:text-[6px] sm:text-[5px] text-[3px] sm:pt-[15px] pt-[6px]'>CREATE USER ID</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Horizontal Carousel */}
                <div className='flex sm:items-center items-end  xl:h-[25%] lg:h-[15%] md:h-[20%] sm:h-[25%] h-[15%]' >
                    <div className='w-full '>
                        <Slider {...hScrollSettings}>
                            {data.map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleBackground(image)}
                                    className='border-none outline-none px-[10%] pt-[3%]'>
                                    <img src={image.thumbnail}
                                        alt={`Image ${index + 1}`}
                                        className="rounded-2xl shadow-lg hover:scale-105 hover:border-none transition-transform duration-300 cursor-pointer "

                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </main>
            <footer className='flex justify-between items-end w-full'>

                <div className='flex justify-end text-white w-2/3 tracking-widest 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[5px] cursor-pointer'>
                    <span className='hover:opacity-[100%] opacity-50'>TERMS &nbsp;</span><span className='opacity-50'>|</span>
                    <span className='hover:opacity-[100%] opacity-50'>&nbsp; PRIVACY</span>

                </div>
                <div className='flex justify-end sm:gap-x-4 gap-x-2 w-1/2'>
                    <span className='hover:opacity-[100%] opacity-50 '>
                        <MenuYoutube />
                    </span>
                    <span className='hover:opacity-[100%] opacity-50'>
                        <MenuVimeo />


                    </span>
                    <span className='hover:opacity-[100%] opacity-50'>
                        <MenuX />


                    </span>
                    <span className='hover:opacity-[100%] opacity-50'>
                        <MenuFB />


                    </span>
                    <span className='hover:opacity-[100%] opacity-50'>
                        <MenuTikTok />
                    </span>
                    <span className='hover:opacity-[100%] opacity-50'>
                        <MenuPrinterest />

                    </span>


                </div>
            </footer>

        </div>
    )
}

export default Menu