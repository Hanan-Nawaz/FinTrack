import React, { useState } from 'react'
import { navlinks } from '../constants/constant'
import { FiMenu, FiX } from 'react-icons/fi'

function Navbar() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <div className='nav flex h-[70px] bg-white h-[80px] justify-between border-1 border-gray-200'>
                <div className="flex justify-center items-center text-[25px] flex-[0.45] bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-[600]">finTrack<span className='text-[60px] mt-[-15px]'>.</span></div>
                <ul className="hidden lg:flex flex-[1.5] items-center justify-evenly">
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} className='text-[15px] text-gray-400'>{link.name}</a>
                        </li>
                    ))

                    }
                </ul>
                <div className="hidden lg:flex flex-[0.6] items-center justify-center">
                    <a href='/sign-in' className='flex items-center w-[100px] justify-center  h-[40px] bg-blue-500 rounded-[20px] border-1 border-blue-500 text-white hover:text-blue-500 hover:bg-white mr-10 '>
                        Sign in
                    </a>
                    <a href='/sign-up' className='flex items-center w-[100px] justify-center h-[40px] border-1 border-blue-500 rounded-[20px] text-blue-500 hover:bg-blue-500 hover:text-white'>
                        Sign up
                    </a>
                </div>

                <div className="flex lg:hidden justify-center items-center mr-[20px] text-[20px]" onClick={handleToggle}>
                    {toggle ? <FiX /> : <FiMenu />}
                </div>



            </div>

            {toggle &&
                <div className='bg-white flex flex-col absolute w-100'>
                <ul className="lg:hidden flex flex-col items-center justify-evenly  mt-1">
                    {navlinks.map((link, index) => (
                        <li key={index} className='my-[10px]'>
                            <a href={link.url} className='text-[15px] text-gray-400'>{link.name}</a>
                        </li>
                    ))
                    }
                </ul>
                <div className="lg:hidden flex  items-center justify-center my-[10px]">
                   <a href='/sign-in' className='flex items-center w-[100px] justify-center  h-[40px] bg-blue-500 rounded-[20px] border-1 border-blue-500 text-white hover:text-blue-500 hover:bg-white mr-10 '>
                        Sign in
                    </a>
                    <a href='/sign-up' className='flex items-center w-[100px] justify-center h-[40px] border-1 border-blue-500 rounded-[20px] text-blue-500 hover:bg-blue-500 hover:text-white'>
                        Sign up
                    </a>
                </div>
                </div>

            }
        </>

    )
}

export default Navbar;
