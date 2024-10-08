import About from "@/components/About";
import CopyPaste from "@/components/CopyPaste";
import Hero from "@/components/Hero/Hero";
import HowToUse from "@/components/HowToUse/HowToUse";
import Technologies from "@/components/TechStack/Technologies";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CopyPaste />
      <Technologies />
      <About />
      <HowToUse />
    </main>
  );
}
