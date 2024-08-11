"use client";
import { TABS } from "../../constants";
import Image from "next/image";
import productImg from "@/assets/product-image.png";
import FeatureItem from "@/components/FeatureItem";

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
            <FeatureItem
              key={tab.title}
              title={tab.title}
              isNew={tab.isNew}
              icon={tab.icon}
            />
          ))}
        </div>
        <div className="border border-white/15 p-2.5 rounded-xl">
          <Image src={productImg} alt="product image" />
        </div>
      </div>
    </section>
  );
};
