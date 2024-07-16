"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js</li>
        <li>Javascript/ES6</li>
        <li>DSA</li>

        <li>HTML/CSS</li>
        <li>Redux</li>
        <li>Firebase</li>
        <li>Next.js</li>
        <li>Rest API</li>
        <li>TailwindCSS/Bootstrap</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <h1 className="text-lg">Frontend Developer</h1>
        <p>Champions Academy, Pune(From 4th March,2022 to 30th June,2024)</p>
        <li>Successfully implemented a data-driven approach to optimize
student-side dashboard and website functionalities
</li>
<li>Increased web traffic and content engagement by 30%
Skilled in troubleshooting and debugging tasks, leading to improved
overall performance by 30%
</li>
<li>Provided essential support to the team during the development
phase</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Development with DSA from Sharpener Institute Bootcamp</li>
        <li>Bcom(P) from Shaheed Bhagat Singh College, University of Delhi</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Development with DSA by Sharpener</li>
        <li>Frontend Development with React by Coursera</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
      
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image1.png" width={500} height={500} alt="about" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Bootsrap, TailwindCSS, Firebase,
            Rest API, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton 
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
                
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >

              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8" >
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

