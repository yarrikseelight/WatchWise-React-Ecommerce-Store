import React, { useEffect } from 'react'
import {PageHeader, CartTotals, CartItemsList} from "../components/index.js"
import CartModal from "../components/modals/CartModal.jsx"
import img from "../assets/headerimg.jpg"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Cart' }
];

const Cart = () => {
  const amount = useSelector((store)=>store.cart.amount)
  const isOpen = useSelector((store)=>store.modal.isOpen)

  if ( amount > 0){
    return (<>
    { isOpen ? <CartModal></CartModal> : <span></span>}
      <PageHeader title="Cart" breadcrumbs={breadcrumbs} img={img}/>
      <div className=' w-[100wv] xl:mx-[8%]'>
        <div className='lg:mt-8 grid gap-8 lg:grid-cols-12'>
            <div className='xl:col-span-9 pt-8  col-span-12 px-2'>
              <CartItemsList></CartItemsList>
            </div>
            <div className='xl:col-span-3 lg:py-8 col-span-12 px-10 pb-4'> 
              <CartTotals></CartTotals>
            </div>
        </div>
      </div>
  
      </>
    )
  } else {
    return(<>
    <PageHeader title="Cart" breadcrumbs={breadcrumbs} img={img}/>
      <div className='flex flex-col gap-10 justify-center items-center h-[60vh]'>
          <h1 className='font-bold text-3xl text-center md:text-left px-4 '>There are no items in your cart.</h1>
          <Link to="/products" className='btn text-lg px-8 mb-4 bg-transparent border-amber-800'>Go shopping</Link>
      </div>
      </>)

  }
  

  
}

export default Cart
