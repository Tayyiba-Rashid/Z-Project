import React from 'react'
import { motion } from 'framer-motion'


const pageVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.8 },
    },
  };


function FirstSection() {
  return (
    <>
     <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
          <motion.section
            className="header relative pt-16 items-center flex h-screen max-h-860-px"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            key="index"
          >
            <div className="container relative z-10 mx-auto items-center flex flex-wrap">
              <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                <div className="pt-32 sm:pt-0">
                  <h2 className="font-semibold text-4xl text-blueGray-600">
                    Notus NextJS - A beautiful extension for Tailwind CSS.
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Notus NextJS is Free and Open Source. It does not change any
                    of the CSS from{" "}
                    <a
                      href="https://tailwindcss.com/?ref=creativetim"
                      className="text-blueGray-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tailwind CSS
                    </a>
                    . It features multiple HTML elements and it comes with
                    dynamic components for ReactJS, Vue and Angular.
                  </p>
                  <div className="mt-12">
                    <a
                      href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                      target="_blank"
                      className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Get started
                    </a>
                    <a
                      href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                      className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                      target="_blank"
                    >
                      Github Star
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.img
            className="absolute z-0 top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
            src="/img/pattern_nextjs.png"
            alt="..."
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </section>
    </>
  )
}

export default FirstSection