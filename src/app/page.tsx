import { Features } from "@/sections/Features";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <main className="bg-neutral-900 h-full">
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
    </main>
  );
}
