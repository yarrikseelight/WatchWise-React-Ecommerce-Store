import React from 'react'
import { Link } from 'react-router-dom'

const SingleCategory = ({category, image}) => {
  return (
  
    <Link to={`/products?category=${category}`}>
    <div className=" mt-10 card bg-base-100 hover:scale-105 cursor-pointer">
        <figure className=" object-cover relative ">
            <img
            src={image.fields.file.url}
            className="rounded-md w-64 h-64 object-cover" />
            <p className='absolute bottom-0 right-2 opacity-40 text-white text-xs'>© Gustavo Kuri</p>
        </figure>
        <div className="card-body items-center text-center pt-3 lg:pt-6 ">
            <h2 className="card-title">{category}</h2>
        </div>
    </div>
    </Link>
    
  )
}

export default SingleCategory