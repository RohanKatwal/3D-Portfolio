const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Satisfied Clients" },
  { value: 30, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Rohan's full stack contributions at Codedrops have strengthened our backend and improved overall system performance. His dedication and coding efficiency are highly appreciated.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer",
    date: "Aug 2022 - Present",
    responsibilities: [
      "Wrote reusable, testable, and efficient code for high-availability applications.",
      "Designed and developed low-latency, performant software solutions.",
      "Integrated databases like MongoDB and MySQL for data consistency.",
      "Collaborated with UI/UX designers to create seamless user experiences."
    ],
  },
  {
    review: "Rohan was instrumental in developing scalable backend services at Saga Innovation. His expertise in Node.js made a big impact during his tenure.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Node.js Developer / Backend Developer",
    date: "Apr 2022 - Aug 2022",
    responsibilities: [
      "Developed RESTful APIs using Node.js frameworks like Express.",
      "Collaborated with cross-functional teams to deliver software solutions.",
      "Implemented authentication and authorization for enhanced security."
    ],
  },
  {
    review: "As a Backend developer, Rohan quickly adapted to our workflows and contributed meaningfully to our CI/CD processes. A fast learner with great potential.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Python Developer",
    date: "Jan 2022 - Apr 2022",
    responsibilities: [
      "Utilized CI/CD to enhance the software development lifecycle.",
      "Developed Python-based solutions for internal tools and automation.",
      "Supported team in testing and deploying software updates."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

// Array of images to cycle through
const projectImages = [
    '/images/project1.png',
    '/images/project2.png',
    '/images/project3.png'
];

// Project data
const projects = [
    {
        name: 'Book Management System',
        image: '/images/project2.png',
        description:
            'A web application to manage books, allowing users to add, update, and delete book records with ease.',
        technologies: 'React, Node.js, TailwindCSS',
        link: 'https://book-management-system.example.com',
    },
    {
        name: 'My Directory - A Startup Showcase App',
        image: '/images/project3.png',
        description:
            'A platform to showcase startups, providing details and networking opportunities for entrepreneurs.',
        technologies: 'React, Express, MongoDB',
        link: 'https://my-directory.example.com',
        
    },
    {
        name: 'My Directory - A Startup Showcase App',
        image: '/images/project3.png',
        description:
            'A platform to showcase startups, providing details and networking opportunities for entrepreneurs.',
        technologies: 'React, Express, MongoDB',
        link: 'https://my-directory.example.com',
        
    },
    {
        name: 'My Directory - A Startup Showcase App',
        image: '/images/project3.png',
        description:
            'A platform to showcase startups, providing details and networking opportunities for entrepreneurs.',
        technologies: 'React, Express, MongoDB',
        link: 'https://my-directory.example.com',
        
    },
    {
        name: 'My Directory - A Startup Showcase App',
        image: '/images/project3.png',
        description:
            'A platform to showcase startups, providing details and networking opportunities for entrepreneurs.',
        technologies: 'React, Express, MongoDB',
        link: 'https://my-directory.example.com',
        
    },
    {
        name: 'My Directory - A Startup Showcase App',
        image: '/images/project3.png',
        description:
            'A platform to showcase startups, providing details and networking opportunities for entrepreneurs.',
        technologies: 'React, Express, MongoDB',
        link: 'https://my-directory.example.com',
        
    },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projectImages,
  projects
};