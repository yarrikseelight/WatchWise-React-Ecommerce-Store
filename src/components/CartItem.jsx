import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { removeItem, removeOne, addOne } from '../features/cartSlice.js'


const CartItem = ({item}) => {
  const {color, images, ref, name, price, stock, brand, quantity, totalPrice} = item

  const dispatch = useDispatch()
  const handleDeleteItem = (()=>{
    dispatch(removeItem(item))
  })

  const handleAddOne = (()=>{
    dispatch(addOne(item))
  })

  const handleRemoveOne = (()=>{
    dispatch(removeOne(item))
  })
 


  return (
    <div className='my-12 lg:text-lg md:text-md text-sm'>
      <div className='grid grid-cols-8 gap-4 items-center'>
        <div className='col-span-5 md:col-span-4 flex items-center md:pl-8 gap-4'>
          <img src={images[0].fields.file.url} alt="" className='h-16 w-16 md:w-28 md:h-28 lg:h-36 lg:w-36'/>
          <p className='font-semibold opacity-70'>{brand}  {name}</p>
        </div>
        <p className='font-semibold col-span-1 md:col-span-2 opacity-70'>{price}€</p>
        <div className='flex flex-col'>
          {quantity<stock ? <IoIosArrowUp className='cursor-pointer' onClick={handleAddOne}/> : <IoIosArrowUp className='cursor-pointer opacity-30'/>}
          
          <p className='font-semibold col-span-1 md:col-span-1 opacity-70 ml-1'>{quantity}</p>
          <IoIosArrowDown className='cursor-pointer' onClick={handleRemoveOne}/>
        </div>
        <div className='col-span-1 md:col-span-1 flex flex-col gap-2 opacity-70 items-center sm:flex-row '>
          <p className='font-semibold '>{totalPrice}€</p>
          <RiDeleteBinLine className='min-h-4 min-w-4 cursor-pointer' onClick={handleDeleteItem}/>
        </div>
        
        
      </div>
    </div>
  )
}

export default CartItem