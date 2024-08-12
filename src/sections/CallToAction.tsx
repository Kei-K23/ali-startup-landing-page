"use client";
import Button from "@/components/Button";
import starBgImg from "@/assets/stars.png";
import gridLineBgImg from "@/assets/grid-lines.png";
import { RefObject, useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

const useRelativeMousePosition = (to: RefObject<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();

    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const borderDivRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderDivRef);

  const maskImage = useMotionTemplate`radial-gradient(25% 45% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section
      ref={sectionRef}
      id="actions"
      className="py-20 md:py-24 select-none"
    >
      <div>
        <motion.div
          ref={borderDivRef}
          className="py-24 overflow-hidden relative group"
          style={{
            backgroundImage: `url(${starBgImg.src})`,
            backgroundPositionY,
          }}
          animate={{
            backgroundPositionX: starBgImg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 80,
            ease: "linear",
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(25%_45%_at_50%_45%,black,transparent)] group-hover:opacity-0"
            style={{
              backgroundImage: `url(${gridLineBgImg.src})`,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay  opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${gridLineBgImg.src})`,
            }}
          />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold text-center max-w-lg mx-auto">
              Al-driven SEO for everyone.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 mt-5 text-center max-w-xl mx-auto">
              Achieve clear, impactful results without complexity.
            </p>
            <div className="flex justify-center items-center mt-10 ">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
