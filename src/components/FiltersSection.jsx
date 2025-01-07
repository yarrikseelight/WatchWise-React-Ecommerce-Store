import React, { useEffect, useState } from 'react'
import FormSelect from './FormSelect'


const FiltersSection = ({ setFilters, metaData, filters}) => { 
 
  //store the filter values to set defaultValue for form
  const [selectedBrand, setSelectedBrand] = useState(filters.brand || '');
  const [selectedColor, setSelectedColor] = useState(filters.color || '');
  const [selectedCategory, setSelectedCategory] = useState(filters.category || '');
  

  //update filtervalue states when new filters are selected
  useEffect(() => {
    setSelectedBrand(filters.brand || '');
    setSelectedColor(filters.color || '');
    setSelectedCategory(filters.category || '');
  }, [filters]);


  
  const handleSubmit = (e) => { 
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const filteredData = Object.fromEntries(formData.entries())
    setFilters(filteredData)
  }

  

  return (
    <section className='flex justify-center'>
      <div className='bg-base-300 w-[100%] md:w-[70%] xl:w-[60%] rounded-lg p-2 mt-10'>
          <form name='filters-form' onSubmit={handleSubmit}>
            {/* Brand */}
            <FormSelect label="Brand" name="brand" list={metaData.brands} size="select-sm" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}></FormSelect>
            {/* Color */}
            <FormSelect label="Color" name="color" list={metaData.colors} size="select-sm" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}></FormSelect>
            <FormSelect label="Category" name="category" list={metaData.categories} size="select-sm" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}></FormSelect>
            <div className='flex gap-2'>
            <button type='submit' className='btn btn-primary mt-4'>Search</button>
            <button type='button' className='btn btn-secondary mt-4' onClick={()=>setFilters({})}>Clear Filters</button>
            </div>
            
          </form>
        </div>
    </section>
    
        
        
   
  )
}

export default FiltersSection