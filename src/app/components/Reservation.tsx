import React from 'react';

const Reservation = () => {
  return (
    <section className='bg-black py-10'>

<div className='container text-center mx-auto'>
    <h2 className='font-bold text-3xl text-white'>Make A Reservation</h2>
    <form className='max-w-md  mx-auto'>
        <div className='mb-4 text-white'>
          <input type='text'
          placeholder='Your Name'
          className='w-full p-3 border border-grey-300 rounded-md'
          required/>

        </div>

        <div className='mb-4'>
       <input type='text'
       placeholder='Your Email'
       className='w-full p-3 border border-grey-300 rounded-md'
       required/>

        </div>
        <div className='mb-4'>
       <input type='date'
       className='w-full p-3 border border-grey-300 rounded-md'
       required/>

        </div>

        <div className='mb-4'>
       <input type='time'
       className='w-full p-3 border border-grey-300 rounded-md'
       required/>

        </div>
        <div>

          <button className='bg-green-600 text-white py-2 px-4 rounded-md hover:bg-yellow-400'>Reserved Table</button>
        </div>




    </form>

</div>

    </section>
  );
}

export default Reservation;
