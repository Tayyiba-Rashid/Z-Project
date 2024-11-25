import React from 'react'
import Image from 'next/image'

function Page02({scrollToPage03}) {
  const handleClick = () => {
    
      scrollToPage03.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };
  return (
    <div className='h-dvh grid grid-rows-8'>
      <div className=' row-span-1 flex items-center justify-center p-4'>
        <Image
          className='lg:block hidden'
          src='/02_Page/Path 27314.png'
          width={600}
          height={600} />
           <Image
          className='lg:hidden block'
          src='/02_Page/Path 27314.png'
          width={500}
          height={500} />
      </div>
      <div className=' row-span-6 grid lg:grid-cols-3 grid-cols-1 '>
        <div className='lg:col-span-2 lg:row-span-3 row-span-4  grid lg:grid-rows-2 lg:pl-8'>
          <div className=' grid items-center justify-center lg:justify-start lg:items-start '>
            <Image
              className='lg:block hidden'
              src='/02_Page/Group 4745.png'
              width={400}
              height={400} />
            <Image
              className='lg:hidden flex items-center '
              src='/02_Page/Group 4745.png'
              width={200}
              height={200} />
          </div>
          <div className='flex items-center justify-center lg:justify-start ' >
            <Image
              className='lg:block hidden'
              src='/02_Page/Group 4772.png'
              width={600}
              height={600} />
            <Image
              className='lg:hidden flex'
              src='/02_Page/Group 4773.png'
              width={300}
              height={300} />
          </div>
        </div>
        <div className=' col-span-1 lg:row-span-3 row-span-2 flex items-center justify-center'>
          <Image
            className='lg:block hidden'
            src='/02_Page/Group 4771.png'
            width={350}
            height={350} />
          <Image
            className='lg:hidden block'
            src='/02_Page/Group 4771.png'
            width={200}
            height={200} />
        </div>
      </div>
      <div className=' row-span-1 flex items-center justify-center'>
        <Image
          onClick={handleClick}
          className='lg:block hidden'
          src='/02_Page/Path 27315.png'
          width={45}
          height={45} />
        <Image
          onClick={handleClick}
          className='lg:hidden block'
          src='/02_Page/Path 27315.png'
          width={40}
          height={40} />
      </div>
    </div>
  )
}

export default Page02