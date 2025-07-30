import React from "react";

const experiences = [
  {
    title: "Full Stack Web Developer Intern",
    company: "Unified Mentor",
    duration: "Apr 2025 - Jun 2025",
    description:
      "Worked on MERN stack applications. Built REST APIs, optimized UI using Tailwind CSS, and managed user authentication using JWT.",
  },
  {
    title: "Industrial Training",
    company: "Cloud Counselage Pvt. Ltd.",
    duration: "Jun 2025 - Jul 2024",
    description:
      "Contributed to real-world industry projects, gaining hands-on experience in modern web development.",
  },
];

const Experience = () => {
  return (
    <div className="bg-white/5 p-2 md:p-10" id="experience">
      <div className="bg-white/10 p-5 text-white rounded-xl py-6 border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-auto items-center justify-center gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-gray-500 hover:border-purple-700 hover:scale-105 transition rounded-xl p-6 shadow hover:shadow-md flex flex-col"
            >
              <h3 className="text-md font-bold text-blue-500">{exp.title}</h3>
              <p className="text-xl my-1 font-semibold text-gray-200">{exp.company}</p>
              <p className="text-xs text-gray-300 mb-3">{exp.duration}</p>
              <p className="text-sm text-gray-400 flex-grow">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
