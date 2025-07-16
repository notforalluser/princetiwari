import { motion } from 'framer-motion';
import AboutUs from "./components/AboutUs"
import Blogs from "./components/Blogs"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import SocialLinks from "./components/SocialLinks"
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="fixed z-50 top-0 left-0">
        <Navbar />
      </div>

      {/* <motion.div
          className="fixed inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
        /> */}

      <div className="pt-14 bg-black md:px-20">
        <Home />
        <AboutUs />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        {/* <Blogs /> */}
        <Contact />
        <Footer/>
      </div>
    </>
  );
}

export default App