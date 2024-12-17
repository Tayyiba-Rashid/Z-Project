'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i8n'


function HeroSection() {
    const { t, i18n } = useTranslation('herosection')
    
    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
        setDropdownMenuOpen(false);
        setIsMenuOpen(false);
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownMenuOpen] = useState(false);

    return (
        <>
            <section className="relative h-[100vh] w-screen grid grid-rows-7 lg:pr-10">
                <header className="relative grid xl:grid-cols-3 grid-cols-4 row-span-1 sm:mx-0 mx-4 ">
                    {/* Background Images */}
                    {/* 3XL */}
                    <Image
                        className="3xl:block hidden absolute 3xl:-top-40 3xl:left-[-35%] -z-10 pointer-events-none  "
                        src="/01_HeroSection/Ellipse 8.png"
                        width={950}
                        height={606}
                        alt="Top Left Decoration"
                    />
                    <Image
                        className="3xl:block hidden absolute 3xl:-top-32 3xl:-right-32 -z-10 pointer-events-none  "
                        src="/01_HeroSection/Decore.png"
                        width={1021}
                        height={1064}
                        alt="Top Right Decoration"
                        priority
                    />
                    {/* 2XL */}
                    <Image
                        className="3xl:hidden 2xl:block hidden absolute 2xl:-top-20 2xl:left-[-23%] -z-10 pointer-events-none  "
                        src="/01_HeroSection/Ellipse 8.png"
                        width={517}
                        height={606}
                        alt="Top Left Decoration"
                    />
                    <Image
                        className="3xl:hidden 2xl:block hidden absolute 2xl:-top-32 2xl:-right-40 -z-10 pointer-events-none  "
                        src="/01_HeroSection/Decore.png"
                        width={828}
                        height={1064}
                        alt="Top Right Decoration"
                        priority
                    />
                    {/* XL */}
                    <Image
                        className="2xl:hidden xl:block hidden absolute xl:-top-20 xl:left-[-22%] -z-10 pointer-events-none  "
                        src="/01_HeroSection/Ellipse 8.png"
                        width={428}
                        height={606}
                        alt="Top Left Decoration"
                    />
                    <Image
                        className="2xl:hidden xl:block hidden absolute xl:-top-20 xl:-right-32 -z-10 pointer-events-none  "
                        src="/01_HeroSection/Decore.png"
                        width={685}
                        height={1064}
                        alt="Top Right Decoration"
                        priority
                    />
                    {/* Lg */}
                    <Image
                        className="xl:hidden lg:block hidden absolute lg:-top-20 lg:left-[-30%] -z-10 pointer-events-none  "
                        src="/01_HeroSection/Ellipse 8.png"
                        width={441}
                        height={470}
                        alt="Top Left Decoration"
                    />
                    <Image
                        className="xl:hidden lg:block hidden absolute lg:-top-44 lg:-right-[21em] -z-10 pointer-events-none  "
                        src="/01_HeroSection/Decore.png"
                        width={828}
                        height={872}
                        alt="Top Right Decoration"
                        priority
                    />
                    {/* MD */}
                    <Image
                        className="lg:hidden md:block hidden absolute md:-top-44 md:-right-60 -z-10 pointer-events-none  "
                        src="/01_HeroSection/Decore.png"
                        width={828}
                        height={872}
                        alt="Top Right Decoration"
                        priority
                    />
                    {/* SM */}
                    <Image
                        className="md:hidden sm:block hidden absolute sm:-top-44 sm:-right-60 -z-10 pointer-events-none  "
                        src="/01_HeroSection/Decore.png"
                        width={828}
                        height={872}
                        alt="Top Right Decoration"
                        priority
                    />
                    {/* Mobile */}
                    <Image
                        className="sm:hidden block absolute -top-12 -right-32 -z-10 pointer-events-none  "
                        src="/01_HeroSection/Decore.png"
                        width={347}
                        height={872}
                        alt="Top Right Decoration"
                        priority
                    />
                    {/* LOGO */}
                    <div className="xl:col-span-1 col-span-1 grid xl:grid-cols-2 grid-cols-1 relative z-10">
                        <div className="xl:col-span-1 flex xl:justify-end md:justify-center justify-end items-center">
                            <Image
                                className="3xl:block hidden"
                                src="/01_HeroSection/Logo.png"
                                width={153}
                                height={41}
                                alt="Logo"
                            />
                            <Image
                                className="3xl:hidden 2xl:block hidden"
                                src="/01_HeroSection/Logo.png"
                                width={125}
                                height={34}
                                alt="Logo"
                            />
                            <Image
                                className="2xl:hidden xl:block hidden"
                                src="/01_HeroSection/Logo.png"
                                width={102}
                                height={33}
                                alt="Logo"
                            />
                            <Image
                                className="xl:hidden lg:block hidden"
                                src="/01_HeroSection/Logo.png"
                                width={90}
                                height={32}
                                alt="Logo"
                            />
                            <Image
                                className="lg:hidden md:block hidden"
                                src="/01_HeroSection/Logo.png"
                                width={113}
                                height={40}
                                alt="Logo"
                            />
                            <Image
                                className="md:hidden sm:block hidden"
                                src="/01_HeroSection/Logo.png"
                                width={112}
                                height={33}
                                alt="Logo"
                            />
                            <Image
                                className="sm:hidden block"
                                src="/01_HeroSection/Logo.png"
                                width={112}
                                height={33}
                                alt="Logo"
                            />
                        </div>
                        <div className="xl:col-span-1 xl:flex hidden">{""}</div>
                    </div>
                    {/* LINKS */}
                    <div className="xl:col-span-2 col-span-3 relative z-10">
                        <div className="lg:flex hidden w-full h-full items-center justify-evenly ">
                            <span className=" py-4 px-4 border border-transparent hover:text-[#F1A501] hover:scale-105 text-[#212832] rounded-xl cursor-pointer">
                                {t('destinations')}
                            </span>
                            <span className="2xl:text-[16px] lg:text-[14px] py-4 px-4 border border-transparent hover:text-[#F1A501] hover:scale-105 text-[#212832] rounded-xl cursor-pointer">
                                {t('hotels')}
                            </span>
                            <span className="2xl:text-[16px] lg:text-[14px] py-4 px-4 border border-transparent hover:text-[#F1A501] hover:scale-105 text-[#212832] rounded-xl cursor-pointer">
                                {t('flights')}
                            </span>
                            <span className="2xl:text-[16px] lg:text-[14px] py-4 px-4 border border-transparent hover:text-[#F1A501] hover:scale-105 text-[#212832] rounded-xl cursor-pointer">
                                {t('bookings')}
                            </span>
                            <span className="2xl:text-[16px] lg:text-[14px] py-4 px-4 border border-transparent hover:text-[#F1A501] hover:scale-105 text-[#212832] rounded-xl cursor-pointer">
                                {t('login')}
                            </span>
                            <span className="2xl:text-[16px] lg:text-[14px] py-4 px-4 border border-transparent hover:text-[#F1A501] hover:scale-105 text-[#212832] rounded-xl cursor-pointer">
                                {t('signup')}
                            </span>
                            <div
                                onClick={() => setDropdownMenuOpen(!isDropdownOpen)}
                                className="2xl:text-[16px] lg:text-[14px] py-4 px-4 border border-transparent rounded-xl cursor-pointer">
                                <div className='flex hover:text-[#F1A501] hover:scale-105 text-[#212832]'>
                                    {t('language')}
                                    <span className=''>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 h-full flex justify-center items-end ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </div>
                                {isDropdownOpen && (
                                    <div className="absolute bg-white shadow-md rounded-md mt-2 right-0 w-32 z-50">
                                        <span
                                            onClick={() => handleLanguageChange('en')}
                                            className="block px-4 py-2 hover:bg-gray-100 hover:text-[#F1A501] cursor-pointer"
                                        >
                                            English
                                        </span>
                                        <span
                                            onClick={() => handleLanguageChange('ur')}
                                            className="block px-4 py-2 hover:bg-gray-100 hover:text-[#F1A501] cursor-pointer"
                                        >
                                            اردو
                                        </span>
                                        <span
                                            onClick={() => handleLanguageChange('zh')}
                                            className="block px-4 py-2 hover:bg-gray-100 hover:text-[#F1A501] cursor-pointer"
                                        >
                                            中文
                                        </span>
                                    </div>
                                )}
                                
                            </div>
                            
                        </div>
                        <div className="lg:hidden h-full flex items-center justify-end sm:pr-14 pr-8 ">
                            {/* SVG Menu Icon */}
                            {!isMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 cursor-pointer"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 cursor-pointer"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </div>
                        {/* Dropdown Menu */}
                        {isMenuOpen && (
                            <div className="lg:hidden flex absolute bg-white top-full sm:w-2/3 w-full right-8 shadow-lg rounded-md p-4 flex-col space-y-2 z-50">
                                <span className="hover:text-[#F1A501] cursor-pointer text-center border-b pb-4 pt-1">
                                    {t('destinations')}
                                </span>
                                <span className="hover:text-[#F1A501] cursor-pointer text-center border-b pb-4 pt-1">
                                    {t('hotels')}
                                </span>
                                <span className="hover:text-[#F1A501] cursor-pointer text-center border-b pb-4 pt-1">
                                    {t('flights')}
                                </span>
                                <span className="hover:text-[#F1A501] cursor-pointer text-center border-b pb-4 pt-1">
                                    {t('bookings')}
                                </span>
                                <span className="hover:text-[#F1A501] cursor-pointer text-center border-b pb-4 pt-1">
                                    {t('login')}
                                </span>
                                <span className="hover:text-[#F1A501] cursor-pointer text-center border-b pb-4 pt-1">
                                    {t('signup')}
                                </span>
                                <span
                                    onClick={() => setDropdownMenuOpen(!isDropdownOpen)}
                                    className="flex justify-center items-center hover:text-[#F1A501] cursor-pointer text-center pt-1">
                                    {t('language')}
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 h-full flex justify-center items-center">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </span>
                                <span>{isDropdownOpen && (
                                    <div className=" bg-white w-full items-center justify-center text-center z-50">
                                        <span
                                            onClick={() => handleLanguageChange('en')}
                                            className="block px-4 py-2 hover:bg-gray-100 hover:text-[#F1A501] cursor-pointer"
                                        >
                                            English
                                        </span>
                                        <span
                                            onClick={() => handleLanguageChange('ur')}
                                            className="block px-4 py-2 hover:bg-gray-100 hover:text-[#F1A501] cursor-pointer"
                                        >
                                            اردو
                                        </span>
                                        <span
                                            onClick={() => handleLanguageChange('zh')}
                                            className="block px-4 py-2 hover:bg-gray-100 hover:text-[#F1A501] cursor-pointer"
                                        >
                                            中文
                                        </span>
                                    </div>
                                )}</span>
                            </div>
                        )}
                    </div>
                </header>
                <div className='  row-span-6 grid lg:grid-cols-2 3xl:pr-[100px] 2xl:pr-[65px]'>
                    {/* LEFT */}
                    <div className='lg:order-first order-last col-span-1 flex flex-col lg:gap-0 gap-6 lg:items-start items-center 2xl:justify-start lg:justify-evenly justify-center 3xl:pt-36  3xl:pl-[165px] 2xl:pl-[130px] xl:pl-[110px] lg:pl-[83px] 2xl:py-24 lg:pb-14 pb-6 '>

                        <div className='2xl:text-[20px] xl:text-[15px] lg:text-[15px] text-[11px] font-bold text-[#DF6951]'>{t('best_destinations')}</div>
                        <div className='relative 2xl:text-[84px] xl:text-[50px] md:text-[30px] text-[30px] font-bold text-[#181E4B] xl:leading-[1.2em] 2xl:leading-[1em] 2xl:py-8  3xl:py-16 lg:text-start text-center w-full'>{t('Travel, Enjoy' || 'Easy and Fast')}<br />{t('and live a new')} <br /> {t('and full life')}

                            <img
                                src="/08_Footer/Decore-red.png"
                                alt="decorative image"
                                className="absolute top-0 3xl:right-[25%] 2xl:right-[8%] xl:right-[35%] lg:right-[53%] sm:right-[34%] right-[25%] 3xl:mt-[120px] 2xl:mt-[85px] xl:mt-[35px] lg:mt-[25px] mt-[25px] 3xl:w-2/5 2xl:w-3/6 xl:w-1/3 lg:w-1/4 sm:w-1/6 w-1/5 -z-10" />
                        </div>
                        <div className='text-[#5E6282] 3xl:text-[16px] xl:text-[12px] lg:text-[11px] md:text-[14px] text-[11px]  2xl:py-6 3xl:pb-10 lg:text-start text-center 2xl:w-auto xl:w-3/4 lg:w-2/4 sm:w-2/5 w-2/4' >{t('built_wicket')} <br className='3xl:hidden 2xl:block hidden' />
                            {t('sportsmen')}{" "}
                            <br className='3xl:block hidden' />
                            {t('listening')}</div>
                        <div className='flex 3xl:pt-10 2xl:pt-6 items-center justify-center'>
                            <button className='bg-[#F1A501] hover:bg-[#ffb921] text-white lg:text-[18px] md:text-[15px] text-[12px] lg:py-5 py-1 md:px-[35px] px-[25px] rounded-xl md:h-auto sm:h-12 h-10'>
                                {t('find_out_more')}
                            </button>
                            <button className='flex h-full items-center justify-center sm:pl-20 pl-6'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="md:size-16 sm:size-14 size-12 text-[#DF6951] hover:text-[#ff795e]">
                                        <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className='text-[#686D77] hover:text-[#828792] sm:text-[16px] text-[14px]'>{t('play_demo')}</span>
                            </button>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className=' lg:order-last order-first col-span-1 lg:items-start lg:justify-start justify-center  items-center flex'>
                        <Image
                            className='3xl:block hidden'
                            src="/01_HeroSection/Group 1 - Copy.png"
                            width={1206}
                            height={732}
                            alt="Top Left Decoration"
                            priority
                        />
                        <Image
                            className='3xl:hidden 2xl:block hidden w-full'
                            src="/01_HeroSection/Group 1 - Copy.png"
                            width={733}
                            height={732}
                            alt="Top Left Decoration"
                            priority
                        />
                        <Image
                            className='2xl:hidden xl:block hidden'
                            src="/01_HeroSection/Group 1 - Copy.png"
                            width={590}
                            height={455}
                            alt="Top Left Decoration"
                            priority
                        />
                        <Image
                            className='xl:hidden lg:block hidden'
                            src="/01_HeroSection/Group 1 - Copy.png"
                            width={470}
                            height={455}
                            alt="Top Left Decoration"
                            priority
                        />
                        <Image
                            className='lg:hidden md:block hidden ml-12'
                            src="/01_HeroSection/Group 1 - Copy.png"
                            width={350}
                            height={455}
                            alt="Top Left Decoration"
                            priority
                        />
                        <Image
                            className='md:hidden sm:block hidden ml-12'
                            src="/01_HeroSection/Group 1 - Copy.png"
                            width={300}
                            height={455}
                            alt="Top Left Decoration"
                            priority
                        />
                        <Image
                            className='sm:hidden block ml-12'
                            src="/01_HeroSection/Group 1 - Copy.png"
                            width={250}
                            height={455}
                            alt="Top Left Decoration"
                            priority
                        />

                    </div>
                </div>

            </section>

        </>
    );
}

export default HeroSection;
