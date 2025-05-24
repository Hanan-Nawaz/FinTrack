import React from 'react'
import { sign_up } from '../images/index.js'

function signup() {
  return (
    <div className='flex flex-col md:flex-row my-20 mx-10 md:mx-20 border-1 rounded border-gray-200 shadow'>
              
               <div className='flex-1 mx-5 my-7'>
                   <div className='ml-auto mr-auto text-blue-800 font-semibold text-[30px] w-[100px]'>finTrack <span className='block border-b border-blue-500 w-[50px] ml-auto mr-auto'></span></div>
                   <p className='text-gray-800 font-semibold text-[15px] text-center mt-2'>Signup to continue.</p>
                   <div className='flex flex-col  mt-10'>
                       <label className='font-semibold text-gray-500  mb-1'>Email</label>
                       <input className=' p-2  h-10 border-1 border-gray-500 rounded' placeholder='enter your email' required type='email'/>
                   </div>
   
                   <div className='flex flex-col mt-8'>
                       <label className='font-semibold text-gray-500  mb-1'>Password</label>
                       <input className=' p-2  h-10 border-1 border-gray-500 rounded' placeholder='enter your password' required type='password'/>
                   </div>
   
                   <div className='flex flex-col mt-10'>
                       <button className=' p-2 bg-blue-500 text-white hover:text-blue-500 hover:bg-transparent  h-10 hover:border-1 hover:border-blue-500 rounded'>Sign up</button>
                   </div>
   
                   <div className="flex justify-end items-center mx-10 mt-4 text-[7px] md:text-[12px]">
                       <div className="mr-1 text-end">Already have an account?</div>
                       <a className="text-blue-500 hover:text-blue-800 cursor-pointer text-end">Sign in</a>
                   </div>
   
               </div>

                <div className='flex-1'>
                   <img src={sign_up} className='h-100 md:h-full' />
               </div>
           </div>
  )
}

export default signup;
