import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import grogrip from "../public/grogrip6.svg";

const ContactUs = () => {
   const backgroundGradient = " bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]";

   return (
      <>
         <section className={`w-full h-full transition ease-in-out delay-150 py-12  ${backgroundGradient}`}>
            <div className="lg:flex lg:items-center lg:justify-between lg:mx-16 ">
               <div className="textCont lg:text-left lg:w-3/4 text-center px-4">
                  <h1 className="sc-bwzfXH dymLSH pb-4 text-shadow my-font-bold drop-shadow-lg text-yellow-200 sm:text-[50px] text-[25px] sm:leading-[50px] text-left font-semibold">
                     Contact
                  </h1>
                  <h3 className="text-white text-[0.7rem] lg:text-[1.3rem] font-Lato text-start">
                     Thank you for your interest in Grogrip! We're excited to hear from you and assist you with any inquiries or services you require.
                     Please feel free to reach out to us using the contact information provided below. Our dedicated team is ready to help you achieve
                     your digital goals.
                  </h3>
               </div>
               <div className="relative flex items-center justify-center">
                  <Image src={grogrip} width={300} height={300} alt="about us"></Image>
               </div>
            </div>

            <div className="lg:flex lg:items-center lg:justify-between lg:mx-16 mt-5">
               <div className="textCont lg:text-right lg:w-3/4 text-center px-4">
                  <h2 className="sc-bwzfXH dymLSH pb-4 text-shadow my-font-bold drop-shadow-lg text-yellow-200 sm:text-[23px] text-[25px] sm:leading-[50px] text-left font-semibold">
                     Contact Information
                  </h2>
                  <h3 className="text-white text-[0.7rem] lg:text-[1.4rem] font-Lato text-start">
                     <h2>Phone: 8076455801</h2>
                     <h2> Email: support@grogrip.com</h2>
                     <h2>Address: 123 Main Street, City, State, ZIP</h2>
                  </h3>
               </div>
            </div>

            <div className="lg:flex lg:items-center lg:justify-between lg:mx-16 mt-9 ">
               <div className="textCont lg:text-right lg:w-3/4 text-center px-4">
                  <h2 className="sc-bwzfXH dymLSH pb-4 text-shadow my-font-bold drop-shadow-lg text-yellow-200 sm:text-[23px] text-[25px] sm:leading-[50px] text-left font-semibold">
                     Why Choose Grogrip?
                  </h2>
                  <h3 className="text-white text-[0.7rem] lg:text-[1.4rem] font-Lato text-start">
                     <h2 className="lg:text-[1.1rem]">
                        <span className="text-shadow my-font-bold drop-shadow-lg text-yellow-200 ">Expertise :</span> With years of experience in the
                        industry, our team of professionals brings extensive knowledge and expertise to every project we undertake. We stay updated
                        with the latest trends and techniques to deliver top-notch digital solutions.
                     </h2>
                     <h2 className="lg:text-[1.1rem]">
                        <span className="text-shadow my-font-bold drop-shadow-lg text-yellow-200 ">Customer Satisfaction :</span> At Grogrip, customer
                        satisfaction is our top priority. We work closely with our clients, understanding their unique needs and objectives, to
                        provide tailored solutions that meet and exceed their expectations.
                     </h2>
                     <h2 className="lg:text-[1.1rem]">
                        <span className="text-shadow my-font-bold drop-shadow-lg text-yellow-200 ">Results-Driven Approach :</span> We are committed
                        to delivering measurable results. Whether it's improving search engine rankings, optimizing YouTube channels, creating
                        captivating videos, or designing eye-catching graphics, we focus on driving tangible outcomes for our clients
                     </h2>
                     <h2 className="lg:text-[1.1rem]">
                        <span className="text-shadow my-font-bold drop-shadow-lg text-yellow-200 ">Customized Solutions :</span> We understand that
                        every business is unique, and we believe in offering customized solutions that are specifically tailored to your brand,
                        industry, and target audience. We take the time to understand your goals and develop strategies that align with your vision.
                     </h2>
                     <h2 className="lg:text-[1.1rem]">
                        <span className="text-shadow my-font-bold drop-shadow-lg text-yellow-200 ">Exceptional Support :</span> Our team is here to
                        provide exceptional support throughout your project journey. From the initial consultation to the final delivery, we ensure
                        clear communication, timely updates, and a seamless experience for our clients.
                     </h2>
                  </h3>
               </div>
            </div>
         </section>
      </>
   );
};
export default ContactUs;
