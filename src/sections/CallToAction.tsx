import Button from "@/components/Button";
import starBgImg from "@/assets/stars.png";
import gridLineBgImg from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section id="actions" className="py-20 md:py-24">
      <div>
        <div
          className="py-24 overflow-hidden relative"
          style={{
            backgroundImage: `url(${starBgImg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridLineBgImg.src})`,
            }}
          />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center">
              Al-driven SEO for everyone.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 mt-5 text-center max-w-xl mx-auto">
              Achieve clear, impactful results without complexity.
            </p>
            <div className="flex justify-center items-center mt-10 ">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
