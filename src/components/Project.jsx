import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

import designImage from "../assets/designImage.webp";
import projectImage from "../assets/projectImage.webp";
import executionImage from "../assets/executionImage.webp";

const Project = () => {
  const [activeTab, setActiveTab] = useState("design");

  const content = {
    design: {
      title: "Design",
      text: "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
      image: designImage,
    },

    project: {
      title: "Project",
      text: "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
      image: projectImage,
    },

    execution: {
      title: "Execution",
      text: "We're with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.",
      image: executionImage,
    },
  };

  return (
    <div className="px-4 py-4 md:px-10 flex flex-col gap-10">
      {/* All Projects */}
      <button className="group relative self-start overflow-hidden rounded-full border border-black px-3 py-2 flex gap-2 items-center">
        {/* bg animation of btn */}
        <span className="absolute inset-0 translate-y-full bg-black transition-transform duration-300 group-hover:translate-y-0"></span>

        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white ">
          All Projects <FaArrowRight />
        </span>
      </button>

      {/* Project */}
      <div className="flex flex-col bg-black rounded-2xl md:flex-row">
        {/* Tabs + Text */}
        <div className="flex flex-col p-8 md:flex-1 md:justify-center">
          {Object.keys(content).map((slug) => (
            <h1
              key={slug}
              onClick={() => setActiveTab(slug)}
              className={`text-left text-3xl font-light border-l-2 cursor-pointer md:text-7xl md:font-medium ${
                activeTab === slug ? "text-white" : "text-gray-500"
              }`}
            >
              {content[slug].title}
            </h1>
          ))}
          {/* text */}
          <p className="mb-8 mt-5 text-sm text-white text-left md:mt-10 md:p-1">
            {content[activeTab].text}
          </p>
        </div>

        {/* Image */}
        <div className="md:w-2/5 md:min-h-200">
          <img
            src={content[activeTab].image}
            alt={content[activeTab].title}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
