import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "RentOrbit",
    description: " Rental Platform where enants can search, request visits, book, and leave rooms; landlords can list properties, confirm visits, andmanagebookings.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    image: "https://i.postimg.cc/zG9V6smw/Rent-Orbit-Google-Chrome-13-07-2025-22-32-24.png",
    github: "https://github.com/princetiwari26/RentOrbit",
    demo: "https://rent-orbit.onrender.com/",
  },
  {
    title: "Resume Generator",
    description: " User-friendly form inputs, real-time preview, PDF generation, and data persistence for future edits.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "https://i.postimg.cc/PrJJxXTz/Resume-Generator-Google-Chrome-13-07-2025-22-31-49.png",
    github: "https://github.com/princetiwari26/Resume-Generator",
    demo: "https://resume-generator-1-ag1w.onrender.com/",
  },
  {
    title: "Personal Finance Visualizer",
    description: "A full-featured expense tracking application with basic transaction management, category-based tracking, and budgeting features.",
    tech: ["React", "Express", "MongoDB"],
    image: "https://i.postimg.cc/N06fVLkY/Rent-Orbit-Google-Chrome-13-07-2025-22-32-56.png",
    github: "https://github.com/princetiwari26/Personal-Finance-Visualizer",
    demo: "https://personal-finance-visualizer-liart.vercel.app/",
  },
  {
    title: "Blood Donation Finder",
    description: " Users can register, log in, donate, or request blood. Recipients can search for donors, while donors manage availability.",
    tech: ["React", "Express", "MongoDB"],
    image: "https://i.postimg.cc/SQW7rGMt/pro1-bd.png",
    github: "https://github.com/princetiwari26/Blood-Donation-Finder",
  },
  {
    title: "Real Time Chatting Website",
    description: "A real-time chat application with user authentication, instant messaging, and responsive design.",
    tech: ["React", "Express", "MongoDB"],
    image: "https://i.postimg.cc/HW4X5sqq/pro3-cw.png",
    github: "https://github.com/princetiwari26/Chat-Website",
  },
  {
    title: "To-Do Website",
    description: "The app allows users to create, update, and delete tasks, providing a streamlined way to manage daily activities.",
    tech: ["React", "Express", "MongoDB"],
    image: "https://i.postimg.cc/63V2dYmr/pro5-td.png",
    github: "https://github.com/princetiwari26/ToDo-web-from-react-with-backend",
  },
];

const Projects = () => {
  return (
    <div className="bg-white/5 p-2 md:p-10 md:px-4" id="projects">
      <div className="bg-white/10 rounded-xl py-6 text-white  border border-gray-700 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/40 border border-gray-600 rounded-b-lg shadow-2xl overflow-hidden hover:shadow-lg transition flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 flex items-center gap-1 hover:underline"
                  >
                    <Github size={18} /> Code
                  </a>
                  {
                    project.demo ? <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 flex items-center gap-1 hover:underline"
                  >
                    <ExternalLink size={18} /> Demo
                  </a> : ""
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;