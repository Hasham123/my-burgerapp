import React from 'react'

const Card = () => {
  return (
   <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>

<div className='md:w-1/2 md:pr-10 text-center'>
<h2 className='text-3xl font-bold mb-4 text-white'> Delicious Burgers</h2>
<p className='text-white mb-4'>Experience the perfect burger a harmony of flavors and textures that satisfies every craving</p>
<button className='bg-green-600 text-white px04 py-2 rounded hover:bg-green-700 transition duration-200'>
  ORDER NOW
</button>
<h3 className='text-2xl font-semibold mt-6 mb-2 text-center text-yellow-400'>Coming SOON! Our New Burgers</h3>
<div className='text-white'>
<ul>
  <li>
 <strong>Classic Beef Burger:</strong> Juicy beef patty with lettuce tomato cheese and a light layer of sauce
  </li>
  <br/>
</ul>
<ul>
  <li>
 <strong>Cheese Lover Burger:</strong> Double cheese layers with a beef patty lettuce and creamy mayo
  </li>
  <br/>
</ul>
<ul>
  <li>
 <strong>Spicy Chicken Burger:</strong> Crispy chicken patty with spicy sauce fresh lettuce and pickles
  </li>
  <br/>
</ul>
<ul>
  <li>
 <strong>Veggie Delight Burger:</strong> Grilled veggie patty with fresh lettuce tomatoes and avocado spread
  </li>
  <br/>
</ul>
<ul>
  <li>
 <strong>BBQ Bacon Burger: </strong> Smoky beef patty crispy bacon BBQ sauce and melted cheese
  </li>
  <br/>
</ul>
</div>

</div>


<div className='md:w-1/2 mt-6 md:mt-0'>
<img
src='burgerbg1.jpg'
alt='burger'
className='w-full h-auto rounded-lg shadow-lg mr-7 '/>

</div>





   </section>
  )
}

export default Card
