import React from "react";
import { motion } from "framer-motion";

export default function GlobeContent() {
  return (
    <>
      {/* overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]" />
      {/* Globe start */}
      <div className="absolute bg-purple-500 border border-white/20 rounded-full size-64 md:size-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(25,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]" />
      {/* Globe end */}
      {/* first ring start */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="size-[344px] md:size-[580px] absolute border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="size-2 absolute left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="size-2 absolute left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2" />
        <div className="border border-white size-7 absolute left-full rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="size-3 bg-white rounded-full" />
        </div>
      </motion.div>
      {/* first ring end */}
      {/* second ring start */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 120,
          ease: "linear",
        }}
        className="absolute size-[444px] md:size-[780px] rounded-full border opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="size-2 absolute left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="size-2 absolute bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2" />
        <div className="border border-white size-7 absolute left-1/2 rounded-full top-0 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="size-3 bg-white rounded-full" />
        </div>
      </motion.div>
      {/* second ring end */}
      {/* third ring start */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 120,
          ease: "linear",
        }}
        className="size-[544px] md:size-[980px] absolute border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="size-2 absolute left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="border border-white left-0 size-7 absolute rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="size-3 bg-white rounded-full" />
        </div>
      </motion.div>
      {/* third ring end */}
    </>
  );
}
