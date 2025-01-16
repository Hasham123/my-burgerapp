import React from 'react'

const Progressor = () => {
  return (
    <div>
      <div className='flex items-start max-w-screen-lg w-full mx-auto mt-10'>
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-yellow-400 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base font-bold text-black'>1</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-green-500'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h3 className='text-base font-bold text-yellow-400'>
              Step:1 Choose Your Dish
            </h3>
            <p className='text-xs text-white'>Explore The Menu</p>
          </div>
        </div>

        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-yellow-400 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base font-bold text-black'>2</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-green-500'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h3 className='text-base font-bold text-yellow-400'>
              Step:2 Add To Cart
            </h3>
            <p className='text-xs text-white'>Tailor Your Burger</p>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-yellow-400 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-base font-bold text-black'>3</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-green-500'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h3 className='text-base font-bold text-yellow-400'>
              Step:3 Place Your Order
            </h3>
            <p className='text-xs text-white'>Complete Your Order </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Progressor
