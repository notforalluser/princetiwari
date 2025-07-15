'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/prince1.png'

const roles = [
  'A Full Stack Developer',
  'An Automated Tester',
  'A Java Developer',
  'A Cyber Warrior',
];

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white/5 z-10" id='home'>
      <div className="relative w-full h-[91vh] md:h-[91vh] flex items-center justify-center overflow-hidden">
        {/* Animated Squares Grid */}
        <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-5 grid-rows-3 opacity-10 md:border-b-2 md:border-slate-600">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-white border-2 border-slate-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            />
          ))}
        </div>



        {/* Center Content */}
        <div className="absolute text-center">
          <div className="w-full flex items-center justify-center">
            <div className="absolute w-64 h-64 rounded-full z-0 animate-spin-slow">
              <div
                className="w-full h-full rounded-full blur-xl"
                style={{
                  backgroundImage: `conic-gradient(from 0deg, 
                  #ec4899,   /* pink-500 */
                  #a855f7,   /* purple-500 */
                  #f43f5e,   /* red-500 */
                  #ec4899    /* pink-500 to close loop */
                )`,
                }}
              ></div>
              <div className="absolute top-1/2 left-1/2 w-52 h-52 bg-white/50 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <img
                src={profileImage}
                alt="Profile"
                className="w-52 h-52 object-cover rounded-full border-4 border-white/50 animate-float"
              />
            </div>
          </div>

          <div className='mt-6 grid place-content-center'>
            <div className=' px-5 py-1 text-white bg-indigo-950 rounded-3xl border border-indigo-700 flex flex-row items-center overflow-hidden'>
              <div className='w-2 h-2 mx-2 bg-green-600 rounded-full'></div>
              <motion.p
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-lg font-semibold text-cyan-400 tracking-wide"
              >
                {roles[currentRoleIndex]}
              </motion.p>
            </div>
          </div>

          <div className='text-white font-bold text-xl m-3 mt-5'>Hello, I'm</div>
          <h1 className="text-transparent text-3xl md:text-7xl font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-800 drop-shadow-lg">
            Prince Tiwari
          </h1>
          <div className='max-w-5xl mt-7 text-lg text-gray-200'>
            <div>
              I am a skilled Full Stack Developer and aspiring cybersecurity professional with expertise in building secure, scalable applications. Proficient in development and security tools, I excel at creating efficient, user-friendly, and protected systems.
            </div>
          </div>
          <div className='flex items-center justify-center gap-16 text-white mt-5'>
            <a
              href="PrinceTiwari_Resume.pdf"
              download
              className="w-28 inline-block bg-gradient-to-br from-pink-600 to-purple-700 hover:bg-gradient-to-tl hover:from-pink-600 hover:to-purple-700 hover:outline hover:outline-gray-300 p-1 px-3 rounded-tr-2xl text-white text-center"
            >
              Resume
            </a>
            <button className='w-28 bg-gradient-to-bl from-pink-600 to-purple-700 hover:bg-gradient-to-tr hover:from-pink-600 hover:to-purple-700 hover:outline hover:outline-gray-300 p-1 px-3 rounded-tl-2xl'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}