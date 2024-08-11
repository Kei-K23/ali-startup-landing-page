import Image from "next/image";
import { LOGOS } from "../../constants";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <h2 className="flex-1 md:flex-none">
            Trusted by top innovative teams
          </h2>
          <div className="flex-1 overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-14">
              {LOGOS.map((logo) => (
                <img
                  key={logo.src}
                  src={logo.src}
                  alt={logo.src}
                  className="h-6 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
