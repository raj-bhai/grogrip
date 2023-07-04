import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import grogrip from "../public/grogrip.svg";
import grogrip2 from "../public/grogrip2.svg";
import grogrip3 from "../public/grogrip3.svg";
import grogrip4 from "../public/grogrip4.svg";
import grogrip5 from "../public/grogrip5.svg";
import Header from "./Home/header";

const AboutUs = () => {
   const router = useRouter();
   const backgroundGradient = "bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]";
   const [selectedHeader, setSelectedHeader] = useState(1)
   const [headerStyle, setHeaderStyle] = useState(' bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]');

   useEffect(() => {
      const sections = document.querySelectorAll('.scroll-animation');

      const fadeIn = (entries, observer) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add('fade-in');
            } else {
               entry.target.classList.remove('fade-in');
            }
         });
      };

      const options = {
         threshold: 0.3,
      };

      const observer = new IntersectionObserver(fadeIn, options);

      sections.forEach((section) => {
         observer.observe(section);
      });

      return () => {
         observer.disconnect();
      };
   }, []);

   return (
      <>
         <Header
            className={headerStyle}
            selectedHeader={selectedHeader}
            onClickHome={() => {
               null
               // document.getElementById('home')?.scrollIntoView();
               // setSelectedHeader(1)
            }}
            onClickService={() => {
               null
               // document.getElementById('getStarted')?.scrollIntoView();
               // setSelectedHeader(2)
            }}
            onClickPricing={() => {
               null
               // document.getElementById('pricing')?.scrollIntoView();
               // setSelectedHeader(3)
            }}
            onClickContact={() => {
               null
               // document.getElementById('contact')?.scrollIntoView();
               // setSelectedHeader(4)
            }}
            onClickAbout={() => {
               null
               // document.getElementById('footer')?.scrollIntoView();
               // setSelectedHeader(5)
            }}
         />
         <section className={`w-full h-full transition ease-in-out delay-150 py-12 ${backgroundGradient}`}>
            {/* <div className="lg:flex lg:items-center lg:justify-between lg:mx-16 scroll-animation">
               <div className="textCont lg:text-left lg:w-3/4 text-center px-4">
                  <h2 className="sc-bwzfXH dymLSH pb-4 text-shadow my-font-bold drop-shadow-lg text-yellow-200 sm:text-[50px] text-[25px] sm:leading-[50px] text-left font-semibold">
                     About us
                  </h2>
                  <h3 className="text-white text-[0.7rem] lg:text-[1.4rem] font-Lato text-start">
                     Welcome to Grogrip, your one-stop solution for comprehensive digital services. We are a team of dedicated professionals
                     specializing in SEO services, YouTube automation, voice over, script writing, video editing, and graphic designing. With our
                     expertise and passion for excellence, we are here to transform your digital presence and help you stand out in today's
                     competitive landscape.
                  </h3>
               </div>
               <div className="relative flex items-center justify-center">
                  <Image src={grogrip2} width={400} height={300} alt="about us"></Image>
               </div>
            </div> */}

            {/* SEO */}
            <div className="lg:flex lg:items-center lg:justify-between lg:mx-16 lg:mt-20 scroll-animation">
               <div className="relative flex items-center justify-center">
                  <Image src={grogrip4} width={300} height={300} alt="about us"></Image>
               </div>
               <div className="textCont lg:text-right lg:w-3/4 text-right px-4">
                  <h2 className="sc-bwzfXH dymLSH pb-4 pt-2 text-shadow my-font-bold drop-shadow-lg text-yellow-200 sm:text-[50px] text-[25px] sm:leading-[50px] text-right font-semibold">
                     Header 1
                  </h2>
                  <h3 className="text-white text-[0.7rem] lg:text-[1.4rem] font-Lato text-start">
                     Our SEO experts are committed to driving organic traffic to your website and improving your search engine rankings. Through
                     in-depth keyword research, on-page optimization, quality link building, and content strategy, we ensure that your website gains
                     visibility and attracts targeted visitors who are more likely to convert into valuable customers.
                  </h3>
                  {/* <button className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow">
                     View More
                  </button> */}
               </div>
            </div>

            {/* YouTube Automation */}
            <div className="lg:flex lg:items-center lg:justify-between lg:mx-16 lg:mt-20 scroll-animation">
               <div className="textCont lg:text-left lg:w-3/4 text-center px-4">
                  <h2 className="sc-bwzfXH dymLSH pb-4 text-shadow my-font-bold drop-shadow-lg text-yellow-200 sm:text-[50px] text-[25px] sm:leading-[50px] text-left font-semibold">
                     Header2
                  </h2>
                  <h3 className="text-white text-[0.7rem] lg:text-[1.4rem] font-Lato text-start">
                     Unlock the full potential of YouTube with our cutting-edge automation solutions. Our YouTube automation services help you optimize your channel, automate video uploads, schedule posts,
                     and analyze performance metrics. By streamlining your YouTube workflow, we empower you to focus on creating compelling content while our automation tools handle the rest.
                  </h3>
                  {/* <button className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow">
                     View More
                  </button> */}
               </div>
               <div className="relative flex items-center justify-center">
                  <Image src={grogrip3} width={400} height={300} alt="about us"></Image>
               </div>
            </div>

            {/* Voice Over */}
            <div className="lg:flex lg:items-center lg:justify-between lg:mx-16 lg:mt-20 scroll-animation">
               <div className="relative flex items-center justify-center">
                  <Image src={grogrip5} width={400} height={300} alt="about us"></Image>
               </div>
               <div className="textCont lg:text-right lg:w-3/4 text-right px-4">
                  <h2 className="sc-bwzfXH dymLSH pb-4 pt-2 text-shadow my-font-bold drop-shadow-lg text-yellow-200 sm:text-[50px] text-[25px] sm:leading-[50px] text-right font-semibold">
                     header 3
                  </h2>
                  <h3 className="text-white text-[0.7rem] lg:text-[1.4rem] font-Lato text-start">
                     Enhance the impact of your videos, advertisements, e-learning modules, and more with professional voice over services. Our talented voice over artists bring scripts to life, capturing the right tone,
                     emotion, and clarity to engage your audience. Whether you need a soothing narration or an energetic promotional voice over, we have the voice talent to deliver exceptional results.
                  </h3>
                  {/* <button className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow">
                     View More
                  </button> */}
               </div>
            </div>

            {/* Script Writing */}
            <div className="lg:flex lg:items-center lg:justify-between lg:mx-16 lg:mt-20 scroll-animation">
               <div className="textCont lg:text-left lg:w-3/4 text-center px-4">
                  <h2 className="sc-bwzfXH dymLSH pb-4 text-shadow my-font-bold drop-shadow-lg text-yellow-200 sm:text-[50px] text-[25px] sm:leading-[50px] text-left font-semibold">
                     header 4
                  </h2>
                  <h3 className="text-white text-[0.7rem] lg:text-[1.4rem] font-Lato text-start">
                     Crafting captivating scripts is at the heart of effective storytelling. Our experienced scriptwriters excel at creating engaging narratives that captivate viewers and convey your message effectively. From video scripts to commercials, explainer videos to documentaries,
                     our team can transform your ideas into compelling scripts that leave a lasting impression.
                  </h3>
                  {/* <button className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow">
                     View More
                  </button> */}
               </div>
               <div className="relative flex items-center justify-center">
                  <Image src={grogrip} width={400} height={300} alt="about us"></Image>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutUs;
