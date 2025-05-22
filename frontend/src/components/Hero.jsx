import React from 'react'
import { hero } from '../images/index';

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row  justify-center mx-2 bg-transparent mx-10 md:mx-20">
        <div className='flex flex-1 flex-col sm:ml-[20px] justify-center mt-10 sm:mt-0 '>
            <h1 className='text-blue-800 text-[27px] sm:text-[30px] lg:text-[45px] text-left font-[1000]'>track your expenses,<br/> save your money <br/> effortlessly.</h1>
            <p className='text-gray-800 text-[14px] sm:text-[15px] text-left mt-4'>finTrack is a smart expense tracking app designed to help users take control of their finances with ease. It allows you to monitor spending, visualize financial habits, and effortlessly export detailed reports to Excel.</p>
            <button className="bg-blue-500 text-white rounded-[20px] w-30 md:w-50 text-[10px] md:text-[15px] mt-10 h-[40px] hover:bg-transparent hover:border-1 hover:border-blue-500 hover:text-blue-500">Sign up Now</button>
        </div>
        <div className='flex flex-1 items-center justify-center'>
            <img src={hero} className='img w-full h-[400px] sm:h-[600px]'/>
        </div>
    </div>
  )
}

export default Hero;
