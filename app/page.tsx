"use client"
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const page = () => {
  return (
    <div className=' bg-neutral-950 overflow-y-auto scrollbar-hide  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] w-[100vw] h-[100vh] '>
      <Navbar language={"none"} tab={"Home"} />
      <div className='h-[40vh]  w-full flex flex-col justify-center items-center'>

        <img src="/logo.png" width={300} className='mb-4' alt="" />
        <div className='text-xl'>
        Inspire. Code. Build. Empower.
        </div>
      </div>
      <div className='bg-[#b1c0cb] mt-4 mx-8 h-[50vh] flex justify-center items-center rounded-xl'>
        <div className='flex flex-col justify-center items-center mr-4'>

          <img src="/homeheroimage.gif" width={400} alt="" />


        </div>
        <div className='w-[70%] flex flex-col gap-4'>
          <p className='text-xl'>
            <span className='text-red-600 font-bold'>ReactiveCtrl</span> is a lightweight web code editor is designed for speed, simplicity, and productivity. Whether you're a beginner or a seasoned developer, this editor offers the essential tools to focus on what matters most—writing great code.
          </p>
          <ul className='flex justify-center items-center gap-4 mt-4 text-center font-bold'>
            <li className='bg-gray-500 px-4 py-2 rounded-xl'>Seamless Coding</li>
            
            <li className='bg-gray-500 px-4 py-2 rounded-xl'>
              Beginner Friendly
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-[#1a1a1a] mt-4 mx-8 h-[50vh] flex justify-center items-center rounded-xl'>
        <div className='w-[70%] flex flex-col gap-4'>
          <p className='text-xl ml-16'>
            <span className='text-red-600 font-bold'>ReactiveCtrl</span> has a very optimized frontend and a realy simple but strong backend, making it really fast and smooth for compilation making it most suitable for higher performance. Plus the complete load is transferred to our backend system, so your machines operates smoothly.
          </p>
          <ul className='flex justify-center items-center gap-4 mt-4 text-center font-bold'>
            <li className='bg-gray-500 px-4 py-2 rounded-xl'>Faster Compilation</li>
            <li className='bg-gray-500 px-4 py-2 rounded-xl'>
              Smoother Coding Experience
            </li>
            
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center mr-4'>

          <img src="/speedgif.gif" width={400} alt="" />


        </div>
      </div>
      <div className='bg-[#1e2d40] mt-4 mx-8 h-[50vh] mb-4 flex justify-center items-center rounded-xl'>
        <div className='flex flex-col justify-center items-center mr-4'>

          <img src="/last.png" width={400} alt="" />


        </div>
        <div className='w-[70%] flex flex-col gap-4'>
          <p className='text-xl'>
            <span className='text-red-600 font-bold'>ReactiveCtrl</span> has multiple language support with real time syntax-highlighting capabilities without compromising performance. Currently supported languages include: Python, C, C++ and JavaScript.
          </p>
          <ul className='flex justify-center w-full items-center gap-4 mt-4 text-center font-bold'>
            
            
            <li className='bg-gray-500 px-4 py-2 rounded-xl'>
              Multi-Language Support
            </li>
            <li className='bg-gray-500 px-4 py-2 rounded-xl'>
              Real Time Syntax Hightlighting
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page


