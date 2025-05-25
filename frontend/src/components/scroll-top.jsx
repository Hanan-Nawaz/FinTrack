import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function scrollTop() {
    const [showtoggle, setShowToggle] = useState(false);

    useEffect (() => {
        const toggleShow = () => {
            setShowToggle(window.scrollY > 100);
        }

        window.addEventListener('scroll', toggleShow);
        return () => window.removeEventListener('scroll', toggleShow);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0 })
    }

  return (
    
      showtoggle && (
        <button className='fixed bottom-4 right-4 z-50 bg-blue-600 hover:border hover:border-blue-600 hover:bg-transparent hover:text-blue-500 text-white p-5 rounded-full'
          onClick={scrollToTop}
        >
          {<FaArrowUp className='w-5 h-5'/>}
        </button>
      )
  )
}

export default scrollTop;
