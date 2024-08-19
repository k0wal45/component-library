import React from "react";
import GradientButton from "../ComponentShowcase/Components/Buttons/GradientButton/GradientButton";
import ThreeDHoverScreenCard from "./Item";
import Link from "next/link";
import Reveal from "../Animations/Reveal";
import AppearFromBottom from "../Animations/AppearFromBottom";

const Hero = () => {
  return (
    <header
      className="w-full min-h-screen p-4
    flex flex-col lg:flex-row gap-12 items-center justify-center py-12
    "
    >
      <div className="flex flex-col gap-8 items-start justify-center max-w-xl xl:max-w-2xl">
        <Reveal>
          <h1 className="text-6xl xl:text-7xl font-bold">
            Make your website faster and easier
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-xl text-neutral-700">
            Copy paste basic Next js components and use them in your websites
            without having to worry about styling basic components.
          </p>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap gap-4">
            <GradientButton link="/components">Components</GradientButton>
            <Link
              href="https://daniel-kowalski.com/"
              className="p-4 px-8 bg-transparent text-center border-neutral-900 border-2 rounded-md text-neutral-900 font-bold grid place-items-center text-xl transition-all duration-300
            hover:bg-neutral-900/5 active:translate-x-[4px] active:translate-y-[4px] active:shadow-[-2px_-2px_0px_rgb(23,23,23)] 
      "
            >
              Hire Me
            </Link>
          </div>
        </Reveal>
      </div>
      <AppearFromBottom>
        <ThreeDHoverScreenCard />
      </AppearFromBottom>
    </header>
  );
};

export default Hero;
