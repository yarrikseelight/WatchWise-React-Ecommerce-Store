import React from 'react'
import { clearCart } from '../../features/cartSlice.js'
import { closeModal } from '../../features/modalSlice.js'
import { useDispatch } from 'react-redux'


const Modal = () => {



  const dispatch = useDispatch();

  const handleCloseModal = (()=>{
    dispatch(closeModal())
  })
  
  const handleClearCart = (()=>{
    dispatch(clearCart())
    handleCloseModal()
  })

  


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="modal-box bg-base-200 p-8 rounded shadow-lg">
        <h3 className="font-bold text-lg">Are you sure you want to remove all items from your cart?</h3>
        <div className="modal-action flex justify-end gap-2 justify-center">
          <button className="btn btn-primary" onClick={handleCloseModal}>Cancel</button>
          <button className="btn bg-secondary" onClick={handleClearCart}>Clear Cart</button>
        </div>
      </div>
    </div>
  )
}


export default Modal