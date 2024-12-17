"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';
import { FiMail } from 'react-icons/fi';

function Subscription() {
    const { t } = useTranslation('subscription')
    return (
        <section className='h-full py-[100px] overflow-hidden'>
            <div className=' w-full flex justify-center'>
                <div className='relative w-4/5 bg-[#DFD7F9] lg:rounded-tl-[200px] rounded-tl-[150px] bg-opacity-20 flex flex-col items-center justify-evenly 2xl:h-[496px] lg:h-[400px] sm:h-[350px] h-[496px]'>

                    <div className='lg:text-[27px] 2xl:text-[33px] font-normal sm:font-normal text-lightb text-center sm:w-full w-2/3  z-10'>
                        {t('subscribe1')}
                        <br className='sm:block hidden' />
                        {t('subscribe2')}
                    </div>
                    <div className="flex lg:flex-row flex-col items-center justify-center 2xl:h-[83px] lg:h-[60px] w-full z-10">
                        {/* Email Input Section */}
                        <div className="flex items-center lg:w-2/5 sm:w-2/3 w-4/5 mb-5 lg:mb-0 px-4 py-3 h-full bg-white rounded-l-lg border-none shadow-sm">
                            <FiMail className="text-gray-400 mr-3 size-8" />
                            <input
                                type="email"
                                placeholder={t('placeholder')}
                                className="w-full text-gray-600 placeholder-gray-400 focus:outline-none text-[14px]"
                            />
                        </div>

                        {/* Subscribe Button */}
                        <button className="bg-[#FF946D] hover:bg-[#ff6d38] w-[241px] h-full text-white text-[17px] lg:ml-4 px-6 py-3 rounded-lg font-bold">
                            {t('button')}
                        </button>
                    </div>
                    {/* left IMAGE */}
                    <div className='absolute bottom-0 left-0'>
                        <img
                            src="/07_Subscription/cut-left.png"
                            alt="logo"
                            className='2xl:w-[530px] size-auto opacity-10 pl-[5%]'
                        />
                    </div>
                    {/* right IMAGE */}
                    <div className='absolute top-0 right-0'>
                        <img
                            src="/07_Subscription/cut-right.png"
                            alt="logo"
                            className='2xl:w-[269px] size-auto h-[334px] opacity-10'
                        />
                    </div>
                    {/* Icon */}
                    <div className='absolute top-[-5%] right-[-1%]'>
                        <img
                            src="/07_Subscription/Group 77.png"
                            alt="logo"
                            className='sm:size-[90px]  size-[70px]'
                        />
                    </div>
                    {/* OUTER IMAGE */}
                    <div className='absolute -bottom-20 -right-24 -z-10'>
                        <img
                            src="/07_Subscription/Group 5.png"
                            alt="image"
                            className='size-auto w-[153px] h-[166px] '
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Subscription