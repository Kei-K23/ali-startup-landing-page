import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none fixed w-full top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden" />
      <div className="container">
        <div className="relative flex justify-between items-center md:border md:border-white/15 md:p-2.5 md:rounded-xl mx-auto max-w-2xl">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block" />
          <a
            href={"#home"}
            className="size-10 border rounded-lg inline-flex justify-center items-center border-white/15"
          >
            <LogoIcon className="size-8" />
          </a>

          <nav className="gap-8 hidden md:flex">
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
          <div className="flex gap-x-4 items-center">
            <Button>Join waitlist</Button>
            <MenuIcon className="size-8 block md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
