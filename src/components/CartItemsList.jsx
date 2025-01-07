import React from 'react';
import { CartItem } from "../components/index.js";
import { useSelector } from 'react-redux';

const CartItemsList = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <>
      <div className='bg-base-200 py-2 font-semibold lg:text-lg md:text-md text-sm px-4'>
        <div className='grid grid-cols-8'>
          <p className='col-span-4 sm:col-span-4 justify-self-start sm:justify-self-center'>Product</p>
          <p className='col-span-1 sm:col-span-2 justify-self-end sm:justify-self-start'>Price</p>
          <p className='col-span-2 sm:col-span-1 justify-self-end sm:justify-self-start pr-4 sm:pr-0'>Quantity</p>
          <p className='col-span-1 sm:col-span-1'>Subtotal</p>
        </div>
      </div>
      {cartItems.map((item) => (
        <CartItem item={item} key={item.ref} />
      ))}
    </>
  );
};

export default CartItemsList;
