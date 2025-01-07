import React from 'react'
import {SingleCategory} from './index.js'


const Categories = ({categories}) => {

  return (
    <section className='flex flex-col items-center my-10'>
      <div className='flex flex-col items-center sm:text-center'>
        <h3 className='font-bold text-3xl text-center'>Browse The Range</h3>
        <p className='px-6 text-center'>Browse our categories to find the watch of your dreams.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 sm:gap-2 lg:gap-4'>
        {categories.map((item)=>{
          const {categoryName, image} = item.fields
          const id = item.sys.id
          return <SingleCategory key={id} category={categoryName} image={image}></SingleCategory>
        })}
      </div>
        
    </section>
  )
}

export default Categories