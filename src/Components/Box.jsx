/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Box = ({ children }) => {
    const [isOpen , setIsOpen] = useState(true)
    return (
        <div className="w-[42rem] max-w-[42rem] bg-[#2b3035] rounded-lg  relative p-4 text-white">
          <button
            className="absolute top-4 right-4 text-2xl font-bold bg-[#212529] rounded-full w-8 h-8 flex items-center justify-center"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "–" : "+"} 
          </button>
          {isOpen && children}
        </div>
      );
}

export default Box