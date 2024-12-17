'use client'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
function Services() {
  const { t } = useTranslation('services')

  return (
    <section className="h-auto relative overflow-hidden pb-10 ">
      {/* Background Image */}
      <div className="absolute -z-10 top-0 right-0 max-w-[200px] lg:max-w-[300px] mt-10 mr-10">
        <Image
          src={"/02_Services/Group 4.png"}
          width={300}
          height={300}
          alt="Decorative background"
          className='2xl:block hidden'
        />
        <Image
          src={"/02_Services/Group 4.png"}
          width={137}
          height={300}
          alt="Decorative background"
          className='2xl:hidden xl:block hidden'
        />
        <Image
          src={"/02_Services/Group 4.png"}
          width={100}
          height={300}
          alt="Decorative background"
          className='xl:hidden block'
        />
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center 3xl:pt-[112px] 2xl:pt-[104px] xl:pt-[70px] sm:pt-[50px] pt-[70px]">
        <div className="2xl:text-[18px] xl:text-[16px] sm:text-[14px] text-[12px] text-[#5E6282] lg:pb-3">
          {t('category')}
        </div>
        <div className="2xl:text-[50px] xl:text-[40px] sm:text-[30px] text-[25px] font-bold text-[#14183E]">{t('services')}</div>
      </div>

      {/* Cards Grid */}
      <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-20 md:gap-y-10 gap-y-12 2xl:gap-x-64 justify-items-center items-start 3xl:px-[185px] 2xl:px-[170px] xl:px-[50px] lg:px-[35px] md:px-[50px] px-[25px]  relative 3xl:pt-[81px] 2xl:pt-[68px] lg:pt-[56px] pt-[30px] ">
        {/* Card 1 */}
        <div className="col-span-1 bg-white relative group 3xl:w-[357px] 3xl:h-[383px] 2xl:w-[288px] 2xl:h-[314px] xl:w-[238px] xl:h-[299px] md:w-[190px] md:h-[297px] w-[190px] h-[200px]  flex flex-col items-center justify-center rounded-3xl hover:shadow-lg hover:-top-1  cursor-pointer ">
          <div>
            <Image
              className='md:block hidden'
              src="/02_Services/Group 48.png"
              alt="Descriptive text for the image"
              width={92}
              height={78}
            />
            <Image
              className='md:hidden block '
              src="/02_Services/Group 48.png"
              alt="Descriptive text for the image"
              width={72}
              height={78}
            />
          </div>
          <div className="mt-2 text-center font-semibold text-darkb md:text-[16px] text-[14px]">{t('weather')}</div>
          <div className="mt-1 text-sm text-center text-lightb w-3/4 md:text-[14px] text-[10px]">
          {t('wicket')}
          </div>
          <div className="absolute xl:-left-9  xl:-bottom-9 lg:-left-5 lg:-bottom-5 sm:-left-7 sm:-bottom-7 -left-5 -bottom-5 opacity-0 group-hover:opacity-100  -z-10 transition-opacity duration-300 ">
            <Image
              className='xl:block hidden'
              src="/02_Services/Rectangle 157.png"
              alt="Descriptive text for the image"
              width={92}
              height={78}
            />
            <Image
              className='xl:hidden sm:block hidden'
              src="/02_Services/Rectangle 157.png"
              alt="Descriptive text for the image"
              width={73}
              height={94}
            />
            <Image
              className='sm:hidden block'
              src="/02_Services/Rectangle 157.png"
              alt="Descriptive text for the image"
              width={65}
              height={94}
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-span-1 bg-white relative group 3xl:w-[357px] 3xl:h-[383px] 2xl:w-[288px] 2xl:h-[314px] xl:w-[238px] xl:h-[299px] md:w-[190px] md:h-[297px] w-[190px] h-[200px]  flex flex-col items-center justify-center rounded-3xl hover:shadow-lg hover:-top-1  cursor-pointer ">
          <div>

            <Image
              className='md:block hidden'
              src="/02_Services/Group 51.png"
              alt="Descriptive text for the image"
              width={92}
              height={78}
            />
            <Image
              className='md:hidden block '
              src="/02_Services/Group 51.png"
              alt="Descriptive text for the image"
              width={72}
              height={78}
            />

          </div>
          <div className="mt-2 text-center font-semibold text-darkb md:text-[16px] text-[14px]"> {t('best_flights')}</div>
          <div className="mt-1 text-sm text-center text-lightb w-3/4  md:text-[14px] text-[10px]">
          {t('listening')}
          </div>
          <div className="absolute xl:-left-9  xl:-bottom-9 lg:-left-5 lg:-bottom-5 sm:-left-7 sm:-bottom-7 -left-5 -bottom-5 opacity-0 group-hover:opacity-100  -z-10 transition-opacity duration-300 ">
            <Image
              className='xl:block hidden'
              src="/02_Services/Rectangle 157.png"
              alt="Descriptive text for the image"
              width={92}
              height={78}
            />
            <Image
              className='xl:hidden sm:block hidden'
              src="/02_Services/Rectangle 157.png"
              alt="Descriptive text for the image"
              width={73}
              height={94}
            />
            <Image
              className='sm:hidden block'
              src="/02_Services/Rectangle 157.png"
              alt="Descriptive text for the image"
              width={65}
              height={94}
            />
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-span-1 bg-white relative group 3xl:w-[357px] 3xl:h-[383px] 2xl:w-[288px] 2xl:h-[314px] xl:w-[238px] xl:h-[299px] md:w-[190px] md:h-[297px] w-[190px] h-[200px]  flex flex-col items-center justify-center rounded-3xl hover:shadow-lg hover:-top-1  cursor-pointer ">
          <div>

            <Image
              className='md:block hidden'
              src="/02_Services/Group 50.png"
              alt="Descriptive text for the image"
              width={92}
              height={78}
            />
            <Image
              className='md:hidden block '
              src="/02_Services/Group 50.png"
              alt="Descriptive text for the image"
              width={72}
              height={78}
            />
          </div>
          <div className="mt-2 text-center font-semibold text-darkb md:text-[16px] text-[14px]">{t('local_events')}</div>
          <div className="mt-1 text-sm text-center text-lightb w-3/4  md:text-[14px] text-[10px]">
          {t('barton')}
          </div>
          <div className="absolute xl:-left-9  xl:-bottom-9 lg:-left-5 lg:-bottom-5 sm:-left-7 sm:-bottom-7 -left-5 -bottom-5 opacity-0 group-hover:opacity-100  -z-10 transition-opacity duration-300 ">
            <Image
              className='xl:block hidden'
              src="/02_Services/Rectangle 157.png"
              alt="Descriptive text for the image"
              width={92}
              height={78}
            />
            <Image
              className='xl:hidden sm:block hidden'
              src="/02_Services/Rectangle 157.png"
              alt="Descriptive text for the image"
              width={73}
              height={94}
            />
            <Image
              className='sm:hidden block'
              src="/02_Services/Rectangle 157.png"
              alt="Descriptive text for the image"
              width={65}
              height={94}
            />
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-span-1 bg-white relative group 3xl:w-[357px] 3xl:h-[383px] 2xl:w-[288px] 2xl:h-[314px] xl:w-[238px] xl:h-[299px] md:w-[190px] md:h-[297px] w-[190px] h-[200px]  flex flex-col items-center justify-center rounded-3xl hover:shadow-lg hover:-top-1  cursor-pointer ">
          <div>
            <Image
              className='md:block hidden'
              src="/02_Services/Group 49.png"
              alt="Descriptive text for the image"
              width={92}
              height={78}
            />
            <Image
              className='md:hidden block '
              src="/02_Services/Group 49.png"
              alt="Descriptive text for the image"
              width={72}
              height={78}
            />
          </div>
          <div className="mt-2 text-center font-semibold text-darkb md:text-[16px] text-[14px]">{t('customization')}</div>
          <div className="mt-1 text-sm text-center text-lightb w-3/4  md:text-[14px] text-[10px]">
          {t('aviation_services')}
          </div>
          <div className="absolute xl:-left-9  xl:-bottom-9 lg:-left-5 lg:-bottom-5 sm:-left-7 sm:-bottom-7 -left-5 -bottom-5 opacity-0 group-hover:opacity-100  -z-10 transition-opacity duration-300 ">
            <Image
              className='xl:block hidden'
              src="/02_Services/Rectangle 157.png"
              alt="Descriptive text for the image"
              width={92}
              height={78}
            />
            <Image
              className='xl:hidden sm:block hidden'
              src="/02_Services/Rectangle 157.png"
              alt="Descriptive text for the image"
              width={73}
              height={94}
            />
            <Image
              className='sm:hidden block'
              src="/02_Services/Rectangle 157.png"
              alt="Descriptive text for the image"
              width={65}
              height={94}
            />
          </div>
        </div>
      </div>
    </section>

  )
}
export default Services