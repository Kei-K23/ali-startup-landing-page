import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Link from "next/link";
import Button from "@/components/Button";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border md:border-white/15 md:p-2.5 md:rounded-xl mx-auto max-w-2xl">
          <Link
            href={"/"}
            className="size-10 border rounded-lg inline-flex justify-center items-center border-white/15"
          >
            <LogoIcon className="size-8" />
          </Link>

          <nav className="gap-8 hidden md:flex">
            <a
              href="#"
              className="hover:text-white text-white/70 transition-all"
            >
              Feature
            </a>
            <a
              href="#"
              className="hover:text-white text-white/70 transition-all"
            >
              Developers
            </a>
            <a
              href="#"
              className="hover:text-white text-white/70 transition-all"
            >
              Pricing
            </a>
            <a
              href="#"
              className="hover:text-white text-white/70 transition-all"
            >
              Changelog
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
