import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.log(error)

  if(error.status === 404){
    return (<main className='min-h-screen min-w-screen bg-[#FFF3E3]'>
      <div className='flex flex-col items-center justify-center min-h-screen min-w-screen '>
      <h1 className='text-center font-bold text-5xl text-[#B98E2F] mb-5 md:text-9xl'>404</h1>
        <h4 className='text-center font-bold text-3xl md:text-4xl'>page not found</h4>
        <p className='mt-3 text-lg'>Sorry, we couldn't find the page you're looking for</p>
        <Link to="/" className="bg-[#B98E2F] p-3 rounded-md text-slate-50 mt-5">Back to home</Link>
      </div>   
    </main>)
  }

  return (
    <main className='min-h-screen min-w-screen bg-[#FFF3E3]'>
      <div className='flex flex-col items-center justify-center min-h-screen min-w-screen '>
        <h4 className='text-center font-bold text-4xl'>There was an error :(</h4>
        <Link to="/" className="bg-[#B98E2F] p-3 rounded-md text-slate-50 mt-5">Back to home</Link>
      </div>   
    </main>

  )
}

export default Error