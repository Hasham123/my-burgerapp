import React from 'react'
import { FaBurger } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoFlash } from "react-icons/io5";
import { BsFillHandbagFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <div className='grid xl:grid-cols-1 grid-cols-1'>
        <div className='p-5'>
        <div className='py-3 px-3 rounded-xl border w-full'>
        <div className='flex justify-between items-center'>
        <div className='flex justify-items-center items-center gap-2'>
        <FaBurger className='w-6 h-6 text-yellow-400 hover:text-white' />
        <div style= {{position:"relative"}}>
            <input className='rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block' placeholder='search here for burgers'>
             </input> 
            <FaSearch className='w-5 h-5 text-yellow-400 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block' /> </div>

        </div>
        <div className='flex justify-center items-center gap-2'><IoFlash className=' w-5 h-5 text-yellow-400 hidden lg:block md:block' />
        <p className='text-sm text-green-500 hidden lg:block md:block'>ORDER NOW <span className='text-yellow-400'>Your Favourite Burger!</span></p>
        <BsFillHandbagFill className='inline-block w-8 h-8 rounded-full text-yellow-400 ring-2 hover:ring-yellow-400' />
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
