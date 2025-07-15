import React from "react";
import { ExternalLink } from "lucide-react";

const blogs = [
  {
    title: "Mastering React Hooks: A Practical Guide",
    summary: "Learn how to effectively use useState, useEffect, and custom hooks to build dynamic components.",
    image: "https://via.placeholder.com/400x200.png?text=React+Hooks",
    link: "https://yourblogsite.com/react-hooks-guide",
  },
  {
    title: "Building a REST API with Node.js and Express",
    summary: "Step-by-step tutorial on creating a backend API using Express and connecting it with MongoDB.",
    image: "https://via.placeholder.com/400x200.png?text=Node+API",
    link: "https://yourblogsite.com/nodejs-rest-api",
  },
  {
    title: "CSS Grid vs Flexbox: Which One to Use?",
    summary: "Comparison between Grid and Flexbox layout systems with real-world use cases and examples.",
    image: "https://via.placeholder.com/400x200.png?text=CSS+Layouts",
    link: "https://yourblogsite.com/css-grid-vs-flexbox",
  },
];

const Blogs = () => {
  return (
    <div className="bg-white/5 py-16 px-4 min-h-screen" id="blogs">
      <h2 className="text-4xl font-bold text-center mb-12">Blogs</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow hover:shadow-md transition overflow-hidden flex flex-col"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 mb-1">{blog.title}</h3>
              <p className="text-sm text-gray-600 flex-grow">{blog.summary}</p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-blue-600 text-sm flex items-center gap-1 hover:underline"
              >
                <ExternalLink size={16} />
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;