"use client"
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

function Destinations() {
    const { t } = useTranslation('destinations')
    return (
        <section className='h-full overflow-hidden pb-4'>
            <>
                <div className="flex flex-col items-center justify-center text-center 3xl:pt-[112px] 2xl:pt-[104px] xl:pt-[70px] sm:pt-[50px] pt-[70px]">
                    <div className="2xl:text-[18px] xl:text-[16px] sm:text-[14px] text-[12px] text-[#5E6282] lg:pb-3">{t('top_selling')}</div>
                    <div className="2xl:text-[50px] xl:text-[40px] sm:text-[30px] text-[25px] font-bold text-[#14183E]">{t('top_destinations')}</div>
                </div>
                {/* CARD */}
                <div className=" flex sm:flex-row flex-col justify-center items-center xl:px-[50px] lg:px-[35px] md:px-[50px] px-[25px]  relative 3xl:pt-[150px] 2xl:pt-[68px] lg:pt-[56px] pt-[30px] 3xl:gap-x-28 2xl:gap-x-36 xl:gap-x-14 lg:gap-x-[85px] md:gap-x-5 sm:gap-x-3 sm:gap-y-0 gap-y-8">
                    {/* card 1 */}
                    <div className="relative flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border rounded-3xl 3xl:w-[421px] 3xl:h-[612px]  hover:shadow-xl hover:bottom-1 hover:transition-bottom">
                        <div className="relative text-gray-700 bg-clip-border rounded-2xl ">
                            <Image
                                src="/03_Destinatos/Rectangle 1.png"
                                alt="card-image"
                                width={421}
                                height={612}
                                className="rounded-3xl 3xl:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 1.png"
                                alt="card-image"
                                width={314}
                                height={457}
                                className="rounded-3xl 3xl:hidden 2xl:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 1.png"
                                alt="card-image"
                                width={301}
                                height={336}
                                className="rounded-3xl 2xl:hidden xl:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 1.png"
                                alt="card-image"
                                width={224}
                                height={326}
                                className="rounded-3xl xl:hidden lg:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 1.png"
                                alt="card-image"
                                width={200}
                                height={290}
                                className="rounded-3xl lg:hidden md:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 1.png"
                                alt="card-image"
                                width={168}
                                height={245}
                                className="rounded-3xl md:hidden sm:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 1.png"
                                alt="card-image"
                                width={200}
                                height={290}
                                className="rounded-3xl sm:hidden block"
                            />

                        </div>
                        <div className="md:p-6 py-2 px-4 bg-white absolute bottom-0 left-0 right-0 rounded-b-xl">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base md:eading-relaxed text-lightb xl:text-[18px] md:text-[14px] sm:text-[11px]">
                                {t('italy.destination')}
                                </p>
                                <p className="block font-sans text-base leading-relaxed text-lightb xl:text-[18px] md:text-[14px] sm:text-[11px]">
                                {t('italy.price')}
                                </p>
                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <span className='pr-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.25" height="16.25" viewBox="0 0 16.25 16.25" className='md:size-4 size-3'>
                                        <g id="Navigation" transform="translate(-1.875 -1.875)">
                                            <path id="Vector" d="M16.194.886l-6.875,15a.625.625,0,0,1-1.191-.208L7.546,8.7.573,8.123A.625.625,0,0,1,.365,6.932l15-6.875a.625.625,0,0,1,.829.829Z" transform="translate(1.875 1.875)" fill="#080809" />
                                        </g>
                                    </svg>

                                </span>
                                <p className="block font-sans text-sm leading-normal text-lightb xl:text-[18px] md:text-[14px] sm:text-[11px]">
                                {t('italy.duration')}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="relative flex  flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-3xl 3xl:w-[421px] 3xl:h-[612px]  hover:shadow-xl hover:bottom-1 hover:transition-bottom">
                        <div className="relative text-gray-700 bg-clip-border rounded-2xl ">
                            <Image
                                src="/03_Destinatos/UK.png"
                                alt="card-image"
                                width={420}
                                height={612}
                                className="rounded-3xl 3xl:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 14.png"
                                alt="card-image"
                                width={314}
                                height={457}
                                className="rounded-3xl 3xl:hidden 2xl:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 14.png"
                                alt="card-image"
                                width={301}
                                height={336}
                                className="rounded-3xl 2xl:hidden xl:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 14.png"
                                alt="card-image"
                                width={224}
                                height={326}
                                className="rounded-3xl xl:hidden lg:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 14.png"
                                alt="card-image"
                                width={200}
                                height={290}
                                className="rounded-3xl lg:hidden md:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 14.png"
                                alt="card-image"
                                width={168}
                                height={245}
                                className="rounded-3xl md:hidden sm:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 14.png"
                                alt="card-image"
                                width={200}
                                height={290}
                                className="rounded-3xl sm:hidden block"
                            />
                        </div>
                        <div className="md:p-6 py-2 px-4 bg-white absolute bottom-0 left-0 right-0 rounded-b-xl">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base md:eading-relaxed text-lightb xl:text-[18px] md:text-[14px] sm:text-[11px]">
                                {t('uk.destination')}
                                </p>
                                <p className="block font-sans text-base leading-relaxed text-lightb xl:text-[18px] md:text-[14px] sm:text-[11px]">
                                {t('uk.price')}
                                </p>
                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <span className='pr-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.25" height="16.25" viewBox="0 0 16.25 16.25" className='md:size-4 size-3'>
                                        <g id="Navigation" transform="translate(-1.875 -1.875)">
                                            <path id="Vector" d="M16.194.886l-6.875,15a.625.625,0,0,1-1.191-.208L7.546,8.7.573,8.123A.625.625,0,0,1,.365,6.932l15-6.875a.625.625,0,0,1,.829.829Z" transform="translate(1.875 1.875)" fill="#080809" />
                                        </g>
                                    </svg>

                                </span>
                                <p className="block font-sans text-sm leading-normal text-lightb xl:text-[18px] md:text-[14px] sm:text-[11px]">
                                {t('uk.duration')}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-3xl 3xl:w-[421px] 3xl:h-[612px]  hover:shadow-xl hover:bottom-1 hover:transition-bottom">
                        <div className="relative text-gray-700 bg-clip-border rounded-2xl ">
                            <Image
                                src="/03_Destinatos/italy.png"
                                alt="card-image"
                                width={420}
                                height={612}
                                className="rounded-3xl 3xl:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 14 2.png"
                                alt="card-image"
                                width={314}
                                height={457}
                                className="rounded-3xl 3xl:hidden 2xl:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 14 2.png"
                                alt="card-image"
                                width={301}
                                height={336}
                                className="rounded-3xl 2xl:hidden xl:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 14 2.png"
                                alt="card-image"
                                width={224}
                                height={326}
                                className="rounded-3xl xl:hidden lg:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 14 2.png"
                                alt="card-image"
                                width={200}
                                height={290}
                                className="rounded-3xl lg:hidden md:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 14 2.png"
                                alt="card-image"
                                width={168}
                                height={245}
                                className="rounded-3xl md:hidden sm:block hidden  "
                            />
                            <Image
                                src="/03_Destinatos/Rectangle 14 2.png"
                                alt="card-image"
                                width={200}
                                height={290}
                                className="rounded-3xl sm:hidden block"
                            />
                        </div>
                        <div className="md:p-6 py-2 px-4 bg-white absolute bottom-0 left-0 right-0 rounded-b-xl">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base md:eading-relaxed text-lightb xl:text-[18px] md:text-[14px] sm:text-[11px]">
                                {t('europe.destination')}
                                </p>
                                <p className="block font-sans text-base leading-relaxed text-lightb xl:text-[18px] md:text-[14px] sm:text-[11px]">
                                {t('europe.price')}
                                </p>
                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <span className='pr-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.25" height="16.25" viewBox="0 0 16.25 16.25" className='md:size-4 size-3'>
                                        <g id="Navigation" transform="translate(-1.875 -1.875)">
                                            <path id="Vector" d="M16.194.886l-6.875,15a.625.625,0,0,1-1.191-.208L7.546,8.7.573,8.123A.625.625,0,0,1,.365,6.932l15-6.875a.625.625,0,0,1,.829.829Z" transform="translate(1.875 1.875)" fill="#080809" />
                                        </g>
                                    </svg>

                                </span>
                                <p className="block font-sans text-sm leading-normal text-lightb xl:text-[18px] md:text-[14px] sm:text-[11px]">
                                {t('europe.duration')}
                                </p>
                            </div>
                        </div>
                        <Image
                            src="/03_Destinatos/Decore.png"
                            alt="card-image"
                            width={128}
                            height={370}
                            className="absolute w-auto h-auto bottom-8 -right-[15%] -z-10 xl:block hidden"
                        />
                        <Image
                            src="/03_Destinatos/Decore.png"
                            alt="card-image"
                            width={70}
                            height={240}
                            className="absolute w-auto h-auto bottom-8 -right-[20%] -z-10 xl:hidden lg:block hidden"
                        />
                    </div>
                </div>



            </>


        </section>
    )
}

export default Destinations