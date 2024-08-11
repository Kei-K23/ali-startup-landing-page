import LogoIcon from "@/assets/logo.svg";
import SocialXIcon from "@/assets/social-x.svg";
import SocialIGIcon from "@/assets/social-instagram.svg";
import SocialYBIcon from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="mt-10 border-t border-t-white/15 py-10">
      <div className="px-10 flex flex-col md:flex-row md:items-center md:justify-between">
        <a href={"#home"} className="flex items-center gap-x-2">
          <LogoIcon className="size-8" />
          Ali AI Landing Page
        </a>
        <nav className="flex flex-col py-8 md:py-0 gap-y-3 md:flex-row md:items-center md:gap-x-5">
          <a
            href="#partners"
            className="hover:text-white text-white/70 transition-all"
          >
            Partners
          </a>
          <a
            href="#feature"
            className="hover:text-white text-white/70 transition-all"
          >
            Feature
          </a>
          <a
            href="#testimonials"
            className="hover:text-white text-white/70 transition-all"
          >
            Testimonials
          </a>
          <a
            href="#actions"
            className="hover:text-white text-white/70 transition-all"
          >
            Actions
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <SocialXIcon className="size-8 hover:text-white text-white/70 transition-all" />
          <SocialIGIcon className="size-8 hover:text-white text-white/70 transition-all" />
          <SocialYBIcon className="size-8 hover:text-white text-white/70 transition-all" />
        </div>
      </div>
    </footer>
  );
};
