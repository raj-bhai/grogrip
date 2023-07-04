import React, { useEffect } from "react";
import Image from "next/image";
import blog1 from "../public/grogrip.svg";
import blog2 from "../public/grogrip2.svg";
import blog3 from "../public/grogrip3.svg";
import { useRouter } from "next/router";

const Blogs = () => {
    const router = useRouter()
    const backgroundGradient = "bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]";

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
    const blogs = [
        {
            title: "What is Youtube Automation",
            image: blog1,
            date: "June 1, 2023",
            author: "John Doe",
        },
        {
            title: "How to earn Passive Income from Youtube Automation",
            image: blog2,
            date: "May 15, 2023",
            author: "Jane Smith",
        },
        {
            title: "How to grow your youtube Channel",
            image: blog3,
            date: "April 28, 2023",
            author: "Michael Johnson",
        },
        {
            title: "How Thumbnail play very important role in youtube Autumation",
            image: blog1,
            date: "June 1, 2023",
            author: "John Doe",
        },
        {
            title: "Is SEO really very important?",
            image: blog2,
            date: "May 15, 2023",
            author: "Jane Smith",
        },
        {
            title: "How to choose perfect niche for my new youtube channel",
            image: blog3,
            date: "April 28, 2023",
            author: "Michael Johnson",
        },
        {
            title: "How to make faceless video",
            image: blog1,
            date: "June 1, 2023",
            author: "John Doe",
        },
        {
            title: "Top 10 rules to follow to get more reach in my youtube faceless video",
            image: blog2,
            date: "May 15, 2023",
            author: "Jane Smith",
        },
        {
            title: "Know Latest Algorithms youtube uses",
            image: blog3,
            date: "April 28, 2023",
            author: "Michael Johnson",
        },
    ];

    return (
        <section className={`py-12 ${backgroundGradient}`}>
            <div className="container mx-auto px-2">
                {/* <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animation">
                    {blogs.map((blog, index) => (
                        <div key={index} className=" bg-white relative rounded-lg shadow pt-2 pb-[50px]">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={600}
                                height={400}
                                className="rounded-t-lg "
                                style={{
                                    maxWidth: '100%',
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-green-800">{blog.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
                                <p className="text-gray-800">{blog.author}</p>
                            </div>
                            <button
                                className="absolute right-[20px] bottom-[10px] px-4 py-2 bg-green-500 hover:bg-yellow-600 text-white rounded-lg shadow"
                                onClick={() => {
                                    router.push('/blogDetail');
                                }}
                            >
                                Read
                            </button>
                        </div>
                    ))}
                </div> */}
                <div className="w-[100%] flex flex-wrap gap-8 justify-center " >
                    {
                        blogs.map((blog, index) => {
                            return (
                                <div className=" relative w-[350px] bg-white rounded-xl pb-[50px] " >
                                    <Image
                                        height={500}
                                        width={600}
                                        src={blog.image} className=" " />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2 text-green-800">{blog.title}</h3>
                                        <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
                                        <p className="text-gray-800">{blog.author}</p>
                                    </div>
                                    <button
                                        className="absolute right-[20px] bottom-[10px] px-4 py-2 bg-green-500 hover:bg-yellow-600 text-white rounded-lg shadow"
                                        onClick={() => {
                                            router.push('/blogDetail');
                                        }}
                                    >
                                        Read
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>





    );
};

export default Blogs;
