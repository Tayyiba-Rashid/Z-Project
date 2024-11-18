import React from 'react'
import Image from 'next/image'


export default function Page01({scrollToPage02}) {

   const handleClick = ()=>{
    scrollToPage02.current.scrollIntoView({
        behavior: "smooth",
      block: "start",
    })

    }

    return (
        <div className='h-dvh relative '>
            <div
                className="w-full h-full bg-cover bg-center relative z-0 bg-fixed"
                style={{ backgroundImage: "url('/01_Page/bg.png')" }}
            >

                <div className='h-dvh flex flex-col justify-between md:px-8 pt-6'>
                    <div className='flex md:justify-between justify-center items-center p-2'>
                        <div className=' hidden md:block'>
                            <Image
                                src='/01_Page/Group 4772.png'
                                width={250}
                                height={250} />
                        </div>
                        <div className='lg:pl-12'>

                            <Image
                                src='/01_Page/Group 3005.png'
                                width={150}
                                height={150} />
                        </div>
                        <div className=' hidden lg:block '>
                            <Image
                                src='/01_Page/Group 4723.png'
                                width={400}
                                height={400} />
                        </div>
                    </div>
                    <div className=' flex lg:justify-start justify-center items-center lg:pl-8'>
                        <Image
                            src='/01_Page/Group 47711.png'
                            width={300}
                            height={300} 
                            alt='Discover s new world'/>

                    </div>
                    <div className=' flex flex-col justify-center items-center'>
                        <div className='p-2'>
                            <Image
                                src='/01_Page/Bringing the world closer together.png'
                                width={300}
                                height={300} 
                                alt='bring the world closer together'/>
                        </div>
                        <div className='pt-4 pb-4'
                        onClick={handleClick}>
                            <Image
                                src='/01_Page/Path 59.png'
                                width={45}
                                height={45}
                                alt='move next' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
