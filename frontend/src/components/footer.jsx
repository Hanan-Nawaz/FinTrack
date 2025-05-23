import React from 'react'
import { FiLinkedin, FiFacebook, FiInstagram, FiGithub, FiGlobe, FiTwitter } from 'react-icons/fi';

function footer() {
  return (
    <div className='bg-blue-500 mt-6 h-25'>
      <div className='flex iems-center justify-center pt-5'>
        <a className='text-white border-1 p-3 rounded-full hover:text-black mr-1'>{<FiLinkedin />}</a>
        <a className='text-white border-1 p-3 rounded-full hover:text-black mr-1'>{<FiGithub />}</a>
        <a className='text-white border-1 p-3 rounded-full hover:text-black mr-1'>{<FiGlobe />}</a>
        <a className='text-white border-1 p-3 rounded-full hover:text-black mr-1'>{<FiFacebook />}</a>
        <a className='text-white border-1 p-3 rounded-full hover:text-black mr-1'>{<FiInstagram />}</a>
        <a className='text-white border-1 p-3 rounded-full hover:text-black mr-1'>{<FiTwitter />}</a>
      </div>
      <div className='flex justify-center mt-5 text-white text-[12px]'> copyright &copy; 2025. Made with 🤍 by <a className='hover:text-white ml-1 text-black' href='https://hanannawaz.me'> hanannawaz.me</a></div>
    </div>
  )
}

export default footer;
