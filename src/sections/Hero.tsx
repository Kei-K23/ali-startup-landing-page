"use client";
import Button from "@/components/Button";
import starBg from "@/assets/stars.png";
import GlobeContent from "@/components/GlobeContent";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <motion.div
      ref={containerRef}
      id="home"
      className="relative h-[492px] md:h-[800px] flex items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starBg.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: starBg.width,
      }}
      transition={{
        repeat: Infinity,
        duration: 100,
        ease: "linear",
      }}
    >
      <GlobeContent />
      <div className="container relative">
        <h1 className="text-8xl md:text-[150px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,rgb(255,255,255),rgb(255,255,255),rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Ali AI
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Streamline operations, boost productivity, and drive growth with our
          AI model to meet your unique needs with low cost.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.div>
  );
};
