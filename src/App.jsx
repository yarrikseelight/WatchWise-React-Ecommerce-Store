import React from 'react';
import {About, Cart, Checkout, Error, HomeLayout, Landing, Login, Products, Register, SingleProduct} from "./pages/index"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const router = createBrowserRouter([
  {
    path:"/",
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index:true,
        element:<Landing/>,
      },
      {
        path:"products",
        element:<Products/>,
      },
      {
        path:"products/:id",
        element:<SingleProduct/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"checkout",
        element:<Checkout/>
      },
      {
        path:"about",
        element:<About/>
      },
    ] 
  },
  {
    path:"/login",
    element: <Login/>,
    errorElement: <Error/>, 
  },
  {
    path:"/register",
    element: <Register/>,
    errorElement: <Error/>, 
  },

])

const App = () => {
 return <>
 <ToastContainer position="top-center" autoClose={1500} />
 <RouterProvider router={router}/>
 </>
}

export default App;
