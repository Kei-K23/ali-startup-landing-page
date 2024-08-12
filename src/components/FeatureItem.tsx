"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function FeatureItem({
  icon,
  title,
  isNew,
  active,
  handleClick,
}: {
  icon: string;
  title: string;
  isNew: boolean;
  active: boolean;
  handleClick: () => void;
}) {
  const featureItemRef = useRef<HTMLDivElement | null>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!featureItemRef?.current || !active) return;

    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = featureItemRef.current.getBoundingClientRect();
    const circumferences = height * 2 + width * 2;

    const times = [
      0,
      width / circumferences,
      (width + height) / circumferences,
      (width * 2 + height) / circumferences,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [active]);
  return (
    <div
      ref={featureItemRef}
      key={title}
      className="flex-1 border border-white/15 py-2.5 px-3 md:px-5 flex items-center gap-4 md:gap-6 rounded-lg relative cursor-pointer"
      onClick={handleClick}
    >
      {active && (
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute inset-0 border-2 border-[#A369FF] rounded-lg"
        />
      )}

      <div className="size-12 border border-white/10 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          src={icon}
          className="size-6 md:size-8"
          autoplay
          loop
        />
      </div>
      <span className="text-[14px] md:text-lg font-medium">{title}</span>
      {isNew && (
        <span className="absolute top-0 right-0 bg-purple-500 py-[1px] px-2.5 rounded-l-xl text-xs">
          New
        </span>
      )}
    </div>
  );
}
