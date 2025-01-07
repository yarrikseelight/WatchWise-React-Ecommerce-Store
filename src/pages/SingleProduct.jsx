import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {BreadCrumbHeader, ProductInfo, ProductDetails} from "../components/index.js"
import { useFetchItem } from '../hooks/useFetchItem'


const SingleProduct = () => {
  const {id} = useParams()
  const {data, isLoading, isError} = useFetchItem(id)
  const name = data?.fields?.product?.fields?.name || '';

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


  if (isLoading){
    return <main className='flex flex-col items-center justify-center h-screen'>
                <span className="loading loading-spinner loading-lg"></span>
          </main>
  }

  if (isError){
    return <main className='flex flex-col items-center justify-center'>
                <HeroSection/>
                <h4 className='py-10 text-2xl'>error loading categories... </h4>
          </main>
  }

  return (<>
    <BreadCrumbHeader name={name}></BreadCrumbHeader>
    <ProductInfo data={data}></ProductInfo>
    <ProductDetails data={data}></ProductDetails>
  </>
    
  )
}

export default SingleProduct