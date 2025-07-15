import React from "react";
import {
    Youtube,
    Twitter,
    Linkedin,
    Github,
    Instagram,
    Code,
} from "lucide-react";
import {
    SiLeetcode,
    SiCodechef,
    SiHackerrank,
} from "react-icons/si";
const SocialLinks = () => {
    return (
        <div className="flex flex-col mt-5 items-center justify-start z-10">
            {/* <div className="w-full py-6 px-2 bg-white/10 text-white rounded-xl"> */}
                <div className="flex w-full text-white rounded-xl">
                    {/* Social Icons */}
                    <div className="flex flex-wrap justify-center gap-10 text-white/70">
                        <a href="https://www.youtube.com/@CodingTutorial1" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                            <Youtube size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/princetiwari26/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/princetiwari26" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                            <Github size={20} />
                        </a>
                        <a href="https://leetcode.com/u/princetiwari_26/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                            <SiLeetcode size={20} />
                        </a>
                        <a href="https://www.codechef.com/users/princetiwari26" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                            <SiCodechef size={20} />
                        </a>
                        <a href="https://www.hackerrank.com/profile/princetiwari_pr1" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
                            <SiHackerrank size={20} />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                            <Twitter size={20} />
                        </a>
                        <a href="https://www.instagram.com/princetiwari26__/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
};

export default SocialLinks;