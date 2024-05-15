import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const TestimonialCarousel = ({ testimonials }) => {
  const totalItemsWidth = testimonials.length * 200;
  return (
    // <div  className='w-full flex flex-col items-center border ' >
    //           <btn
    //       className="text-yellow-200 text-[25px] sm:text-[50px] w-[95%] sm:w-[700px] hover:border-yellow-200 hover:text-white cursor-pointer border flex items-center justify-center  border-white rounded-lg sm:ml-8 my-font-bold "
    //     >
    //       <p>Client Testimonials</p>
    //       {/* <MdOpenInNew /> */}
    //     </btn>
<Carousel
      responsive={responsive}
      autoPlay={true}
      infinite={true} // Ensure the carousel loops infinitely
      itemClass="my-carousel-item"
      containerClass="my-carousel-container"
      sliderClass="my-testimonial-slider"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      autoPlaySpeed={0}
      transitionDuration={5000}
      customTransition="transform 5000ms linear"
      arrows={false} 

      // customTransition="transform 0ms linear" // Customize the transition
 >
    {testimonials.map((testimonial, index) => (
          <div key={index} className=" w-full h-full text-white items-center justidy-center flex felx-col " >
            {/* <h1>{index}</h1> */}
            <img src={testimonial.image} alt={`Testimonial ${index + 1}`} className="w-full" />
          </div>
        ))}
</Carousel>
// </div>

  );
};

export default TestimonialCarousel;
