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
    {
      title: "SOHO 2023",
      image: sohoImage,
    },
    {
      title: "NYFW Popup",
      image: nyfwImage,
    },
    {
      title: "Play New Kidvision",
      image: kidvisionImage,
    },
    {
      title: "Makers Studio HOI",
      image: makersImage,
    },
    {
      title: "50th Anniversary",
      image: anniversaryImage,
    },
    {
      title: "SOHO NYC",
      image: sohonycImage,
    },
    {
      title: "Air Force 12021",
      image: airforceImage,
    },
  ];

  const [activeProject, setActiveProject] = useState(null);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <>
      <div
        className="py-9"
        onMouseMove={(e) =>
          setMousePosition({
            x: e.clientX,
            y: e.clientY,
          })
        }
      >
        {/* Heading */}
        <p className="px-4 md:px-10 font-neue font-normal text-base flex items-center gap-2">
          <span className="inline-block rounded-full bg-primary h-5 w-5"></span>
          FEATURED PROJECTS
        </p>

        {/* Projects */}
        <div>
          {projects.map((project) => (
            <div
              key={project.title}
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
              className="md:px-10 md:p-8 font-neue text-[33px] font-bold py-4 px-4 border-b md:text-5xl hover:bg-[#ff9831]"
            >
              <h2>{project.title}</h2>
            </div>
          ))}
        </div>

        {/* Floating Image */}
        {activeProject?.image && (
          <img
            src={activeProject.image}
            alt=""
            className="pointer-events-none fixed z-50 h-100 w-100 rounded-3xl object-cover"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 200,
            }}
          />
        )}
      </div>
    </>
  );
};

export default FeaturedProject;