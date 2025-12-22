import { getFooterSocialLinks } from "@/reusables/data/socialLinks";

const Footer = () => {
  const footerLinks = getFooterSocialLinks();

  return (
    <footer className="bg-cream-10 py-10">
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-center text-brown-800">
          © {new Date().getFullYear()} Diana Wijaya. All Rights Reserved.
        </p>

        <div className="flex gap-6">
          {footerLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <img
                src={social.greyIcon}
                alt={social.name}
                className="w-6 h-6 opacity-70 hover:opacity-100 transition"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;