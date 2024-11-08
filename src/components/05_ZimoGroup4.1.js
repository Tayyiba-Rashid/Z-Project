import React from 'react'
import Image from 'next/image'

function ZimoGroup5() {
  return (
    <div className=' h-dvh sm:h-dvh grid grid-rows-6 bg-slate-200'>
    <div className='row-span-3 flex items-end justify-center'>
        <Image
         src="/05_ZimoGroup4.1/zimoai.png"
         width={300}
         height={300}
         alt="Zimo AI"
        />
    </div>
    <div className=' row-span-2 flex items-end justify-center lg:text-lg'>
        ARTIFICIAL INTELLIGENCE FOR EVERYONE
    </div>
    <div className=' row-span-1 flex items-center lg:items-center justify-end py-4'>
    <Image
    className='mr-6'
         src="/05_ZimoGroup4.1/ai.png"
         width={100}
         height={100}
         alt="Zimo AI"
        />
    </div>
    
</div>

  )
}

export default ZimoGroup5