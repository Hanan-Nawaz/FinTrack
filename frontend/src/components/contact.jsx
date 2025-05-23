import React from 'react'

function contact() {
    return (
        <div className='flex-col flex lg:flex-row lg:ml-20'>
            <div className='ml-10 md:ml-20 lg:ml-0 flex-1 '>
                <div className='text-blue-800 w-[100px] text-[30px] font-semibold'>Contact <span className='block border-b-[1px] w-[50px] ml-auto mr-auto'></span></div>
                <p className='mt-3 text-gray-500'>Our friendly team would love to hear from you!</p>
                <div className='flex flex-col lg:flex-row mr-10 mr-10 mt-10 mb-5'>
                    <div className='flex-1 flex-col lg:mb-0 lg:mr-10 mb-5'>
                        <label className='text-gray-500 font-semibold mt-3'>First Name</label>
                        <input className='border-1 border-gray-300 p-2 lg:w-full w-full h-10 rounded' placeholder='enter your first name' />
                    </div>

                    <div className='flex-1 flex-col lg:mb-0 mb-5'>
                        <label className='text-gray-500 font-semibold mt-3'>Last Name</label>
                        <input className='border-1 border-gray-300 p-2 lg:w-full w-full h-10 rounded' placeholder='enter your last name' />
                    </div>        
                </div>
                    <div className='flex flex-col mr-10 mb-5'>
                        <label className='text-gray-500 font-semibold'>Email</label>
                        <input className='border-1 border-gray-300 p-2 w-full h-10 rounded' placeholder='enter your email' />
                    </div> 

                    <div className='flex flex-col mr-10 mb-5'>
                        <label className='text-gray-500 font-semibold'>Mobile Number</label>
                        <input className='border-1 border-gray-300 p-2 w-full h-10 rounded' placeholder='enter your mobile number' />
                    </div>  

                     <div className='flex flex-col mr-10 mb-5'>
                        <label className='text-gray-500 font-semibold'>Message</label>
                        <textarea className='border-1 border-gray-300 p-2 w-full h-35 rounded'  placeholder='enter your message' />
                    </div>  

                    <div className='flex flex-col mr-10 mb-5'>
                        <button className='bg-blue-500 text-white hover:text-blue-500 hover:bg-transparent hover:border-1 hover:border-blue-500 p-2 w-full h-10 rounded' >Send Message</button>
                    </div>    
            </div>
            <div className='flex-1 mt-10 md:mt-0'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53941.24015558993!2d74.32358425447255!3d32.32991620621753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391edbaf7b7f8025%3A0xdf762e65d36172c0!2sDaska%2C%20Pakistan!5e0!3m2!1sen!2sde!4v1747994734446!5m2!1sen!2sde" className='w-full' height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default contact
