"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { TABS } from "../../constants";
import Image from "next/image";
import productImg from "@/assets/product-image.png";

export const Features = () => {
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
          {TABS.map((tab) => (
            <div
              key={tab.title}
              className="flex-1 border border-white/15 py-2.5 px-3 md:px-5 flex items-center gap-4 md:gap-6 rounded-lg relative"
            >
              <div className="size-12 border border-white/10 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer
                  src={tab.icon}
                  className="size-6 md:size-8"
                  autoplay
                  loop
                />
              </div>
              <span className="text-[14px] md:text-lg font-medium">
                {tab.title}
              </span>
              {tab.isNew && (
                <span className="absolute top-0 right-0 bg-purple-500 py-[1px] px-2.5 rounded-l-xl text-xs">
                  New
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="border border-white/15 p-2.5 rounded-xl">
          <Image src={productImg} alt="product image" />
        </div>
      </div>
    </section>
  );
};
