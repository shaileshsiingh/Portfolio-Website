"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/project-0.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/shaileshsiingh/Portfolio-Website",
    previewUrl: "/",
  },
  {
    id: 2,
    title: " Movie/IMDB Clone Website",
    description: "Created this Project which shows the list of popular movies from Api with movie details and also added Pagination to show more movies. Used Reactjs, tailwind css and other tools.",
    image: "/images/project-1.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/shaileshsiingh/PopularMovies",
    previewUrl: "https://earnest-gaufre-1298c4.netlify.app/",
  },
  {
    id: 3,
    title: "MailBox Application",
    description: "User can send and receive mails with user specific login. Used Redux toolkit",
    image: "/images/project-5.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/shaileshsiingh/MailBox-Client",
    previewUrl: "https://65cfb25c3b44ab11817969df--rad-horse-c57be9.netlify.app/",
  },
  {
    id: 4,
    title: "Linkedin Clone Application",
    description: "Project 4 description",
    image: "/images/project-2.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/shaileshsiingh/Linkedin-Clone",
    previewUrl: "https://linkedin-clone-a9087.web.app",
  },
  {
    id: 5,
    title: "Apple Webpage Clone",
    description: "Developed Apple Clone which is responsive for all the devices as a frontend challange.",
    image: "/images/project-3.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/shaileshsiingh/-totalitycorp-frontend-challenge-",
    previewUrl: "https://glittering-eclair-aad20d.netlify.app/",
  },
  {
    id: 6,
    title: "Trading Course Application",
    description: "Used Vanilla JS to create this webpage for one of my clients.",
    image: "/images/project-4.png",
    tag: ["All", "Vanilla JS"],
    gitUrl: "https://github.com/shaileshsiingh/Full-fledged-Trading-Website",
    previewUrl: "transcendent-beignet-fd7293.netlify.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
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
          name="React.js"
          isSelected={tag === "React.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Vanilla JS"
          isSelected={tag === "Vanilla JS"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;