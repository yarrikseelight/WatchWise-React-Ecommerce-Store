import React from 'react';
import { HeroSection, Categories } from '../components/index.js';
import { useFetchContentmodel } from '../hooks/useFetchContentmodel.jsx';


const Landing = () => {
  const {data, isLoading, isError} = useFetchContentmodel("category")
  

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


  return (
    <main className='flex flex-col'>
       <HeroSection/>
       <Categories categories={data} />
    </main>
  );
};

export default Landing;
