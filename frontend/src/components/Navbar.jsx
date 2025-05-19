import React from 'react'
import { navlinks } from '../constants/constant'

function Navbar() {
    return (
        <div className='nav flex h-[70px] bg-white h-[80px] justify-between'>
            <div className="flex justify-center items-center text-[25px] flex-[0.5] bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">FinTrack</div>
            <ul className="hidden lg:flex flex-1 items-center justify-evenly">
                {navlinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} className='text-[15px] text-gray-400'>{link.name}</a>
                    </li>
                ))

                }
            </ul>
            <div className="hidden lg:flex flex-[0.5] items-center justify-center">
                <button className=' w-[100px] h-[40px] bg-blue-500 rounded border-1 border-blue-500 text-white hover:text-blue-500 hover:bg-white mr-10 '>
                        Sign In
                </button>
                <button className=' w-[100px] h-[40px] border-1 border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white'>
                        Sign Up
                </button>
            </div>

        </div>
    )
}

export default Navbar;
