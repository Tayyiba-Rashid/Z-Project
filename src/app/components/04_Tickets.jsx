"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'

function Tickets() {
    const { t } = useTranslation('tickets')
    return (
        <section className='h-full grid lg:grid-cols-2 2xl:pt-[180px] lg:pt-[165px] md:pt-[150px] sm:pt-[90px] pb-10 overflow-hidden'>
            {/* Col 1 */}
            <div className='col-span-1  3xl:pl-[220px] 2xl:pl-[150px] xl:pl-[120px] lg:pl-[140px] flex flex-col justify-evenly lg:items-start items-center'>
                <div className='2xl:text-[18px] sm:text-[14px] text-[12px] text-lightb'>{t('easy_steps') || 'Easy and Fast'} </div>
                <div className='2xl:text-[50px] xl:text-[40px] sm:text-[30px] text-[25px] lg:text-start text-center text-darkb font-bold pb-10'>
                    {/* Book Your Next Trip In */}
                    {t('title1')}
                    <br />
                    {t('title2')}
                     {/* 3 Easy Steps */}
                     </div>
                <div className='flex flex-col justify-evenly sm:px-0 px-10'>
                    {/* 1 */}
                    <div className="flex h-full">
                        <div className="h-full flex items-center justify-center pr-[21px]">
                            <img
                                src="/04_Tickets.jsx/Group 71.png"
                                alt="Trip to Greece"
                                className="2xl:w-[60px] 2xl:h-[59px] xl:w-[80px] xl:h-[60px] lg:w-[80px] lg:h-[57px] sm:w-[50px] sm:h-[50px] w-[100px] rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center  ">
                            <span className='xl:text-[16px] text-[14px] font-bold text-lightb'>
                                {t('step_1.title')}
                                </span>
                            <span className='xl:text-[16px] text-[14px] text-lightb'>
                                {t('step_1.description')}
                            </span>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="flex h-full py-[48px] ">
                        <div className="h-full flex items-center justify-center pr-[21px]">
                            <img
                                src="/04_Tickets.jsx/Group 12.png"
                                alt="Trip to Greece"
                                className="2xl:w-[60px] 2xl:h-[59px] xl:w-[80px] xl:h-[60px] lg:w-[80px] lg:h-[57px] sm:w-[50px] sm:h-[50px] w-[100px] rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className='xl:text-[16px] text-[14px] font-bold text-lightb'>
                            {t('step_2.title')}
                            </span>
                            <span className='xl:text-[16px] text-[14px] text-lightb'>
                            {t('step_2.description')}
                            </span>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="flex h-full">
                        <div className="h-full flex items-center justify-center pr-[21px]">
                            <img
                                src="/04_Tickets.jsx/Group 111.png"
                                alt="Trip to Greece"
                                className="2xl:w-[60px] 2xl:h-[59px] xl:w-[80px] xl:h-[60px] lg:w-[80px] lg:h-[57px] sm:w-[50px] sm:h-[50px] w-[100px] rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className='xl:text-[16px] text-[14px] font-bold text-lightb'>
                            {t('step_3.title')}
                            </span>
                            <span className='xl:text-[16px] text-[14px] text-lightb'>
                            {t('step_3.description')}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
            {/* Col 2 */}
            <div className="relative col-span-1 flex sm:justify-center justify-start 3xl:pr-0 2xl:pr-40 xl:pr-40 lg:pr-48 sm:pl-0 pl-[10%]">
                {/* TRIP TO GREECE */}
                <div className="relative bg-white mt-10 rounded-3xl shadow-lg p-4 flex flex-col items-center 2xl:w-[493px] 2xl:h-[488px] xl:w-[410px] xl:h-[400px] sm:w-[320px] sm:h-[350px] w-[250px] h-[300px]">
                    <div className="absolute -top-[10%] -right-[30%] -z-10">
                        <img
                            src="/04_Tickets.jsx/Group 589.png"
                            alt="Trip to Greece"
                            className="w-[500px] h-[350px] rounded-lg object-cover"
                        />
                    </div>

                    {/* Image */}
                    <img
                        src="/04_Tickets.jsx/Rectangle 17.png"
                        alt="Trip to Greece"
                        className="2xl:w-[420px] 2xl:h-[211px] xl:w-[360px] xl:h-[180px] w-[280px] h-[140px] rounded-lg object-cover"
                    />
                    {/* Content */}
                    <div className="mt-4 w-full h-full sm:px-4 flex flex-col justify-evenly">
                        <h2 className="text-lg 2xl:text-[18px] xl:text-[16px] sm:text-[12px] text-[9.5px]">
                            {t('trip_to_greece.title')}
                        </h2>
                        <p className="text-sm text-[#84829A] 2xl:text-[16px] xl:text-[14px] sm:text-[10px] text-[9px]">
                        {t('trip_to_greece.date')}
                        </p>
                        {/* Icons Section */}
                        <div className="flex items-center mt-3 space-x-2">
                            <button className="p-2 bg-gray-100 rounded-full">
                                <img
                                    src="/04_Tickets.jsx/LEAF.png"
                                    alt="Trip to Greece"
                                    className="2xl:h-[48px] 2xl:w-[48px] xl:h-[40px] xl:w-[40px] sm:h-[30px] sm:w-[30px] h-[20px] w-[20px]  rounded-lg object-cover"
                                />
                            </button>
                            <button className="p-2 bg-gray-100 rounded-full">
                                <img
                                    src="/04_Tickets.jsx/map icon.png"
                                    alt="Trip to Greece"
                                    className="2xl:h-[48px] 2xl:w-[48px] xl:h-[40px] xl:w-[40px] sm:h-[30px] sm:w-[30px] h-[20px] w-[20px]rounded-lg object-cover"
                                />
                            </button>
                            <button className="p-2 bg-gray-100 rounded-full">
                                <img
                                    src="/04_Tickets.jsx/send.png"
                                    alt="Trip to Greece"
                                    className="2xl:h-[48px] 2xl:w-[48px] xl:h-[40px] xl:w-[40px] sm:h-[30px] sm:w-[30px] h-[20px] w-[20px] rounded-lg object-cover"
                                />
                            </button>
                        </div>
                        {/* Footer */}
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex items-center">
                                <span>
                                    <img
                                        src="/04_Tickets.jsx/building 1.png"
                                        alt="Trip to Greece"
                                        className="2xl:h-[20px] 2xl:w-[22px] xl:h-[18px] xl:w-[20px] h-[14px] w-[16px] rounded-lg object-cover"
                                    />
                                </span>
                                <span className="text-sm text-[#84829A] 2xl:text-[16px] xl:text-[14px] sm:text-[10px] text-[9px]">
                                    {/* 24 people going */}
                                    {t('trip_to_greece.status')}
                                </span>
                            </div>
                            <button className="p-2 rounded-full">
                                <img
                                    src="/04_Tickets.jsx/heart (6) 1.png"
                                    alt="Trip to Greece"
                                    className="2xl:h-[23px] 2xl:w-[27px] xl:h-[20px] xl:w-[24px] sm:h-[18px] sm:w-[20px] w-[10px] h-[10px] rounded-lg object-cover"
                                />
                            </button>
                        </div>
                    </div>
                    {/* TRIP TO ROME */}
                    <div className="absolute bottom-[15%] 2xl:right-[-20%] xl:right-[-25%] sm:right-[-30%] right-[-20%] bg-white rounded-lg shadow-lg 2xl:p-4 p-2 2xl:w-72 2xl:h-[129px] xl:w-64 xl:h-[120px] sm:w-48 sm:h-[100px] w-36 h-[60px]">
                        {/* Header */}
                        <div className="flex items-center space-x-2">
                            <img
                                src="/04_Tickets.jsx/Mask Group.png"
                                alt="Trip to Rome"
                                className="2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 w-6 h-6 rounded-full object-cover"
                            />
                            <div>
                                <p className=" text-[#84829A] 2xl:text-[14px] xl:text-[12px] sm:text-[10px] text-[7px] leading-normal ">
                                {t('trip_to_rome.status')}
                                    {/* Ongoing */}
                                    </p>
                                <p className="2xl:text-[16px] xl:text-[14px] sm:text-[10px] text-[8px] sm:leading-normal leading-none">
                                {t('trip_to_rome.title')}
                                    {/* Trip to Rome */}
                                    </p>
                            </div>
                        </div>
                        {/* Progress */}
                        <div className="2xl:mt-4 xl:mt-2 mt-1">
                            <p className="text-[#84829A] 2xl:text-[14px] xl:text-[12px] sm:text-[10px] text-[7px] sm:leading-normal leading-none">
                            {t('trip_to_rome.progress')}
                                {/* <span>40% </span>completed */}
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                                <div
                                    className="bg-purple-600 h-1 rounded-full"
                                    style={{ width: "40%" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Tickets