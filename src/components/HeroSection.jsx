import React from 'react';
import heroimg from "../assets/heroimg.jpg";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <>
      <div
        className="hero min-h-[60vh] relative"
        style={{
          backgroundImage: `url(${heroimg})`,
          backgroundSize: "cover", // Ensure the background image covers the area
          backgroundPosition: "center", // Keep the image centered
        }}
      >
        <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl sm:text-5xl font-bold">Discover The World's Finest Watches</h1>
            <p className="mb-5">
              Timeless elegance and superior craftsmanship, handpicked for your unique journey.
            </p>
            <Link to="/products">
              <button className="btn btn-primary">Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
