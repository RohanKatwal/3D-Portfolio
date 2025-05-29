import React, { useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const pathaoRef = useRef(null);
    const bookRef = useRef(null);
    const myDirectoryRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [pathaoRef.current, bookRef.current, myDirectoryRef.current];

        cards.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
            y: 50,
            opacity: 0,
            },
            {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),//increase the delay of each card 0.3
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
            },
            }
        );
        });
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* {left} */}
                    <div ref={pathaoRef} className='first-project-wrapper'>
                        <div className='image-wrapper'>
                            <img src="/images/project1.png" alt="Pathao" />
                        </div>
                        <div className='text-content'>
                            <h2>
                                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                                called Pathao
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                An app built with React Nodejs, Express, & TailwindCSS for a fast,
                                user-friendly experience.
                            </p>

                        </div>
                    </div>
                    {/* {right} */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={bookRef}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="/images/project2.png" alt="Book management Platform" />
                            </div>
                            <h2>Book Management System</h2>
                        </div>
                        <div className="project" ref={myDirectoryRef}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/images/project3.png" alt="My Directory" />
                            </div>
                            <h2>My Directory- A Startup Shocase app</h2>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ShowcaseSection