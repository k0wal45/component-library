import ComponentShowcase from "@/components/ComponentShowcase/ComponentShowcase";
import Hero from "@/components/Hero/Hero";

export const revalidate = 10;

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
