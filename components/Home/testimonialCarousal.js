import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const TestimonialCarousel = ({ testimonials }) => {
  return (
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
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className=" w-full h-full text-white items-center justify-center flex flex-col "
        >
          <img
            src={testimonial.image}
            alt={`Testimonial ${index + 1}`}
            className="w-full "
          />
        </div>
      ))}
    </Carousel>
    // </div>
  );
};

export default TestimonialCarousel;
