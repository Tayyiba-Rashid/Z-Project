import React from 'react'
import Image from 'next/image'

function ZimoGroup21() {
  return (
    <div className='relative  h-screen flex justify-center items-center'>
      <div className='absolute inset-0 flex justify-center items-center mx-4'>
        <Image
          src="/21_ZimoGroup15/Group 4519.png"
          width={500}
          height={500}
          alt="background image"
          className="opacity-50 blur-md" 
        />
      </div>

      {/* Foreground Text */}
      <div className='relative z-10 text-center flex flex-col justify-center items-center text-black'>
        <div className='px-4 py-2 text-2xl font-thin'>Bringing the world closer together.</div>
        <div className='px-4 py-2'>
        <Image
          src="/21_ZimoGroup15/Group 3005.png"
          width={100}
          height={100}
          alt="background image"
        />
        </div>
      </div>
    </div>
  )
}

export default ZimoGroup21