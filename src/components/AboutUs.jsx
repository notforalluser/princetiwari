import profileImage from '../assets/prince.png'
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import SocialLinks from './SocialLinks';

const AboutUs = () => {
  return (
    <div className="p-2 md:p-10 flex flex-col items-center justify-center bg-white/5 text-white/90" id="aboutus">
      <div className="flex flex-col md:flex-row rounded-xl overflow-hidden max-w-7xl w-full py-6 bg-white/10  border border-gray-700">
        <div className="md:w-1/3 w-full flex items-center justify-center relative">
          <div className="absolute w-64 h-64 rounded-full animate-spin-slow">
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
            <div className="absolute top-1/2 left-1/2 w-52 h-52 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="relative z-10">
            <img
              src={profileImage}
              alt="Profile"
              className="w-52 h-52 object-cover rounded-full border-8  border-white animate-float"
            />
          </div>
        </div>


        <div className="md:w-2/3 w-full p-8 flex flex-col justify-center">
          <p className="text-gray-300 mb-6">
            I am a highly motivated and technically proficient Full Stack Developer with a solid foundation in front-end and back-end development, responsive design, and database management. My experience in working with a wide range of development tools, frameworks, and technologies has equipped me with the skills necessary to design, build, and optimize dynamic web applications. I am eager to apply my skills in a forward-thinking company and contribute to a team focused on delivering high-quality, scalable solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-200" />
              <span className="font-semibold">Birthday:</span>
              <span className="ml-1">Aug 31, 2004</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-gray-200" />
              <span className="font-semibold">Phone:</span>
              <span className="ml-1">+91 78919 22459</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-gray-200" />
              <span className="font-semibold">Email:</span>
              <span className="ml-1">princetiwari.profes@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-gray-200" />
              <span className="font-semibold">Address:</span>
              <span className="ml-1">Jaipur, Rajasthan, India</span>
            </div>
          </div>
          <div className='mt-3'>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;