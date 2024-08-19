import CopyPaste from "@/components/CopyPaste";
import Hero from "@/components/Hero/Hero";
import HowToUse from "@/components/HowToUse/HowToUse";
import Technologies from "@/components/TechStack/Technologies";

export const revalidate = 10;

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CopyPaste />
      <Technologies />
      <HowToUse />
    </main>
  );
}
