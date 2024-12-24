'use client'
import React, { useRef, useState } from 'react'

function Index() {
  const [fileName, setFileName] = useState([])
  const fileInput = useRef(null)

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setFileName(files)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="border bg-gray-600 text-white rounded-2xl px-6 py-2"
      >
        Upload File
      </button>

      <input
        multiple
        type="file"
        className="hidden"
        ref={fileInput}
        onChange={handleFileChange}
      />

      <div className="flex flex-col mt-4">
        {fileName.length > 0 ? (
          fileName.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border-b pb-2 mb-2"
            >
              <span>{file.name}</span>

            </div>
          ))
        ) : (
          <div className="text-gray-500">No file available</div>
        )}
      </div>

      <div className='relative'>
        <div
          // ref={ref}
          className='absolute  border-none
          3xl:left-[157px] 2xl:left-[126px] xl:left-[105px] lg:left-[84px] md:left-[102px] sm:left-[70px] left-[15%] 3xl:w-[314px] 3xl:h-[489px] 2xl:w-[250px] 2xl:h-[391px]  xl:h-[326px] lg:h-[335px] md:h-[454px] sm:h-[330px]  w-[207px] h-[54%] rounded-2xl bg-transparent'>
          <div className='relative h-full w-full'>
            {/* left */}
            <div className='absolute top-0 left-0 w-1/3 h-1/5 rounded-tl-2xl'>
              {/* UPLOAD ICON */}
              <input
                multiple
                type="file"
                className='hidden'
                ref={fileInput}
                onChange={handleFileChange} />
              <div onClick={handleClick}
                className='bg-white h-full w-full flex items-center justify-center'>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="67.557"
                  height="67.557"
                  viewBox="0 0 67.557 67.557"
                >
                  <path
                    id="Path_27378"
                    data-name="Path 27378"
                    d="M369.266,311H339.241V280.978h-7.506V311H301.709v7.506h30.025v30.025h7.506V318.51h30.025Z"
                    transform="translate(-301.709 -280.978)"
                  />
                </svg>
              </div>
            </div>
            {/* right */}
            <div className='absolute bg-black top-0 right-0 w-2/3 h-1/5 rounded-tr-2xl'>
              <div className='relative h-full w-full text-white'>
                {/* top text */}
                <div className='pl-2 text-white w-full h-full flex flex-col justify-center items-start'>
                  <div className='text-[14px]'>UPLOAD FILES</div>
                  <div className='text-[40px]'>OR</div>

                </div>
                {/* LOCK */}
                <div className='absolute top-0 right-0  pt-[21px] pr-[18px]'>
                  <svg
                    className='2xl:w-[12.18px] 2xl:h-[15.5px] xl:w-[8.12px] xl:h-[10.33px] w-[8px] h-[10px]'
                    xmlns="http://www.w3.org/2000/svg" width="12.176" height="15.496" viewBox="0 0 12.176 15.496">
                    <path id="Path_27800" data-name="Path 27800" d="M70.088-30.72a4.135,4.135,0,0,0-3.874,4.339v1.24H65.107A1.179,1.179,0,0,0,64-23.9v7.438a1.179,1.179,0,0,0,1.107,1.24h9.962a1.179,1.179,0,0,0,1.107-1.24V-23.9a1.179,1.179,0,0,0-1.107-1.24H73.962v-1.24a4.137,4.137,0,0,0-3.677-4.294A.5.5,0,0,0,70.088-30.72Zm0,1.24a2.938,2.938,0,0,1,2.767,3.1v1.24H67.321v-1.24A2.938,2.938,0,0,1,70.088-29.48Z" transform="translate(-64 30.72)" fill="#fff" />
                  </svg>

                </div>
                {/* OUTER TEXT2 */}
                <div className=' absolute flex justify-start items-start top-0 left-full pt-[21px]'>
                  <p className='font-thin 3xl:text-[8px] 2xl:text-[7px] xl:text-[6px] lg:text-[5px] md:text-[6px] sm:text-[5px] text-[5px] tracking-[0.2em] [writing-mode:vertical-rl]'>ADVANCED ENCRYPTION STANDARD (AES) 256-BIT</p>
                </div>
                <div className='absolute  top-full right-0 bg-black rounded-b-2xl h-[400%] 3xl:w-[314px]'>
                  {/* 2 */}
                  <div className='w-full h-full flex flex-col'>
                    {/* FILE LIST */}
                    <div className="h-2/5 w-full">
                      {fileName.length > 0 ? (
                        <div className="text-white row-span-2 flex flex-col justify-between items-start px-4  overflow-y-auto overflow-x-hidden  h-full">
                          {fileName.map((file, index) => (
                            <p key={index} className='break-words text-start text-white'>
                              {file.name}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <div className='relative h-full w-full text-white row-span-2 flex flex-col justify-between items-end px-4'>
                          <p className='text-[14px]'>SELECT A FOLDER</p>
                          <p className='absolute top-[30%] -right-[30%] text-[40px]'>UP TO  &nbsp;
                            <span className='text-black'>1 TB</span>
                          </p>
                          <p className='text-[20px]'>FREE</p>
                        </div>
                      )}

                    </div>
                    {/* FIELD PART */}
                    <div className='h-2/5 w-full '>
                      <div className="relative h-1/2 w-full flex flex-col justify-end text-white ">
                        <input
                          id="title"
                          className="peer w-full bg-transparent border-b border-white focus:border-b-2 focus:border-gray-400 focus:outline-none pt-4 pb-1 placeholder-transparent text-lg"
                          type="text"
                          placeholder="Title"
                        />
                        <label
                          htmlFor="title"
                          className="absolute left-0 top-4 text-gray-400 text-base transition-all peer-placeholder-shown:top-[60%]  peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-[20%] peer-focus:text-sm peer-focus:text-gray-400"
                        >
                          TITLE
                        </label>
                      </div>


                      <div className="relative text-white flex flex-col justify-end  h-1/2">
                        <input
                          id="title"
                          className="peer text-lg bg-transparent border-b border-white focus:border-b-2 focus:border-gray-400 focus:outline-none  w-full pt-4 pb-1 placeholder-transparent"
                          type="text"
                        />
                        <label
                          htmlFor="title"
                          className="absolute left-0 top-2 text-white text-sm transition-all peer-focus:text-gray-400"
                        >
                          NOTE
                        </label>
                      </div>
                    </div>
                    <div className='text-white h-1/5 flex justify-end items-center'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="6.706"
                        height={25}
                        viewBox="0 0 6.706 25"
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_1037"
                              data-name="Rectangle 1037"
                              width="6.706"
                              height={25}
                              transform="translate(0 0)"
                              fill="#fff"
                            />
                          </clipPath>
                        </defs>
                        <g id="Group_5526" data-name="Group 5526" transform="translate(0 0)">
                          <g
                            id="Group_5525"
                            data-name="Group 5525"
                            transform="translate(0 0)"
                            clipPath="url(#clip-path)"
                          >
                            <path
                              id="Path_27808"
                              data-name="Path 27808"
                              d="M0,3.354A3.353,3.353,0,1,0,3.354,0,3.353,3.353,0,0,0,0,3.354"
                              transform="translate(0 0)"
                              fill="#fff"
                            />
                            <path
                              id="Path_27809"
                              data-name="Path 27809"
                              d="M0,25.347a3.353,3.353,0,1,0,3.354-3.354A3.353,3.353,0,0,0,0,25.347"
                              transform="translate(0 -3.7)"
                              fill="#fff"
                            />
                            <path
                              id="Path_27810"
                              data-name="Path 27810"
                              d="M0,14.35A3.353,3.353,0,1,0,3.354,11,3.353,3.353,0,0,0,0,14.35"
                              transform="translate(0 -1.85)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </svg>

                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default Index

function page() {
  return (
    <>
      <div
        ref={ref}
        className='absolute  gap-0 grid grid-rows-5 border-none
                                3xl:left-[157px] 2xl:left-[126px] xl:left-[105px] lg:left-[84px] md:left-[102px] sm:left-[70px] left-[15%] 3xl:w-[314px] 3xl:h-[489px] 2xl:w-[250px] 2xl:h-[391px]  xl:h-[326px] lg:h-[335px] md:h-[454px] sm:h-[330px]  w-[207px] h-[54%] rounded-2xl bg-black '>
        {/* TOGGLER */}
        {/* 1 */}
        <div className='row-span-1'>
          <div className='row-span-5 flex item-center ustify-center  h-full'>
            {/* UPLOAD ICON */}
            <input
              multiple
              type="file"
              className='hidden'
              ref={fileInput}
              onChange={handleFileChange} />
            <div onClick={handleClick}
              className='bg-white h-full w-1/3 flex items-center justify-center'>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="67.557"
                height="67.557"
                viewBox="0 0 67.557 67.557"
              >
                <path
                  id="Path_27378"
                  data-name="Path 27378"
                  d="M369.266,311H339.241V280.978h-7.506V311H301.709v7.506h30.025v30.025h7.506V318.51h30.025Z"
                  transform="translate(-301.709 -280.978)"
                />
              </svg>


            </div>
            <div className='relative pl-2 text-white w-2/3 flex flex-col justify-center items-start'>
              <div className='text-[14px]'>UPLOAD FILES</div>
              <div className='text-[40px]'>OR</div>

            </div>
          </div>
          {/* LOCK */}
          <div className='absolute top-0 right-0  pt-[21px] pr-[18px]'>
            <svg
              className='2xl:w-[12.18px] 2xl:h-[15.5px] xl:w-[8.12px] xl:h-[10.33px] w-[8px] h-[10px]'
              xmlns="http://www.w3.org/2000/svg" width="12.176" height="15.496" viewBox="0 0 12.176 15.496">
              <path id="Path_27800" data-name="Path 27800" d="M70.088-30.72a4.135,4.135,0,0,0-3.874,4.339v1.24H65.107A1.179,1.179,0,0,0,64-23.9v7.438a1.179,1.179,0,0,0,1.107,1.24h9.962a1.179,1.179,0,0,0,1.107-1.24V-23.9a1.179,1.179,0,0,0-1.107-1.24H73.962v-1.24a4.137,4.137,0,0,0-3.677-4.294A.5.5,0,0,0,70.088-30.72Zm0,1.24a2.938,2.938,0,0,1,2.767,3.1v1.24H67.321v-1.24A2.938,2.938,0,0,1,70.088-29.48Z" transform="translate(-64 30.72)" fill="#fff" />
            </svg>

          </div>
          {/* OUTER TEXT */}
          <div className=' absolute flex justify-start items-start top-0  w-full h-full left-full pt-[21px]'>
            <p className='font-thin 3xl:text-[8px] 2xl:text-[7px] xl:text-[6px] lg:text-[5px] md:text-[6px] sm:text-[5px] text-[5px] tracking-[0.2em] [writing-mode:vertical-rl]'>ADVANCED ENCRYPTION STANDARD (AES) 256-BIT</p>
          </div>
        </div>
        {/* 2 */}

        {fileName.length > 0 ? (
          <div className='text-white row-span-2 flex flex-col justify-between items-start px-4 my-4  overflow-y-auto overflow-x-hidden'>

            {fileName.map((file, index) => (
              <p key={index} className='break-words text-start text-white'>
                {file.name}
              </p>
            ))}
          </div>
        ) :
          (
            <div className='relative text-white row-span-2 flex flex-col justify-between items-end px-4'>
              <p className='text-[14px]'>SELECT A FOLDER</p>
              <p className='absolute top-[30%] -right-[30%] text-[40px]'>UP TO  &nbsp;
                <span className='text-black'>1 TB</span>
              </p>
              <p className='text-[20px]'>FREE</p>
            </div>
          )}
        {/* 3 */}
        <div className='row-span-2 flex flex-col justify-between px-4'>
          <div className="relative 1/3 w-full text-white ">
            <input
              id="title"
              className="peer w-full bg-transparent border-b border-white focus:border-b-2 focus:border-gray-400 focus:outline-none pt-4 pb-1 placeholder-transparent h-full"
              type="text"
              placeholder="Title"
            />
            <label
              htmlFor="title"
              className="absolute left-0 top-4 text-gray-400 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-400"
            >
              TITLE
            </label>
          </div>


          <div className="relative text-white h-1/3">
            <input
              id="title"
              className="peer bg-transparent border-b border-white focus:border-b-2 focus:border-gray-400 focus:outline-none  h-full w-full pt-4 pb-1 placeholder-transparent"
              type="text"
            />
            <label
              htmlFor="title"
              className="absolute left-0 top-2 text-white text-sm transition-all peer-focus:text-gray-400"
            >
              NOTE
            </label>
          </div>
          <div className='text-white h-1/3 flex justify-end items-center'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="6.706"
              height={25}
              viewBox="0 0 6.706 25"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_1037"
                    data-name="Rectangle 1037"
                    width="6.706"
                    height={25}
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                </clipPath>
              </defs>
              <g id="Group_5526" data-name="Group 5526" transform="translate(0 0)">
                <g
                  id="Group_5525"
                  data-name="Group 5525"
                  transform="translate(0 0)"
                  clipPath="url(#clip-path)"
                >
                  <path
                    id="Path_27808"
                    data-name="Path 27808"
                    d="M0,3.354A3.353,3.353,0,1,0,3.354,0,3.353,3.353,0,0,0,0,3.354"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                  <path
                    id="Path_27809"
                    data-name="Path 27809"
                    d="M0,25.347a3.353,3.353,0,1,0,3.354-3.354A3.353,3.353,0,0,0,0,25.347"
                    transform="translate(0 -3.7)"
                    fill="#fff"
                  />
                  <path
                    id="Path_27810"
                    data-name="Path 27810"
                    d="M0,14.35A3.353,3.353,0,1,0,3.354,11,3.353,3.353,0,0,0,0,14.35"
                    transform="translate(0 -1.85)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>

          </div>
        </div>
      </div>
    </>
  )
}