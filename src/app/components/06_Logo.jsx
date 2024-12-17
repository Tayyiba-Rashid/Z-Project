"use client"
import React from 'react'

export default function Logo() {
    return (
       <section className='h-full overflow-hidden'>
            {/* XL+ */}
            <div className='hidden xl:grid grid-cols-5 w-full 3xl:pl-[220px] 2xl:pl-[150px] xl:pl-[120px] lg:pl-[140px]'>
                <div className='xl:cols-span-1 flex items-center justify-start text-center'>
                    <img
                        src="/06_Logo/image 27.png"
                        alt="logo"
                        className="rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300"
                    />
                </div>
                <div className='xl:cols-span-1 flex items-center justify-start text-center'>
                    <img
                        src="/06_Logo/image 28.png"
                        alt="logo"
                        className="rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                </div>
                <div className='xl:cols-span-1 flex items-center justify-start text-center'>
                    <img
                        src="/06_Logo/image 29.png"
                        alt="logo"
                        className="rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                </div>
                <div className='xl:cols-span-1 flex items-center justify-start text-center'>
                    <img
                        src="/06_Logo/image 30.png"
                        alt="logo"
                        className="rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                </div>
                <div className=' xl:cols-span-1 flex items-center justifystartr text-center'>
                    <img
                        src="/06_Logo/image 31.png"
                        alt="logo"
                        className="rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                </div>
            </div>
            {/* MD-LG */}
            <div className='xl:hidden sm:flex hidden flex-col 3xl:pl-[220px] 2xl:pl-[150px] xl:pl-[120px] lg:pl-[140px] md:pl-[10%] sm:pl-[5%]'>
                <div className='grid grid-cols-3 w-full'>
                    <div className='xl:cols-span-1 flex items-center justify-start text-center'>
                        <img
                            src="/06_Logo/image 27.png"
                            alt="logo"
                            className="rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300"

                        />
                    </div>
                    <div className='xl:cols-span-1 flex items-center justify-start text-center'>
                        <img
                            src="/06_Logo/image 28.png"
                            alt="logo"
                            className="rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                    </div>
                    <div className='xl:cols-span-1 flex items-center justify-start text-center'>
                        <img
                            src="/06_Logo/image 29.png"
                            alt="logo"
                            className="rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                    </div>
                </div>
                <div className='grid grid-cols-2 w-full'>
                    <div className='xl:cols-span-1 flex items-center justify-center text-center'>
                        <img
                            src="/06_Logo/image 30.png"
                            alt="logo"
                            className="rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                    </div>
                    <div className='xl:cols-span-1 flex items-center justify-start text-center'>
                        <img
                            src="/06_Logo/image 31.png"
                            alt="logo"
                            className="rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                    </div>
                </div>

            </div>
            {/* MOBILE-SMALL */}
            <div className='sm:hidden flex flex-col 3xl:pl-[220px] 2xl:pl-[150px] xl:pl-[120px] lg:pl-[140px] sm:pl-[10%]'>
                <div className='grid grid-cols-2 w-full'>
                    <div className='xl:cols-span-1 flex items-center justify-center text-center'>
                        <img
                            src="/06_Logo/image 27.png"
                            alt="logo"
                            className="size-[50%] rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300"

                        />
                        </div>
                    <div className='xl:cols-span-1 flex items-center justify-start text-center'>
                        <img
                            src="/06_Logo/image 28.png"
                            alt="logo"
                            className="size-[70%] rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                            </div>
                </div>
                <div className='grid grid-cols-2 w-full'>
                    <div className='xl:cols-span-1 flex items-center justify-center text-center'>
                        <img
                            src="/06_Logo/image 29.png"
                            alt="logo"
                            className="size-[60%] rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                            </div>
                    <div className='xl:cols-span-1 flex items-center justify-center text-center py-10 pr-16'>
                        <img
                            src="/06_Logo/image 30.png"
                            alt="logo"
                            className=" rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300" />
                            </div>
                </div>
                <div className='grid grid-cols-1 w-full'>
                    <div className='xl:cols-span-1 flex items-center justify-center text-center'>
                        <img
                            src="/06_Logo/image 31.png"
                            alt="logo"
                            className="rounded-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-300" /></div>
                </div>
            </div>

        </section>

    )
}