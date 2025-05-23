import React from 'react'
import { FaRocket } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { TbView360Number } from "react-icons/tb";

function aboutus() {
    return (
        <section className='mx-10 md:mx-20 mb-10' id='about'>
            <h1 className=" text-blue-800 font-semibold text-[30px] w-[200px] mb-10 mr-auto ml-auto">About finTrack <span className='block border-b border-b-blue-800 w-[100px] ml-auto mr-auto'></span></h1>
            <div className="flex flex-col lg:flex-row ">
                <div className="flex-1">
                    <p className='text-justify text-gray-700'>
                        finTrack is a minimal yet powerful expense tracking app developed as a hobby project by a Master's student in High Integrity Systems and a Software Engineer with nearly 2 years of industry experience. It was born out of a personal need for a clean, free alternative to manually managing finances in Excel, something that was both lightweight and genuinely useful for everyday financial tracking. <br />
                        The app is designed to offer a smooth and intuitive experience for users who want to take control of their spending without the complexity or cost of traditional budgeting software. Whether you're a student, a professional, or just someone looking to organize personal finances, finTrack aims to be your go-to tool for tracking expenses, understanding your savings, and making better financial decisions.
                    </p>
                </div>

                <div className='flex-1 flex flex-col justify-center gap-10 lg:ml-20 mx-5'>
                    <div className="flex items-center justify-start mt-[20px]">
                        <div className=" flex items-center justify-center text-white text-[30px] bg-blue-500 w-15 h-15 rounded-full mr-4 shrink-0">
                            <FaRocket />
                        </div>
                        <p className=" text-gray-700">
                            Built to replace the hassle of manual Excel budgeting with something cleaner and easier.
                        </p>
                    </div>

                    <div className="flex items-center justify-start">
                        <div className="flex items-center justify-center text-white text-[40px] bg-blue-500 w-15 h-15 rounded-full mr-4 shrink-0">
                            <HiOutlineLightBulb />
                        </div>
                        <p className=" text-gray-700">
                            A passion project by a Master’s student & Software Engineer with real-world dev background.                            </p>
                    </div>

                    <div className="flex items-center justify-start">
                        <div className="items-center flex justify-center text-white text-[20px] bg-blue-500 w-15 h-15 rounded-full mr-4 shrink-0">
                            <TbView360Number />
                        </div>
                        <p className=" text-gray-700">
                            finTrack is minimal, cost-free, and open to contributions!
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default aboutus;
