import Image, { StaticImageData } from "next/image";
import React from "react";

export default function TestimonialCard({
  text,
  name,
  title,
  avatarImg,
}: {
  text: string;
  name: string;
  title: string;
  avatarImg: StaticImageData;
}) {
  return (
    <div
      key={title}
      className="border border-white/20 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)]
              max-w-xs md:max-w-md flex-none"
    >
      <p className="text-lg md:text-xl tracking-tight">{text}</p>
      <div className="flex items-center gap-5 mt-5">
        <div className="relative after:content-['] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
          <Image
            src={avatarImg}
            alt={`Avatar for ${name}`}
            className="size-11 rounded-lg grayscale "
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] text-white/80">{name}</span>
          <span className="text-[16px] text-white/60">{title}</span>
        </div>
      </div>
    </div>
  );
}
