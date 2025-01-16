import React from 'react'

const Carousel = () => {
  return (
    <div>
      <section className='bg-black'>
        <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
            <div className='col-span-1 sm:col-span-2 md:col-span-2 bg-black h-auto md:h-full flex flex-col' >
           <a href=''
           className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
            <img src='burger1.jpg' alt='burger1' 
            className='absolute  inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'/>
            <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
            <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Classic Bites</h3>
           </a>
            </div>
            <div className='col-span-1 sm:col-span-2 md:col-span-2 bg-black h-auto md:h-full flex flex-col' >
           <a href=''
           className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
            <img src='burger2.jpg' alt='burger2' 
            className='absolute  inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'/>
            <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
            <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Gourmet Grills</h3>
           </a>


           <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
            <a href='' 
            className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
           <img src='burger3.jpg' alt='burger3'
           className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'/>
           <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
           <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Hot Grills</h3>
            </a>
            <a href=''
            className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
               <img src='burger4.jpg' alt='burger4'
           className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'/>
           <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
           <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Soft Bites</h3>


            </a>
           </div>


            </div>

            <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-black h-auto md:h-full  flex flex-col'>
            <a href=''
           className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
            <img src='burger5.jpg' alt='burger5' 
            className='absolute  inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'/>
            <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
            <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Delite Bites</h3>
           </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Carousel
