"use client";

import { LOGOS } from "../../constants";
import { motion } from "framer-motion";
export const LogoTicker = () => {
  return (
    <section id="partners" className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center flex-col">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Trusted by top innovative teams
          </h2>
          <div className="flex flex-1 overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] mt-10">
            <motion.div
              animate={{
                translateX: 0,
              }}
              initial={{
                translateX: "-50%",
              }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {LOGOS.map((logo) => (
                <img
                  key={logo.src}
                  src={logo.src}
                  alt={logo.src}
                  className="h-6 md:h-10 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
