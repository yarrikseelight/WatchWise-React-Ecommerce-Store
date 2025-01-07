import React from 'react'
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const CheckoutForm = () => {
    const navigate = useNavigate()
    const formRef = useRef();
    const cartTotal = useSelector((store)=> store.cart.total)

    const handleSubmission = ( ) => {
      formRef.current.requestSubmit()
    }

    //Redirects to cart page is cart is empty
    useEffect(() => {
    if (cartTotal === 0) {
      navigate('/');
    }
    }, [cartTotal]);

  return (<div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 my-12'>
    {/* Checkout form */}
        <div className='flex lg:justify-self-end justify-self-center mx-10 md:mx-0'>
          <form ref={formRef}>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <label className='block mb-2'>First Name*:</label>
                      <input required type="text" className='w-full p-2 border border-gray-300 rounded-md' />
                    </div>
                    <div>
                      <label className='block mb-2'>Last Name*:</label>
                      <input required type="text" className='w-full p-2 border border-gray-300 rounded-md' />
                    </div>
                  </div>
                  <div className='mt-4'>
                    <label className='block mb-2'>Email Address*:</label>
                    <input required type="email" className='w-full p-2 border border-gray-300 rounded-md' />
                  </div>
                  <div className='mt-4'>
                    <label className='block mb-2'>Phone Number*:</label>
                    <input required type="text" className='w-full p-2 border border-gray-300 rounded-md' />
                  </div>
                  <div className='mt-4'>
                    <label className='block mb-2'>Address*:</label>
                    <input required type="text" className='w-full p-2 border border-gray-300 rounded-md' />
                  </div>
                  <div className='mt-4'>
                    <label className='block mb-2'>City*:</label>
                    <input required type="text" className='w-full p-2 border border-gray-300 rounded-md' />
                  </div>
                  <div className='grid grid-cols-2 gap-4 mt-4'>
                    <div>
                      <label className='block mb-2'>State</label>
                      <input type="text" className='w-full p-2 border border-gray-300 rounded-md' />
                    </div>
                    <div>
                      <label className='block mb-2'>ZIP Code*:</label>
                      <input required type="text" className='w-full p-2 border border-gray-300 rounded-md' />
                    </div>
                  </div>           
          </form>
        </div>
    {/* Checkout summary */}
        <div className='bg-base-100 p-6 shadow-md rounded-lg lg:justify-self-start justify-self-center mt-12 lg:mt-'>
              <h2 className='text-2xl font-bold mb-4'>Order Summary</h2>
              <div className='mb-4'>
                <div className='flex justify-between'>
                  <span>Subtotal</span>
                  <span>{cartTotal} €</span>
                </div>
                <div className='flex justify-between'>
                  <span>Shipping</span>
                  <span>10 €</span>
                </div>
                <div className='flex justify-between mt-2 font-bold'>
                  <span>Total</span>
                  <span>{cartTotal+10} €</span>
                </div>
              </div>
              <div className='mt-4 p-4 bg-gray-100 rounded-md'>
                <p className='text-sm text-gray-700'>Please note that shipping times may vary.</p>
              </div>
              <button className='mt-6 w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600' onClick={handleSubmission}>
                Place Order
              </button>
          </div>
      </div>
  )
}

export default CheckoutForm