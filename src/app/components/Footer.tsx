import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className='flex flex-col space-y-10 justify-center m-10 mb-0'>
        <nav className='flex justify-center flex-wrap gap-6 text-green-600 font-medium bg-black'>
        <a className='text-yellow-400 hover:text-green-600' href='#'>Home</a>
        <a className='text-yellow-400 hover:text-green-600' href='#'>About</a>
        <a className='text-yellow-400 hover:text-green-600' href='#'>Delivery</a>
        <a className='text-yellow-400 hover:text-green-600' href='#'>Contact</a>
        </nav>

        <div className='flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-100'>
        <div className="container mx-auto flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <p className="text-sm text-white">© 2025 Burger Mania. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>
        </div>
<br/>

      </footer>
    </div>
  )
}

export default Footer
