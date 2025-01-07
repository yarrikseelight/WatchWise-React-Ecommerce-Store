import React from 'react'
import { closeModal } from '../../features/modalSlice.js'
import { useDispatch } from 'react-redux'


const NotificationModal = () => {

  const dispatch = useDispatch();
  const handleCloseModal = ()=>{
    dispatch(closeModal())
  }
  


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="modal-box bg-base-200 p-8 rounded shadow-lg">
        <h3 className="font-bold text-lg">We will let you know when the product is available again!</h3>
        <label className="input input-bordered flex items-center gap-2 mt-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg><input type="email" className="grow" placeholder="Email" /></label>
        <div className="modal-action flex justify-end gap-2 justify-center">
          <button className="btn btn-primary" onClick={handleCloseModal}>Cancel</button>
          <button className="btn bg-secondary" onClick={handleCloseModal}>Submit</button>
        </div>
      </div>
    </div>
  )
}


export default NotificationModal