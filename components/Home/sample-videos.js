import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCarousel from "./testimonialCarousal";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const testimonials = [
    {
      image:
        "https://res.cloudinary.com/dm9iuudyc/image/upload/v1715800851/cashcow-portfolio/oX_vbdvaySA-HD_zlyqrh.jpg",
        title : "50 Cent And Katt Williams Leak Video Of Diddy's Fr3ak 0ff With Kevin Hart"
    },
    {
      image:
        "https://res.cloudinary.com/dm9iuudyc/image/upload/v1715800851/cashcow-portfolio/ndTktsXlN7w-HD_vuymaj.jpg",
        title : "Crazy Capoeira Master Setting the UFC on Fire - Michel Pereira"
    },
    {
      image:
        "https://res.cloudinary.com/dm9iuudyc/image/upload/v1715800851/cashcow-portfolio/z68HmEOqKVk-HD_rtxk1x.jpg",
        title : "Police Training is Insane"
    },
    {
      image:
        "https://res.cloudinary.com/dm9iuudyc/image/upload/v1715800851/cashcow-portfolio/2mDKdlmUuPE-HD_khwzhx.jpg",
        title : "20 WEIRD Rules That Amish Women Have To Follow"
    },
    {
      image:
        "https://res.cloudinary.com/dm9iuudyc/image/upload/v1715800850/cashcow-portfolio/enXDwXXkZaA-HD_sq4iap.jpg",
        title : "When Cops Find DUMB Drug Smugglers"
    },
    {
      image:
        "https://res.cloudinary.com/dm9iuudyc/image/upload/v1715800851/cashcow-portfolio/6ZDUgHLd-Z0-HD_rvgom1.jpg",
        title : "Woman Suddenly Surrounded by Sharks"
    },
    {
      image:
        "https://res.cloudinary.com/dm9iuudyc/image/upload/v1715800850/cashcow-portfolio/gcNh6c15k24-HD_m4thet.jpg",
        title : "O LUTADOR DE CAPOEIRA MAIS TEMIDO NO MMA!"
    },
    {
      image:
        "https://res.cloudinary.com/dm9iuudyc/image/upload/v1715800850/cashcow-portfolio/h1mzWIE8Rgc-HD_wubith.jpg",
        title : "Every Drug Dealer’s Worst Nightmare"
    },
    {
      image:
        "https://res.cloudinary.com/dm9iuudyc/image/upload/v1715800850/cashcow-portfolio/JFYnZAZHlaA-HD_osuemu.jpg",
        title : "How BLACKPINK’s Lisa spends her Many millions"
    },
    {
      image:
        "https://res.cloudinary.com/dm9iuudyc/image/upload/v1715800850/cashcow-portfolio/gbOjTrGgD5Q-HD_njzcqo.jpg",
        title : "Terrifying Sounds and End Times Trumpets In USA TODAY! - Is This The Ultimate Warning?"
    },
    {
      image:
        "https://res.cloudinary.com/dm9iuudyc/image/upload/v1715800850/cashcow-portfolio/PIVPT6v7HSI-HD_fcqdfy.jpg",
        title : "When Simple Arrests Turn Into Complete Chaos!"
    },
    {
      image:
        "https://res.cloudinary.com/dm9iuudyc/image/upload/v1715800849/cashcow-portfolio/XGx2zgooL8Y-HD_vpsm6v.jpg",
        title : "Melhores Momentos de Michel Pereira | UFC Vegas 55"
    },
    // Add more testimonials as needed
  ];

const SampleVideos = () => {
  return (
    <>
        <div className="w-full flex flex-col items-center py-8 ">
      <div className=" sm:w-[700px] w-full p-4 text-center  my-font-bold text-white ">
        <h1 className=" sm:text-[40px] text-[22px]  ">
          Real Videos from Real People
        </h1>
        <h2 className=" sm:text-[25px] text-[15px] ">
          We have helped thousands of people upload their first faceless video
          on YouTube and start earning money
        </h2>
      </div>
    </div>
    <Carousel
      responsive={responsive}
      autoPlay={true}
      // infinite={true} // Ensure the carousel loops infinitely
      itemClass="my-carousel-item  p-2 flex flex-col items-start text-left text-[#fff] "
      containerClass="my-carousel-container border-0 mb-8 bg-null text-left "
      sliderClass="my-testimonial-slider border-0"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      autoPlaySpeed={0}
      transitionDuration={5000}
      customTransition="transform 5000ms linear"
      arrows={false}
      rewind={true}
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className=" text-white items-start justify-start text-left flex flex-col my-font "
        >
          <img
            src={testimonial.image}
            alt={`Testimonial ${index + 1}`}
            className="w-full sm:rounded-[30px] rounded-[10px] elevation-4 "
          />
          <h1 className=" mt-[10px] sm:ml-[20px] ml-[10px] " >{testimonial.title}</h1>
        </div>
      ))}
    </Carousel>
    </>
  );
};

export default SampleVideos;
