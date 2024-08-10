import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between  items-center md:border md:border-white/15 md:p-2.5 md:rounded-xl mx-auto max-w-2xl">
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
            <button className="relative border rounded-lg py-2 px-3 font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className="absolute inset-0">
                <div className="rounded-lg absolute border border-white/20 inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <div className="rounded-lg absolute border border-white/20 inset-0 [mask-image:linear-gradient(to_top,black,transparent)]" />
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg" />
              </div>
              <span>Join waitlist</span>
            </button>
            <MenuIcon className="size-8 block md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
