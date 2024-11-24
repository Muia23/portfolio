import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    shalomHospital,
    tesla,
    upande,
    fintechLimited,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    blackhole,
    grammer,
    mtaani,
    immaculate,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const hero = [
    {
        img: blackhole,
    }
]

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
        width: 100,
        height: 100,
    },
    {
        name: "CSS 3",
        icon: css,
        width: 100,
        height: 100,
    },
    {
        name: "JavaScript",
        icon: javascript,
        width: 100,
        height: 100,
    },
    {
        name: "TypeScript",
        icon: typescript,
        width: 100,
        height: 100,
    },
    {
        name: "React JS",
        icon: reactjs,
        width: 100,
        height: 100,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
        width: 100,
        height: 100,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
        width: 100,
        height: 100,
    },
    {
        name: "Node JS",
        icon: nodejs,
        width: 100,
        height: 100,
    },
    {
        name: "MongoDB",
        icon: mongodb,
        width: 100,
        height: 100,
    },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    //     width: 70,
    //     height: 70,
    // },
    {
        name: "git",
        icon: git,
        width: 100,
        height: 100,
    },
    {
        name: "figma",
        icon: figma,
        width: 100,
        height: 100,
    },
    {
        name: "docker",
        icon: docker,
        width: 100,
        height: 100,
    },
];

const experiences = [    
    {
        title: "Software Developer",
        company_name: "Fintech-Group",
        icon: fintechLimited,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Upande Limited",
        icon: upande,
        iconBg: "#E6DEDD",
        date: "Nov 2021 - Dec 2022",
        points: [
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Researching, designing, implementing, and managing software programs for various products.",
            "Identifying areas for modification in existing programs and developing necessary changes.",
            "Developing and maintaining quality assurance procedures.",
        ],
    }    
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Mtaani Car Wash",
        description:
            "A website for booking car wash sessions, featuring an admin panel for easy management of bookings, staff, and operations.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: mtaani,
        source_code_link: "https://github.com/",
    },
    {
        name: "Immaculate Nexus",
        description:
            "A user-friendly website that provides comprehensive information and resources for students, faculty, and prospective applicants.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: immaculate,
        source_code_link: "https://github.com/",
    },
    {
        name: "Grammer",
        description:
            "A modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: grammer,
        source_code_link: "https://github.com/",
    },
];

export { hero, services, technologies, experiences, testimonials, projects };
