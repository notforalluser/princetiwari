import React from "react";
import { ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Java Essentials",
    issuer: "Infosys",
    date: "May 2024",
    image: "https://i.postimg.cc/6pFvRjbQ/Java-Infosys-Springboard-Pre.png",
  },
  {
    title: "JavaScript",
    issuer: "Hacker-Rank",
    date: "March 2024",
    image: "https://i.postimg.cc/Kv26JxwX/javascript.jpg",
  },
  {
    title: "Agile Project Management",
    issuer: "HP Life",
    date: "January 2024",
    image: "https://i.postimg.cc/WbZyZ3nL/agile-Project-Management.jpg",
  },
  {
    title: "Postman API Fundamentals",
    issuer: "Postman",
    date: "January 2024",
    image: "https://i.postimg.cc/gjFTtbzB/Postman-API.png",
  },
  // {
  //   title: "Rajasthan Police Hackathon 1.0",
  //   issuer: "Rajasthan Police",
  //   date: "January 2024",
  //   image: "https://i.postimg.cc/W36HyfdN/RP.jpg",
  //   link: "https://udemy.com/certificate/data-structures-java",
  // },
  // {
  //   title: "Intellectual Property Right and Competition Law",
  //   issuer: "NPTEL",
  //   date: "January 2024",
  //   image: "https://i.postimg.cc/XYPKVKRw/IOT.jpg",
  //   link: "https://udemy.com/certificate/data-structures-java",
  // },
];

const Certificates = () => {
  return (
    <div className="p-10 flex flex-col items-center justify-start bg-white/5 z-10" id="certificates">
      <div className="py-6 px-2 bg-white/10 text-white rounded-xl border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="border border-gray-700 shadow hover:shadow-md transition flex flex-col overflow-hidden"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col">
                <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-300">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;