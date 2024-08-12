"use client";
import { TABS } from "../../constants";
import Image from "next/image";
import productImg from "@/assets/product-image.png";
import FeatureItem from "@/components/FeatureItem";
import { useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";

export const Features = () => {
  const [selectedFeatureItem, setSelectedFeatureItem] = useState(0);

  const bgPositionX = useMotionValue(TABS[0].backgroundPositionX);
  const bgPositionY = useMotionValue(TABS[0].backgroundPositionY);
  const bgSizeX = useMotionValue(TABS[0].backgroundSizeX);

  const bgPosition = useMotionTemplate`${bgPositionX}% ${bgPositionY}%`;
  const bgSize = useMotionTemplate`${bgSizeX}% auto`;

  const handleSelectFeatureItem = (index: number) => {
    setSelectedFeatureItem(index);
    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      bgSizeX,
      [bgSizeX.get(), 100, TABS[index].backgroundSizeX],
      animateOptions
    );

    animate(
      bgPositionX,
      [bgPositionX.get(), TABS[index].backgroundPositionX],
      animateOptions
    );
    animate(
      bgPositionY,
      [bgPositionY.get(), TABS[index].backgroundPositionY],
      animateOptions
    );
  };

  return (
    <section id="feature" className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Elevate your SEO efforts
        </h2>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          From small startups to large enterprises, our AI model and tools has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 mb-6 flex flex-col gap-y-2 lg:flex-row lg:items-center lg:justify-between lg:gap-3">
          {TABS.map((tab, index) => (
            <FeatureItem
              key={tab.title}
              title={tab.title}
              isNew={tab.isNew}
              icon={tab.icon}
              active={index === selectedFeatureItem}
              handleClick={() => {
                handleSelectFeatureItem(index);
              }}
            />
          ))}
        </div>
        <div className="border border-white/15 p-2.5 rounded-xl">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundPosition: bgPosition,
              backgroundSize: bgSize,
              backgroundImage: `url(${productImg.src})`,
            }}
          />
        </div>
      </div>
    </section>
  );
};
