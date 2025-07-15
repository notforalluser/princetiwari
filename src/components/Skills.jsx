import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostman, SiMysql, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-8 h-8" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-8 h-8" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-8 h-8" /> },
  { name: "React", icon: <FaReact className="text-sky-400 w-8 h-8" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 w-8 h-8" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-8 h-8" /> },
  { name: "Express.js", icon: <SiExpress className="text-black w-8 h-8" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700 w-8 h-8" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700 w-8 h-8" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-700 w-8 h-8" /> },
  { name: "Java", icon: <FaJava className="text-red-600 w-8 h-8" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 w-8 h-8" /> },
  { name: "GitHub", icon: <FaGithub className="text-black w-8 h-8" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 w-8 h-8" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 w-8 h-8" /> },
];

const Skills = () => {
  return (
    <div className="p-10 flex flex-col items-center justify-center bg-white/5 z-10" id="skills">
      <div className="bg-white/10 py-5 rounded-xl text-white  border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="w-full flex flex-wrap items-center justify-center gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-20 flex flex-col items-center justify-center p-3 border border-gray-500 rounded-xl shadow hover:scale-105 transition"
            >
              {skill.icon}
              <span className="mt-2 text-sm font-medium text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;