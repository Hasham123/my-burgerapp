import React from 'react'

const Banner = () => {
  return (
    <div className='relative overflow-hidden bg-black font-sans px-6 py-12 mb-7'>
      <div className='absolute inset-0 opacity-50'>
        <img
          src='https://t4.ftcdn.net/jpg/05/98/75/83/360_F_598758341_NzcqKk3DX3bJhQge0Ngba47JQDmI8bHm.jpg'
          alt='burger banner'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center'>
        <h2 className='text-yellow-400 font-bold sm:text-5xl mb-4'>
          Discover The Menu
        </h2>
        <p className='text-white text-xl text-center mb-6 max-w-xl '>
          Step into our burger shop and discover a menu full of mouthwatering
          options. From juicy classic burgers to bold new flavors there is
          something for everyone. Browse through our selection and find the
          perfect burger to satisfy your hunger. Dont wait any longer order now
          and treat yourself to a delicious meal thats sure to hit the spot.
          Visit us today and let your taste buds experience the best burgers
          around
        </p>
        <button
          type='button'
          className='bg-yellow-400 text-black text-sm font-semibold py-3 px-6 m-6 rounded-full shadow-lg hover:bg-yellow-600'
        >
          EXCITING DEALS
        </button>
      </div>
    </div>
  )
}

export default Banner
