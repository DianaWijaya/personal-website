import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { HiDocumentText } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-cream-10 py-10">
      <div className="flex flex-col items-center gap-4">
         {/* Copyright */}
         <p className="text-sm text-center text-brown-800">
          &copy; {new Date().getFullYear()} Diana Wijaya. All Rights Reserved.
        </p>
        
        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/dianawijaya39" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-brown-700 text-2xl hover:text-brown-900 transition duration-300" />
          </a>
          <a href="https://github.com/DianaWijaya" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-brown-700 text-2xl hover:text-brown-900 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/dianawijaya_39" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-brown-700 text-2xl hover:text-brown-900 transition duration-300" />
          </a>
          <a href="https://drive.google.com/file/d/1EIxzsMWoxSNsqmQ2IP49dCop_f-s16Xf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <HiDocumentText className="text-brown-700 text-2xl hover:text-brown-900 transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
