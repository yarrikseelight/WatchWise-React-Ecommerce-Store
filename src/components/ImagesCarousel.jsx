import React, { useState } from "react";

function ImagesCarousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel w-full relative justify-center">
      <div className="flex items-center justify-between gap-8">
        {images.length > 1 && (<button onClick={handlePreviousSlide} className="btn btn-circle z-10">❮</button>)}
        <div className="w-full flex items-center justify-center">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item pt-6 ${index === currentSlide ? "block" : "hidden"}`}>
              <img src={image.fields.file.url} className="h-96 w-96 object-contain" />
            </div>
          ))}
        </div>
        {images.length > 1 && (<button onClick={handleNextSlide} className="btn btn-circle z-10">❯</button>)}
      </div>
    </div>
  );
}

export default ImagesCarousel;





// import React from "react";

// function ImagesCarousel({ images }) {
//   return (
//     <div className="carousel w-full">
//       {images.map((image, index) => {
//         const prevSlide = index === 0 ? images.length - 1 : index - 1;
//         const nextSlide = index === images.length - 1 ? 0 : index + 1;
//         return (
//           <div key={index} id={`slide${index}`} className="carousel-item relative w-full h-[60%] justify-center">
//             <img src={image.fields.file.url} className="h-96 w-96 mt-5"/>
//             <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between ">
//               <a href={`#slide${prevSlide}`} className="btn btn-circle">❮</a>
//               <a href={`#slide${nextSlide}`} className="btn btn-circle">❯</a>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default ImagesCarousel;

