const Footer = () => {
    return (
        <footer className="bg-black flex flex-col items-center justify-center z-10 mb-4">
            <p className="text-center text-xs text-gray-300 mt-6">
                &copy; {new Date().getFullYear()} Prince Tiwari. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;