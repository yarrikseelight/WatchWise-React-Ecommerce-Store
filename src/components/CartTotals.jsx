import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../features/modalSlice'
import { Link } from 'react-router-dom'



const CartTotals = () => {
  const total = useSelector((store)=>store.cart.total)

  const dispatch = useDispatch()
  const handleOpenModal = (()=>{
    dispatch(openModal())
  })

  
 

  return (<>
<div className='color-main flex flex-col justify-center items-center py-8 bg-base-200'>
  <h1 className='text-2xl font-bold'>Cart Totals</h1>
  <div className='my-12 text-xl flex gap-12 justify-center items-center'>
    <p className='font-semibold text-md tex-black'>Total</p><p className='text-md'>{total}€</p>
  </div>
  <Link className='btn text-lg px-8 mb-4 btn-primary ' to="/checkout">Checkout</Link>
  <button className='btn text-lg px-8 mb-4 btn-secondary ' onClick={handleOpenModal}>Clear Cart</button>
</div>   
    </>
  )
}

export default CartTotals