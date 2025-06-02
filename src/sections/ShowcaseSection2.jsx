import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projectImages,projects } from '../constants'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection2 = () => {
    const sectionRef = useRef(null);
    const leftmodalref = useRef(null);
    const rightmodalref = useRef(null);
    const projectListRef = useRef(null);
    const imageRef = useRef(null); // Reference for the animated image

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track current image



    // Image shuffling animation effect
    useEffect(() => {
        const interval = setInterval(() => {
            // Fade out current image
            gsap.to(imageRef.current, {
                opacity: 0,
                scale: 0.9,
                duration: 0.3,
                ease: "power2.inOut",
                onComplete: () => {
                    // Change image source
                    setCurrentImageIndex((prevIndex) => 
                        (prevIndex + 1) % projectImages.length
                    );
                    // Fade in new image
                    gsap.to(imageRef.current, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.inOut"
                    });
                }
            });
        }, 2500); // Change image every 2.5 seconds

        return () => clearInterval(interval);
    }, [projectImages.length]);

    // Detect mobile/tablet on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        const cards = [leftmodalref.current, rightmodalref.current];
        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                    },
                }
            );
        });

        // Initial animation for the image
        gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, delay: 0.5 }
        );
    }, []);

    // Navigation handlers
    const handleNext = () => {
        if (currentIndex + 4 < projects.length) {
            const newIndex = currentIndex + 4;
            setCurrentIndex(newIndex);
            gsap.fromTo(
                projectListRef.current,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5 }
            );
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 4;
            setCurrentIndex(newIndex);
            gsap.fromTo(
                projectListRef.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5 }
            );
        }
    };

    // Open popup and reset flip state
    const openPopup = (project) => {
        setSelectedProject(project);
        setIsPopupOpen(true);
        setIsFlipped(false);
    };

    // Close popup and reset flip state
    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedProject(null);
        setIsFlipped(false);
    };

    // Toggle flip on card click for mobile
    const handleCardClick = (e) => {
        e.stopPropagation();
        if (isMobile) {
            setIsFlipped(!isFlipped);
        }
    };

    const displayedProjects = projects.slice(currentIndex, currentIndex + 4);
    
    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* Left */}
                    <div ref={leftmodalref} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img 
                                className='object-fit'
                                ref={imageRef}
                                src={projectImages[currentImageIndex]} 
                                alt="Project Showcase" 
                                style={{ transition: 'all 0.3s ease' }}
                            />
                        </div>
                        <div className="text-content">
                            <h2>
                                Projects
                            </h2>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="project-list-wrapper2 overflow-hidden" ref={(el) => {
                        projectListRef.current = el;
                        rightmodalref.current = el;
                    }}>
                        {displayedProjects.map((project, index) => (
                            <div
                                key={index}
                                className="project flex items-center gap-4"
                                ref={project.ref}
                            >
                                <div className="rounded-xl w-16 h-16 bg-[#ffefdb]">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-fit"
                                    />
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
                        
                        {/* Navigation Arrows - Below the four projects */}
                        <div className="flex items-start gap-4 mt-1">
                            {currentIndex > 0 && (
                                <button
                                    className="text-white animate-bounce"
                                    onClick={handlePrev}
                                >
                                    ←
                                </button>
                            )}
                            {currentIndex + 4 < projects.length && (
                                <button
                                    className="text-white animate-bounce"
                                    onClick={handleNext}
                                >
                                    →
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Popup Modal */}
            {isPopupOpen && selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-500"
                    onClick={closePopup}
                >
                    <div className="flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <div className="group h-96 w-[90vw] max-w-[502px] [perspective:1000px]">
                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-2 text-white hover:text-gray-800 z-50"
                                onClick={closePopup}
                            >
                                ✕
                            </button>
                            <div
                                className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
                                    isMobile ? (isFlipped ? '[transform:rotateY(180deg)]' : '') : 'group-hover:[transform:rotateY(180deg)]'
                                }`}
                                onClick={handleCardClick}
                            >
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full rounded-xl object-fit shadow-xl shadow-black/40"
                                        src={selectedProject.image}
                                        alt={selectedProject.name}
                                    />
                                </div>
                                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 p-7 text-start text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <div className="flex min-h-full flex-col items-start text-slate-200">
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
    );
};

export default ShowcaseSection2;