import { Tooltip } from "@mui/material";
import { GitHubIcon, UrlIcon } from "../assets/icons"; // Make sure these imports work correctly
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  CoffeeShop,
  NoImage,
  Photographer,
  Portfofio,
  Restaurants,
  SkinCare,
  Starbucks,
} from "../assets/images";

interface iProject {
  isDarkMode: boolean;
  activeColor?: string;
  activeShadow?: string;
  activeBorder?: string;
  activeBg?: string;
  activeHover?: string;
}

const Projects = ({
    isDarkMode,
    activeColor = "text-blue-600",
    activeShadow = "shadow-md",
    activeBorder = "border-gray-300",
    }: iProject) => {
    /* 
    Start:Declare Interface
    */
    const [expanded, setExpanded] = useState<number[]>([]);
    /* 
    End:Declare Interface
    */
    /* 
    Start:Declare Function
    */
    const toggle = (id: number): void => {
        setExpanded((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };
     /* 
    End:Declare Function
    */
    const projectDb = [
        {
            id: 1,
            image: Portfofio,
            projectName: "personal portfolio",
            discretion:
                "A modern, responsive personal portfolio website showcasing my skills, projects, and experience. Built using React with TypeScript, Tailwind CSS, and Material UI, it includes interactive sections, smooth animations, and a clean design to highlight my development work and contact information.",
            status: "success",
            gitHub_link: "https://github.com/vatnaNim/my-portfolio",
            lang: ["react.ts", "tailwind", "material UI", "java script"],
            url: "",
        },
        {
            id: 2,
            image: CoffeeShop,
            projectName: "Robert coffee(front-end)",
            discretion:
                'A front-end training project for a coffee shop website with a clean UI, responsive layout, and modular structure. This project was built for self-learning and runs locally using "npm run dev". It integrates with the "Robert Coffee (Back-End)" service for login authentication and uses REST APIs for data handling and communication.',
            status: "pending",
            gitHub_link: "https://github.com/vatnaNim/Robert-Coffee-Front-end",
            lang: ["nuxt.js", "tailwind", "nuxtUI", "java script", "type script"],
            url: "",
        },
        {
            id: 3,
            image: "",
            projectName: "Robert coffee(back-end)",
            discretion:
                "A backend training project built with Laravel and MySQL to support the Robert Coffee front-end. This project was developed as part of my self-learning journey to practice server-side development. It runs locally using XAMPP Control Panel v3.3.0 and provides RESTful APIs for authentication and data operations.",
            status: "pending",
            gitHub_link: "https://github.com/vatnaNim/Robert-Coffee-Back-end",
            lang: ["php", "Laraval", "mySql"],
            url: "",
        },
        {
            id: 4,
            image: Photographer,
            projectName: "photographer",
            discretion:
                'A Nuxt.js project created to deepen my understanding of modern frontend frameworks and REST API integration. The application showcases photographer profiles and testimonials, with dynamic data fetched from a backend API. It was developed as a self-learning exercise using TypeScript and Tailwind CSS. The project runs locally using "npm run dev" for the client and open one more terminal and run this command-line "npx json-server --watch static/data/photographyDb.json --port 3001" for the backend.',
            status: "success",
            gitHub_link: "https://github.com/vatnaNim/Personal_Photographer_Project",
            lang: ["vue", "nuxt.js", "tailwind", "java script", "type script"],
            url: "",
        },
        {
            id: 5,
            image: SkinCare,
            projectName: "skin care",
            discretion:
                "A static website built during my first experience learning a front-end framework. Developed using Nuxt.js, this project simulates a skin care product ordering site, helping me understand the fundamentals of Vue, Tailwind CSS, and component-based development. It was a personal learning project focused on layout structure, styling, and static content rendering.",
            status: "success",
            gitHub_link: "https://github.com/vatnaNim/Skin-care-Project",
            lang: ["vue", "nuxt.js", "tailwind", "java script", "type script"],
            url: "",
        },
        {
            id: 6,
            image: Restaurants,
            projectName: "Restaurants",
            discretion:
                "A static website built during my first experience learning a front-end framework. Developed using Nuxt.js, this project simulates a skin care product ordering site, helping me understand the fundamentals of Vue, Tailwind CSS, and component-based development. It was a personal learning project focused on layout structure, styling, and static content rendering.",
            status: "success",
            gitHub_link: "https://github.com/vatnaNim/Restaurants-Project",
            lang: ["vue", "nuxt.js", "tailwind", "java script", "type script"],
            url: "",
        },
        {
            id: 7,
            image: Starbucks,
            projectName: "starbuck",
            discretion:
                "A static website built during my first experience learning a front-end framework. Developed using Nuxt.js, this project simulates a skin care product ordering site and helped me understand the fundamentals of Vue, Tailwind CSS, and component-based development. It was a personal learning project focused on layout structure, styling, and rendering static content effectively.",
            status: "success",
            gitHub_link: "https://github.com/vatnaNim/Starbuck",
            lang: ["react.js", "tailwind", "java script"],
            url: "",
        },
        {
            id: 8,
            image: "",
            projectName: "Html school assignment",
            discretion:
                "A class assignment project created to demonstrate fundamental web development skills using HTML, CSS, and JavaScript. The project includes multiple static pages with structured layouts, interactive elements, and responsive styling, following the professor’s guidelines to fulfill academic requirements and reinforce core front-end concepts.",
            status: "success",
            gitHub_link: "https://github.com/vatnaNim/Starbuck",
            lang: ["HTML", "CSS", "java script"],
            url: "",
        },
    ];

  return (
    <>
    <Helmet>
        <title>VATNA - Front-end Developer</title>
        <meta name="description" content="Personal portfolio of VATNA" />
        <meta property="og:title" content="VATNA - Front-end Developer" />
        <meta property="og:description" content="Personal portfolio of VATNA" />
        <meta property="og:image" content={Portfofio} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/project" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VATNA - Front-end Developer" />
        <meta name="twitter:description" content="Personal portfolio of VATNA" />
        <meta name="twitter:image" content={Portfofio} />
    </Helmet>

    <div 
        className="px-4 sm:px-10 md:px-12 min-h-screen w-full mb-8">
        <div
            className="w-full md:w-[50%] flex items-center gap-x-4 sm:gap-x-6 mb-4 animate__fadeIn"
            style={{ animationDuration: "1s" }}>
            <span
                className={`${activeColor} text-lg-clamp sm:fs-5 font-semibold uppercase`}>
                my projects
            </span>
            <span className={`${activeBorder} border flex-1`} />
        </div>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 animate__fadeInUp"
                style={{ animationDuration: "1s" }}>
                {
                    projectDb.map((project) => {
                    const isExpanded = expanded.includes(project.id);
                    return (
                    <div
                        key={project.id}
                        className={`${
                        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white"
                        } rounded-md p-4 shadow-lg ${activeShadow} flex flex-col gap-2`}>
                        <div 
                            className="overflow-hidden rounded-md border border-gray-200">
                            <img
                                src={project.image || NoImage}
                                alt={project.projectName}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-48 object-scale-down"
                            />
                        </div>
                        <div 
                            className="mt-2">
                            <h2 
                                className={`text-xl font-semibold ${activeColor}`}>
                                {project.projectName}
                            </h2>
                            <p 
                                className={`text-sm mt-1 text-ellipsis overflow-hidden`}>
                                {
                                    isExpanded
                                    ? project.discretion
                                    : `${project.discretion.slice(0, 150)}...`
                                }
                                <button
                                    onClick={() => toggle(project.id)}
                                    aria-expanded={isExpanded}
                                    className={`ml-1 text-blue-600 underline cursor-pointer focus:outline-none`}>
                                    { isExpanded ? "Read Less" : "Read More"}
                                </button>
                            </p>
                        </div>
                        <div 
                            className="flex gap-1 flex-wrap mt-2">
                            {
                                project.lang.map((language, idx) => (
                                <span
                                key={idx}
                                className={`text-xs font-semibold border rounded-full px-2 py-1 ${activeColor} border-current`}
                                >
                                {language}
                                </span>
                            ))}
                        </div>
                        <div 
                            className="mt-auto flex gap-4 items-center pt-2 border-t border-gray-300">
                            {
                                project.gitHub_link && (
                                <Tooltip title="GitHub Repository" placement="top" arrow>
                                <a
                                    href={project.gitHub_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`cursor-pointer ${activeColor} hover:opacity-80`}>
                                    <GitHubIcon />
                                </a>
                                </Tooltip>
                            )}
                            {
                                project.url && (
                                <Tooltip title="Visit Website" placement="top" arrow>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`cursor-pointer ${activeColor} hover:opacity-80`}>
                                    <UrlIcon />
                                </a>
                                </Tooltip>
                            )}
                            <span
                                className={`capitalize text-sm font-semibold ${
                                project.status === "success" ? "text-green-600" : "text-yellow-600"
                                }`}>
                                {project.status}
                            </span>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    </>
  );
};

export default Projects;
