"use client"
import { useClickAway } from '@uidotdev/usehooks';
import React, { useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext';
import Menu from './Menu';
import {MenuLogoSvg,} from './Svg';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import CardButton from './CardButton';
import Card from './Card';
import Headline from './Headline';

function ZTFR() {
    const { currentTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(true);
    const [files, setFiles] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [bgImage, setBgImage] = useState(null)
    const timerRef = useRef(null);
    const secRef = useRef(null)

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

    const handleFileChange = (fileList) => {
        const selectedFiles = Array.from(fileList).map((file) => ({
            name: file.name,
            size: formatFileSize(file.size),
            type: getFileExtension(file.name),
        }))
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles])
        console.log(files)
    }

    const ref = useClickAway(() => {
        setIsOpen(true);
    });

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleMenu = () => {
        setIsMenuOpen((prev) => (!prev))
        console.log(isMenuOpen)
    };

    const handleBackground = (image) => {
        setBgImage(image.bg);
        console.log(timerRef.current)
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            setBgImage(null);
        }, 10000);

    };



    return (
        <>
            <motion.section
                className={`relative h-[100vh] ${bgImage ? "bg-transparent" : currentTheme.bgColor} grid grid-rows-9 xl:pt-[40px] md:pt-[34px] sm:pt-[25px] pt-[16px]  transition-all duration-500 overflow-hidden`}
                style={{
                    backgroundImage: bgImage
                        ? `url(${bgImage})`
                        : currentTheme.image
                            ? `url(${currentTheme.image})`
                            : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center"

                }}
                ref={secRef} >
                {/* MENU */}
                {isMenuOpen ? (
                    <section className='absolute z-20 top-0 right-0 h-dvh w-full lg:w-1/2 bg-opacity-90  bg-black xl:pt-[40px] md:pt-[34px] sm:pt-[25px] pt-[16px] overflow-x-hidden xl:pr-[50px] md:pr-[27px] pr-[16px] 2xl:pb-[24px] xl:pb-[15px] md:pb-[20px] sm:pb-[16px] pb-[12px] xl:pl-[25px] md:pl-[13px] pl-[8px]'>
                        <Menu handleMenu={handleMenu} handleBackground={handleBackground} />
                    </section>
                ) : null}


                {/* HEADER */}
                <Header />
                {/* MAIN */}
                <main className='h-full row-span-7 grid lg:grid-cols-3 grid-cols-4  items-center'>
                    {/* MAIN COL 1 */}
                    <div className='h-full sm:col-span-1  flex items-center justify-start'>
                        {isOpen ? (
                            <>
                                <CardButton
                                    handleToggle={handleToggle}
                                    bgImage={bgImage}
                                    currentTheme={currentTheme} />
                            </>
                        ) : (
                            <>
                                {/* ON OPEN */}
                                <Card
                                    secRef={secRef}
                                    ref={ref}
                                    handleFileChange={handleFileChange}
                                    bgImage={bgImage}
                                    currentTheme={currentTheme}
                                    files={files} />
                            </>)}
                    </div>
                    {/* MAIN COL 2 */}
                    <div className='h-full lg:col-span-1 col-span-2  flex items-center justify-center'>
                        <Headline />
                    </div>
                    {/* MAIN COL 3 */}
                    <div className='h-full sm:col-span-1 flex items-center justify-end'>
                        {/* MENU BUTTON */}
                        <div
                            onClick={handleMenu}
                            className='bg-black flex flex-col 3xl:w-[50px] 3xl:h-[203px] 2xl:w-[40px] 2xl:h-[171px] xl:w-[37px] xl:h-[142px] lg:w-[33px] lg:h-[147px] md:w-[40px] md:h-[171px] sm:w-[30px] sm:h-[143px] w-[25px]  h-[140px] rounded-l-2xl cursor-pointer'>
                            <div className="flex justify-center items-center w-full h-full">
                                <span className={`rotate-90 `}>
                                    <MenuLogoSvg className={`${bgImage ? "fill-white" : currentTheme.fill}`} />
                                </span>
                            </div>
                        </div>
                    </div>
                </main>
                {/* FOOTER */}
                <Footer />
            </motion.section>
        </>
    )
}
export default ZTFR