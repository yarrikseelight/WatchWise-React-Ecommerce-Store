import React from 'react'
import img from "../assets/headerimg.jpg"
import patek from "../assets/patek.png"
import {PageHeader} from "../components/index.js"
import { Link } from 'react-router-dom'

const About = () => {

  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'About' }
  ];


  return (<>
  
    <PageHeader title="About" breadcrumbs={breadcrumbs} img={img}/>
      <section className='max-w-screen h-auto flex flex-col items-center justify-center'>
        <div className="hero min-h-[70vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className='relative'>
              <img
                src={patek}
                className="max-w-sm rounded-lg shadow-2xl w-60 h-60 md:h-auto md:w-auto"/>
                <p className='absolute bottom-0 right-2 text-white opacity-60'>© Gustavo Kuri</p>
              </div>
              
              <div>
                <h1 className="text-5xl font-bold">Our Philosophy</h1>
                <p className="py-6">
                          At WatchWise, we are dedicated to sourcing the world's finest watches that resonate with your unique style and essence.
                          Each timepiece in our collection is carefully chosen for its craftsmanship, elegance, and lasting quality.
                          <br></br><br></br> 
                            We believe a watch is more than just a piece of jewelry; it's a reflection of your journey and achievements. 
                            Our mission is to offer you a curated selection of watches that you'll cherish for a lifetime – 
                            watches that embody timeless sophistication and hold sentimental value.
                          <br></br><br></br> 
                            Explore our collection and discover the watch that will become your companion, marking special moments and milestones along your path.
                            At WatchWise, we're here to help you find not just a watch, but an enduring symbol of your personal style and success.
                </p>
                <Link to="/products"><button className="btn border-solid border-2 border-amber-800">Find Perfect Piece For You</button></Link>
              </div>
            </div>
        </div>
      </section>
  

  
 

  
  </>)
}

export default About
