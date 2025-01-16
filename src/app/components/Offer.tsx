"use client"

import React from 'react'

type Offer={
  title:string;
  description:string;
}
const SpecialOffers:React.FC=()=>{

const Offers :Offer[] =[

{
  title:"Happy Hour",
  description:" Get 50% Off On Every Item From 5pm to 7pm"
},
{
  title:"Family Time",
  description:" Get 20% Off On Every Item From 8pm to 11pm"
},
{
  title:"Friends Night Out",
  description:" Get 40% Off On Every Item From 11:30pm till Late Night"
},


];

const HandleOfferClick=(description:string)=>{
  alert(description);
}
return(

<section className='py-10'>
  <div className='container mx-auto text-center'>
    <h2 className='text-6xl font-bold mb-6 text-white'>Special Offers</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

  {Offers.map((offer,index)=>(
    <button key={index} onClick={()=>HandleOfferClick(offer.description)} 
    className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105' >

   <h3 className='text-2xl font-semibold text-yellow-400'>
    {offer.title}
   </h3>
   <p className='mt-3 text-green-600 '>{offer.description}</p>
    </button>
  ))}
    </div>


  </div>

</section>


)


}
export default SpecialOffers