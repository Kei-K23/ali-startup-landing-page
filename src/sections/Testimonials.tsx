"use client";

import { TESTIMONIALS } from "../../constants";
import TestimonialCard from "@/components/TestimonialCard";
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Beyond Expectations.
        </h2>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Our revolutionary AI model and tools have transformed our client
          strategies.
        </p>
        <div className="flex mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: 0,
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex gap-5 flex-none pr-5 -translate-x-1/2"
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial) => (
              <TestimonialCard
                key={testimonial.text}
                text={testimonial.text}
                name={testimonial.name}
                avatarImg={testimonial.avatarImg}
                title={testimonial.title}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
