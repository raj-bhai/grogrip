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
                     What is Lorem Ipsum?
                  </h2>
                  <h3 className="text-white text-[0.7rem] lg:text-[1.4rem] font-Lato text-start">
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                     The standard Lorem Ipsum passage, used since the 1500s
                  </h2>
                  <h3 className="text-white text-[0.7rem] lg:text-[1.4rem] font-Lato text-start">
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                     1914 translation by H. Rackham
                  </h2>
                  <h3 className="text-white text-[0.7rem] lg:text-[1.4rem] font-Lato text-start">
                     "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
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
                     Why do we use it?
                  </h2>
                  <h3 className="text-white text-[0.7rem] lg:text-[1.4rem] font-Lato text-start">
                     It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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
