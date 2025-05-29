import React, { useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const pathaoRef = useRef(null);
    const bookRef = useRef(null);
    const myDirectoryRef = useRef(null);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Project data (you can expand this for more projects)
    const projects = [
        {
            name: "Book Management System",
            image: "/images/project2.png",
            description: "A web application to manage books, allowing users to add, update, and delete book records with ease.A web application to manage books, allowing users to add, update, and delete book records with ease.",
            technologies: "React, Node.js, TailwindCSS",
            link: "https://book-management-system.example.com",
            ref: bookRef,
        },
        {
            name: "My Directory - A Startup Showcase App",
            image: "/images/project3.png",
            description: "A platform to showcase startups, providing details and networking opportunities for entrepreneurs.",
            technologies: "React, Express, MongoDB",
            link: "https://my-directory.example.com",
            ref: bookRef,
        },
    ];

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

    // Function to open the popup
    const openPopup = (project) => {
        setSelectedProject(project);
        setIsPopupOpen(true);
    };

    // Function to close the popup
    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedProject(null);
    };

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
                        {projects.map((project, index) => (
                            <div key={index} className="project flex items-center gap-4" ref={project.ref}>
                                <div className='image-wrapper w-16 h-16 bg-[#ffefdb]'>
                                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg mt-0">{project.name}</h2>
                                    <p className="text-sm text-gray-400">{project.technologies}</p>
                                </div>
                                <button
                                    className="bg-white text-black rounded-full px-4 py-1"
                                    onClick={() => openPopup(project)}
                                >
                                    View
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {/* Popup Modal */}
            {isPopupOpen && selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-500"
    onClick={closePopup} >
                    <div class="flex items-center justify-center ">
                        <div class="group h-96 w-96 [perspective:1000px]">
                             {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-white-600 hover:text-gray-800"
                            onClick={closePopup}
                        >
                            ✕
                        </button>
                            <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div class="absolute inset-0">
                                <img class="h-full w-full rounded-xl object-fit shadow-xl shadow-black/40" src={selectedProject.image} alt="" />
                            </div>
                            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 p-6 text-start text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div class="flex min-h-full flex-col items-start text-slate-200">
                                    <h2 className="text-xl font-bold mb-2">{selectedProject.name}</h2>
                                    <p className="mb-4">{selectedProject.description}</p>
                                    <p className="text-sm mb-4">
                                        <strong>Technologies:</strong> {selectedProject.technologies}
                                    </p>
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Visit Project
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                </div>
            )}
        </section>
    )
}

export default ShowcaseSection