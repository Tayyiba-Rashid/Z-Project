"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'

function Footer() {
    const { t } = useTranslation('footer')
    return (
        <section className='relative h-full overflow-hidden 3xl:px-[220px] 2xl:px-[150px] xl:px-[120px] lg:pl-[140px] lg:pr-[100px]'>
            <div className='w-full grid xl:grid-cols-3 lg:grid-cols-4 lg:grid-rows-none  grid-rows-3 lg:justify-between justify-center lg:pt-[100px]'>
                {/* 1 */}
                <div className='xl:col-span-1 lg:col-span-1 flex flex-col  lg:items-start items-center '>
                    <span className='xl:text-[44px] lg:text-[38px] sm:text-[44px] text-[38px] text-darkb lg:pb-[33px] '>Jadoo.</span>
                    <span className='xl:text-[13px] lg:text-[13px] sm:text-[13px] text-[11px] lg:text-start text-center text-lightb'>{t('tagline1')} <br />{t('tagline2')}
                    </span>
                </div>
                {/* 2 */}
                <div className='xl:col-span-1 lg:col-span-2 flex justify-between lg:px-8 xl:px-0 sm:px-0 px-4'>
                    <div>
                        <div className='text-center xl:text-[21px] lg:text-[18px] font-bold text-[#080809] xl:pb-[42px] lg:pb-[35px] pb-[20px]'>{t('company')}</div>
                        <div className='flex flex-col'>
                            <span className='text-center xl:text-[18px] sm:text-[16px] text-[13px] text-lightb pb-[16px]'>{t('company')}</span>
                            <span className='text-center xl:text-[18px] sm:text-[16px] text-[13px] text-lightb pb-[16px]'>{t('career')}</span>
                            <span className='text-center xl:text-[18px] sm:text-[16px] text-[13px] text-lightb pb-[16px]'>{t('mobile')}</span>
                        </div>
                    </div>
                    <div>
                        <div className='text-center xl:text-[21px] lg:text-[18px] font-bold text-[#080809] xl:pb-[42px] lg:pb-[35px] pb-[20px]'>{t('contact')}</div>
                        <div className='flex flex-col'>
                            <span className='text-center xl:text-[18px] sm:text-[16px] text-[13px] text-lightb pb-[16px]'>{t('faq')}</span>
                            <span className='text-center xl:text-[18px] sm:text-[16px] text-[13px] text-lightb pb-[16px]'>{t('press')}</span>
                            <span className='text-center xl:text-[18px] sm:text-[16px] text-[13px] text-lightb pb-[16px]'>{t('affiliates')}</span>
                        </div>
                    </div>
                    <div>
                        <div className='text-center xl:text-[21px] lg:text-[18px] font-bold text-[#080809] xl:pb-[42px] lg:pb-[35px] pb-[20px]'>{t('more')}</div>
                        <div className='flex flex-col'>
                            <span className='text-center xl:text-[18px] sm:text-[16px] text-[13px] text-lightb pb-[16px]'>{t('airline_fees')}</span>
                            <span className='text-center xl:text-[18px] sm:text-[16px] text-[13px] text-lightb pb-[16px]'>{t('airline')}</span>
                            <span className='text-center xl:text-[18px] sm:text-[16px] text-[13px] text-lightb pb-[16px]'>{t('low_fare_tips')}</span>
                        </div>
                    </div>

                </div>
                {/* 3 */}
                <div className='xl:col-span-1 lg:col-span-1 flex flex-col items-end '>
                    <div className=' lg:items-start items-center flex flex-col '>
                        <div className='flex justify-start'>
                            <div className=''>
                                <img
                                    src="/08_Footer/FB.png"
                                    alt="logo"
                                />
                            </div>
                            <div className=''>
                                <img
                                    src="/08_Footer/IG.png"
                                    alt="logo"
                                />
                            </div>
                            <div className=''>
                                <img
                                    src="/08_Footer/X.png"
                                    alt="logo"
                                    className=''
                                />
                            </div>
                        </div>
                        <div className='flex justify-start text-start sm:text-[20px] text-[17px] text-lightb lg:pl-8'>{t('discover_app')}</div>
                        <div className='flex justify-start  text-start pt-[20px] lg:pl-7'>
                            <div>
                                <img
                                    src="/08_Footer/Google Play.png"
                                    alt="logo"
                                    className='pr-2'
                                />
                            </div>
                            <div>
                                <img
                                    src="/08_Footer/Play Store.png"
                                    alt="logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full text-center sm:text-[16px] text-[12px] text-lightb xl:pt-[105px] lg:pt-[50px] pt-[50px] xl:pb-[79px] lg:pb-[50px] pb-[25px]'>{t('footer')}</div>
            <div className='absolute bottom-[-45%] right-[-15%] -z-10'>
                <img
                    src="/08_Footer/Decore.png"
                    alt="logo"
                    className='size-[480px]'
                />
            </div>
        </section>
    )
}

export default Footer