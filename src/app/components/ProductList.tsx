import React from 'react'
const products =[
  {
    id :1,
    title: "Mexican Burger",
    category: "Fixing",
    price : 200.00,
    imageUrl: "png4 (1).png",
    bgcolor: "bg-amber-500"
  },
  {
    id :2,
    title: "Classic Burger",
    category: "Delight",
    price : 300.00,
    imageUrl: "png2 (1).png",
    bgcolor: "bg-teal-500"
  },
  {
    id :3,
    title: "Mighty Burger",
    category: "Family",
    price : 400.00,
    imageUrl: "png3 (1).png",
    bgcolor: "bg-amber-500"
  },
]


const ProductList = () => {

  
  
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((products)=>(
        <div key={products.id} className={`flex shrink-0 m-6 relative overflow-hidden ${products.bgcolor} rounded-lg shadow-lg group max-w-sm`} >
        <svg className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform" viewBox="0 0 375 283" fill="none" style={{ opacity: 0.1 }}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
          </svg>
          <div className='relative pt-10 px-10 flex items-center justify-center group-hover:scale-100 transition-transform '>
          <div className='block absolutew-48 h-48 bottom-0 left-0 mb-24 ml-3'
          style={{background:"radial-gradient(black,transparent 50%)",transform:"rotate3d(0, 0, 1 20deg) scale3d(1, 0.6, 1 ", opacity:0.2}}>


          </div>
          <img className='relative w-50' src={products.imageUrl}
          alt={products.title}/>
          </div>

         <div className='relative text-white pb-6 mt-6 px-6'>
          <span className='block opacity-75 -mb-1'>{products.category}</span>
          <div className='flex justify-between'>   
            <span className='block font-semibold text-xl'> {products.title}   </span>   
            <span className='block bg-white rounded-full text-yellow-400 text-xs font-bold px-3 py-2 leading-none items-center'> {products.price}   </span>  
        
            </div>
         </div>

        </div>
      ))}
      
    </div>
  )
}

export default ProductList
