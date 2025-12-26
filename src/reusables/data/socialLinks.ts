import { SocialLink } from "../types";

// Colored icons
import GithubIcon from "@/assets/GithubIcon.png";
import LinkedinIcon from "@/assets/LinkedinIcon.png";
import EmailIcon from "@/assets/email.png";

// Grey icons (footer)
import githubGrey from "@/assets/github-grey.png";
import linkedinGrey from "@/assets/linkedin-grey.png";
import whatsappGrey from "@/assets/whatsapp-grey.png";
import resumeGrey from "@/assets/resume-grey.png";

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    greyIcon: linkedinGrey,
    url: "https://www.linkedin.com/in/dianawijaya39",
    description: "Let's connect professionally",
    homeVisibility: true,
    aboutMeVisibility: true,
    footerVisibility: true,
  },
  {
    name: "GitHub",
    icon: GithubIcon,
    greyIcon: githubGrey,
    url: "https://github.com/DianaWijaya",
    description: "Check out my code and projects",
    homeVisibility: true,
    aboutMeVisibility: true,
    footerVisibility: true,
  },
  {
    name: "Email",
    icon: EmailIcon,
    url: "mailto:dianawijaya1234@gmail.com",
    description: "Send me a message",
    isEmail: true,
    homeVisibility: false,
    aboutMeVisibility: true,
    footerVisibility: false,
  },
  {
    name: "WhatsApp",
    greyIcon: whatsappGrey,
    url: "https://wa.me/6281299282807",
    description: "Chat with me",
    homeVisibility: false,
    aboutMeVisibility: false,
    footerVisibility: true,
  },
  {
    name: "Resume",
    greyIcon: resumeGrey,
    url: "https://drive.google.com/file/d/17KRGnO2wCJaBoPjOs4xx_3-eJeKazySn/view?usp=sharing",
    description: "View my resume",
    homeVisibility: false,
    aboutMeVisibility: false,
    footerVisibility: true,
  },
];

// Helper functions to filter links based on visibility
export const getHomeSocialLinks = () => 
  socialLinks.filter(link => link.homeVisibility);

export const getAboutMeSocialLinks = () => 
  socialLinks.filter(link => link.aboutMeVisibility);

export const getFooterSocialLinks = () => 
  socialLinks.filter(link => link.footerVisibility);

export const getAllSocialLinks = () => socialLinks;