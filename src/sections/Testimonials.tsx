import Image from "next/image";
import { TESTIMONIALS } from "../../constants";

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Beyond Expectations.
        </h2>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Our revolutionary AI model and tools have transformed our client
          strategies.
        </p>
        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex gap-5 ">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.title}
                className="border border-white/20 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)]
              max-w-xs md:max-w-md flex-none"
              >
                <p className="text-lg md:text-xl tracking-tight">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-5 mt-5">
                  <div className="relative after:content-['] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className="size-11 rounded-lg grayscale "
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[16px] text-white/80">
                      {testimonial.name}
                    </span>
                    <span className="text-[16px] text-white/60">
                      {testimonial.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
