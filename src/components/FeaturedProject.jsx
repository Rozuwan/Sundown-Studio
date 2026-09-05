import { useState } from "react";

import sohoImage from "../assets/sohoImage.webp";
import nyfwImage from "../assets/nyfwImage.webp";
import kidvisionImage from "../assets/kidvisionImage.webp";
import makersImage from "../assets/makersImage.webp";
import anniversaryImage from "../assets/anniversaryImage.webp";
import sohonycImage from "../assets/sohonycImage.webp";
import airforceImage from "../assets/airforceImage.webp";

const FeaturedProject = () => {
  const projects = [
    { title: "SOHO 2023", image: sohoImage },
    { title: "NYFW Popup", image: nyfwImage },
    { title: "Play New Kidvision", image: kidvisionImage },
    { title: "Makers Studio HOI", image: makersImage },
    { title: "50th Anniversary", image: anniversaryImage },
    { title: "SOHO NYC", image: sohonycImage },
    { title: "Air Force 12021", image: airforceImage },
  ];

  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="py-9 mt-8">
      <p className="px-4 py-4 md:px-10 font-neue font-normal text-base flex items-center gap-2">
        <span className="inline-block rounded-full bg-primary h-5 w-5"></span>
        FEATURED PROJECTS
      </p>

      <div>
        {projects.map((project) => (
          <div
            key={project.title}
            onMouseEnter={() => setActiveProject(project)}
            onMouseLeave={() => setActiveProject(null)}
            className="relative md:px-10 md:py-10 font-neue text-[33px] font-bold py-6 px-4 border-b md:text-5xl hover:bg-linear-to-b hover:from-secondary hover:to-secondary"
          >
            <h2>{project.title}</h2>

            {/* Mobile image */}
            {activeProject?.title === project.title && (
              <img
                src={project.image}
                alt="image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-33 h-35 rounded-2xl object-cover pointer-events-none md:hidden"
              />
            )}
          </div>
        ))}
      </div>

      {/* Desktop image */}
      {activeProject && (
        <img
          src={activeProject.image}
          alt="image"
          className="hidden md:block fixed right-10 top-1/2 -translate-y-1/2 w-120 h-130 rounded-3xl object-cover pointer-events-none"
        />
      )}
    </div>
  );
};

export default FeaturedProject;