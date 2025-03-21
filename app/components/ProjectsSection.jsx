"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Turito Main Website",
    description: "Working on the main website of Turito, handling student sites, recently integrated AI Prompts and Payment Gateway.",
    image: "/images/project-9.png",
    tag: ["All", "React.Js"],
    gitUrl: "https://github.com/shaileshsiingh/Portfolio-Website",
    previewUrl: "https://test.turito.com/ai-tutor-page",
  },
  {
    id:2,
    title: "Tangerine Luxury Ecommerce",
    description: "Freelance Project, working on the Tangerine Luxury Ecommerce website, as a sole Frontend Developer using Reactjs, TailwindCSS, and more.",
    image: "/images/project-10.png",
    tag: ["All", "React.Js"],
    gitUrl: "https://github.com/shaileshsiingh/Portfolio-Website",
    previewUrl: "https://tang-cloth.vercel.app/",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "My Portfolio app developed with Nextjs, Reactjs, TailwindCSS, HeroIcons, and more.",
    image: "/images/project-1.png",
    tag: ["All", "React.Js"],
    gitUrl: "https://github.com/shaileshsiingh/Portfolio-Website",
    previewUrl: "/",
  },
  {
    id: 4,
    title: " Movie Website",
    description: "Developed this Project which shows the list of popular movies from Api with movie details and also added Pagination to show more movies. Used Reactjs, tailwind css and other tools. Favourite page is to sort, search and filter",
    image: "/images/project-0.png",
    tag: ["All", "React.Js"],
    gitUrl: "https://github.com/shaileshsiingh/Movie-Fav-",
    previewUrl: "https://movie-fav.vercel.app/",
  },
  {
    id: 5,
    title: "WatchList Application",
    description: "Developed this Movie WatchList where user can add to the watchlist page which will also reflect in the sidebar, Added Auhentication with Firebase and Redux.",
    image: "/images/project-2.png",
    tag: ["All", "React.Js"],
    gitUrl: "https://github.com/shaileshsiingh/WatchList",
    previewUrl: "https://watch-list-cyan.vercel.app/",
  },
  {
    id: 6,
    title: "Step Form Application",
    description: "Used Reactjs and TailwindCSS to build this smooth Step Form which is Responsive.",
    image: "/images/project-6.jpg",
    tag: ["All", "React.Js"],
    gitUrl: "https://github.com/shaileshsiingh/StepForm",
    previewUrl: "https://step-form-phi.vercel.app/",
  },
 
  {
    id: 7,
    title: "Trading Course Application",
    description: "Used Vanilla JS to create this webpage for one of my clients.",
    image: "/images/project-4.png",
    tag: ["All", "Vanilla JS"],
    gitUrl: "https://github.com/shaileshsiingh/Full-fledged-Trading-Website",
    previewUrl: "https://transcendent-beignet-fd7293.netlify.app",
  },
 
  {
    id: 8,
    title: "MailBox Application",
    description: "User can send and receive mails with user specific login. Used Redux toolkit.",
    image: "/images/project-5.png",
    tag: ["All", "React.Js"],
    gitUrl: "https://github.com/shaileshsiingh/MailBox-Client",
    previewUrl: "https://65cfb25c3b44ab11817969df--rad-horse-c57be9.netlify.app/",
  },
 
  {
    id: 9,
    title: "Apple Homepage",
    description: "Developed Apple Clone which is responsive for all the devices as a frontend challange.",
    image: "/images/project-3.png",
    tag: ["All", "Vanilla JS"],
    gitUrl: "https://github.com/shaileshsiingh/-totalitycorp-frontend-challenge-",
    previewUrl: "https://glittering-eclair-aad20d.netlify.app/",
  },
  {
    id: 10,
    title: "Music Streaming Application",
    description: "Used Reactjs, Redux, Firebase Authentication, LazyLoading, Routing, Playback Controls and more to build this.",
    image: "/images/project-7.png",
    tag: ["All", "React.Js"],
    gitUrl: "https://github.com/shaileshsiingh/music-app",
    previewUrl: "https://music-app-nu-lilac.vercel.app",
  },
  {
    id: 11,
    title: "Live Weather Application",
    description: "Used HTML, CSS and Javascript to build this which shows realtime details, conditions, and graph of different times.",
    image: "/images/project-8.png",
    tag: ["All", "Vanilla JS"],
    gitUrl: "https://github.com/shaileshsiingh/weatherapp",
    previewUrl: "https://weatherappfrontendhomellc.netlify.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React.Js"
          isSelected={tag === "React.Js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Vanilla JS"
          isSelected={tag === "Vanilla JS"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: index * 0.6 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;