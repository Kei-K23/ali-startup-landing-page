import { DotLottiePlayer } from "@dotlottie/react-player";
import React from "react";

export default function FeatureItem({
  icon,
  title,
  isNew,
}: {
  icon: string;
  title: string;
  isNew: boolean;
}) {
  return (
    <div
      key={title}
      className="flex-1 border border-white/15 py-2.5 px-3 md:px-5 flex items-center gap-4 md:gap-6 rounded-lg relative"
    >
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
