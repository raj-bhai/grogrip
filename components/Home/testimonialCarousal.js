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
    items: 3
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
  return (
<Carousel
 responsive={responsive}
 autoPlay={true}
 infinite={true}
 itemClass="carousel-item-padding-[20px]"
 >
    {testimonials.map((testimonial, index) => (
          <div key={index} className=" border h-[200px] w-[200px] ">
            {/* <img src={testimonial.image} alt={`Testimonial ${index + 1}`} className="w-full" /> */}
          </div>
        ))}
</Carousel>

  );
};

export default TestimonialCarousel;
