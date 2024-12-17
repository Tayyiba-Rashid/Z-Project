"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function Testimonials() {
    const { t } = useTranslation('testimonials')
    const testimonials = t('testimonials', { returnObjects: true })
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const activeTestimonial = testimonials[currentTestimonial];
    console.log("testimonials:", testimonials);

    const handleSelect = (index) => {
        setCurrentTestimonial(index);
    };

    const handleNext = () => {
        if (currentTestimonial < testimonials.length - 1) {
            setCurrentTestimonial(currentTestimonial + 1)
        }
    }

    const handlePrev = () => {
        if (currentTestimonial > 0) {
            setCurrentTestimonial(currentTestimonial - 1)
        }
    }

    return (

        <section className='h-full grid lg:grid-cols-2  pt-[234px] mb-52'>
            {/* col 1 */}
            <div className='col-span-1 grid-rows-6 h-full flex flex-col justify-between 3xl:pl-[220px] 2xl:pl-[150px] xl:pl-[120px] lg:pl-[140px]'>
                <div>
                    <div className='2xl:text-[18px] sm:text-[14px] text-[12px] text-lightb lg:text-start text-center'>
                        {/* Testimonials */}
                        {t('title')}
                    </div>
                    <div className='2xl:text-[50px] xl:text-[40px] sm:text-[30px] text-[25px] lg:text-start text-center text-darkb font-bold pb-10'>
                        {t('what_people_say')}
                        {/* What People Say  */}
                        <br />
                        {t('about_us')}
                        {/* About Us. */}
                    </div>
                </div>
                <div className='lg:block hidden'>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(index)}
                            className={`2xl:size-3 size-[10px] rounded-full xl:mr-7 mr-6
                            ${currentTestimonial == index
                                    ? "bg-darkb"
                                    : "bg-[#E5E5E5]"
                                }
                            bg-[#E5E5E5]`}></button>
                    ))}
                </div>

            </div>
            {/* col 2 */}
            <div className='flex w-full justify-center items-center pl-[5%]'>
                {/* Test1 */}
                <div className='relative w-[70%] lg:h-[300px] h-[250px] bg-white rounded-xl shadow-lg p-10'>
                    <div className='absolute top-[-12%] left-[-5%]'>
                        <img
                            src={activeTestimonial.image}
                            alt="Trip to Greece"
                            className="xl:size-[68px] lg:size-14 sm:size-[50px] size-[50px] rounded-full object-cover"
                        />
                    </div>
                    <div className='flex flex-col justify-between h-full'>
                        <div className=" text-[#84829A] 2xl:text-[16px] xl:text-[14px] sm:text-[10px] text-[9px] sm:leading-8 leading-4">{activeTestimonial.quote}</div>
                        <div className='flex flex-col '>
                            <span className='2xl:text-[18px] xl:text-[16px] sm:text-[12px] text-[9.5px] text-lightb'>{activeTestimonial.name}</span>
                            <span className='2xl:text-[16px] xl:text-[14px] sm:text-[10px] text-[9px]  text-lightb'>{activeTestimonial.location}</span>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[30%] w-[10%] flex flex-col h-[30%] justify-between sm:items-center items-end'>
                    <button

                        onClick={handlePrev}
                        disabled={currentTestimonial === 0}
                        type='button'
                        className={`${currentTestimonial === 0
                            ? "opacity-50"
                            : ""
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="2xl:size-8 xl:size-7 lg:size-6 sm:size-5 size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentTestimonial === testimonials.length - 1}
                        type='button'
                        className={`${currentTestimonial === testimonials.length - 1
                            ? "opacity-50"
                            : ""
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="2xl:size-8 xl:size-7 lg:size-6 sm:size-5 size-4 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='lg:hidden flex w-full h-auto justify-center pt-[5%]'>
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelect(index)}
                        className={`2xl:size-3 size-[10px] rounded-full xl:mr-7 mr-6
                            ${currentTestimonial == index
                                ? "bg-darkb"
                                : "bg-[#E5E5E5]"
                            }
                            bg-[#E5E5E5]`}>
                    </button>
                ))}
            </div>
        </section>
    );
}



export default Testimonials