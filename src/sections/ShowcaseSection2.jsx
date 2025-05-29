import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const pathaoRef = useRef(null);
    const bookRef = useRef(null);
    const myDirectoryRef = useRef(null);
    const projectListRef = useRef(null); // Added missing ref

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isFlipped, setIsFlipped] = useState(false); // Track flip state for mobile
    const [isMobile, setIsMobile] = useState(false); // Track device type
    const [currentIndex, setCurrentIndex] = useState(0);

    // Project data
    const projects = [
        {
        name: 'Book Management System',
        image: '/images/project2.png',
        description:
            'A web application to manage books, allowing users to add, update, and delete book records with ease.',
        technologies: 'React, Node.js, TailwindCSS',
        link: 'https://book-management-system.example.com',
        ref: bookRef,
        },
        {
        name: 'My Directory - A Startup Showcase App',
        image: '/images/project3.png',
        description:
            'A platform to showcase startups, providing details and networking opportunities for entrepreneurs.',
        technologies: 'React, Express, MongoDB',
        link: 'https://my-directory.example.com',
        ref: myDirectoryRef, // Fixed ref to myDirectoryRef
        },
        {
        name: 'My Directory - A Startup Showcase App',
        image: '/images/project3.png',
        description:
            'A platform to showcase startups, providing details and networking opportunities for entrepreneurs.',
        technologies: 'React, Express, MongoDB',
        link: 'https://my-directory.example.com',
        ref: myDirectoryRef, // Fixed ref to myDirectoryRef
        },
        {
        name: 'My Directory - A Startup Showcase App',
        image: '/images/project3.png',
        description:
            'A platform to showcase startups, providing details and networking opportunities for entrepreneurs.',
        technologies: 'React, Express, MongoDB',
        link: 'https://my-directory.example.com',
        ref: myDirectoryRef, // Fixed ref to myDirectoryRef
        },
        {
        name: 'My Directory - A Startup Showcase App',
        image: '/images/project3.png',
        description:
            'A platform to showcase startups, providing details and networking opportunities for entrepreneurs.',
        technologies: 'React, Express, MongoDB',
        link: 'https://my-directory.example.com',
        ref: myDirectoryRef, // Fixed ref to myDirectoryRef
        },
        {
        name: 'My Directory - A Startup Showcase App',
        image: '/images/project3.png',
        description:
            'A platform to showcase startups, providing details and networking opportunities for entrepreneurs.',
        technologies: 'React, Express, MongoDB',
        link: 'https://my-directory.example.com',
        ref: myDirectoryRef, // Fixed ref to myDirectoryRef
        },
    ];

    // Detect mobile/tablet on mount and resize
    React.useEffect(() => {
        const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed (768px for tablets/mobile)
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

        const cards = [pathaoRef.current, bookRef.current, myDirectoryRef.current];
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
        setIsFlipped(false); // Reset flip state when opening popup
    };

    // Close popup and reset flip state
    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedProject(null);
        setIsFlipped(false);
    };

    // Toggle flip on card click for mobile
    const handleCardClick = (e) => {
        e.stopPropagation(); // Prevent closing popup when clicking card
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
            <div ref={pathaoRef} className="first-project-wrapper">
                <div className="image-wrapper">
                <img src="/images/project1.png" alt="Pathao" />
                </div>
                <div className="text-content">
                <h2>
                    On-Demand Rides Made Simple with a Powerful, User-Friendly App
                    called Pathao
                </h2>
                <p className="text-white-50 md:text-xl">
                    An app built with React, Node.js, Express, & TailwindCSS for a
                    fast, user-friendly experience.
                </p>
                </div>
            </div>
            {/* Right */}
            <div className="project-list-wrapper2 overflow-hidden" ref={projectListRef}>
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
                      className="text-white"
                      onClick={handlePrev}
                    >
                      ←
                    </button>
                  )}
                  {currentIndex + 4 < projects.length && (
                    <button
                      className="text-white"
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

export default ShowcaseSection;