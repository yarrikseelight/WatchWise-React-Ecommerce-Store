import React from 'react'
import {PageHeader, CheckoutForm} from "../components/index.js"
import img from "../assets/headerimg.jpg"


const Checkout = () => {


  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Cart', url:'/cart'},
    {label: 'Checkout', url: ''}
  ];




  return (<>
  <PageHeader title="Checkout" img={img} breadcrumbs={breadcrumbs}/>
  <CheckoutForm/>
  
  </>
  )
}

export default Checkout