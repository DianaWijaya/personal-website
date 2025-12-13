import instagram from "@/assets/instagram-grey.png";
import linkedin from "@/assets/linkedin-grey.png";
import github from "@/assets/github-grey.png";
import resume from "@/assets/resume-grey.png";
import whatsapp from "@/assets/whatsapp-grey.png";

const Footer = () => {
  return (
    <footer className="bg-cream-10 py-10">
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-center text-brown-800">
          © {new Date().getFullYear()} Diana Wijaya. All Rights Reserved.
        </p>

        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/dianawijaya39" target="_blank" rel="noopener noreferrer">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-6 h-6 opacity-70 hover:opacity-100 transition"
            />
          </a>

          <a href="https://github.com/DianaWijaya" target="_blank" rel="noopener noreferrer">
            <img
              src={github}
              alt="GitHub"
              className="w-6 h-6 opacity-60 hover:opacity-100 transition"
            />
          </a>

          <a href="https://wa.me/6281299282807" target="_blank" rel="noopener noreferrer">
            <img
              src={whatsapp}
              alt="WhatsApp"
              className="w-6 h-6 opacity-70 hover:opacity-100 transition"
            />
          </a>

          <a href="https://drive.google.com/file/d/1EIxzsMWoxSNsqmQ2IP49dCop_f-s16Xf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img
              src={resume}
              alt="Resume"
              className="w-6 h-6 opacity-70 hover:opacity-100 transition"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
