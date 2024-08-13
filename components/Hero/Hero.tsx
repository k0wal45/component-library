import React from "react";
import GradientButton from "../ComponentShowcase/Components/Buttons/GradientButton";

const Hero = () => {
  return (
    <header
      className="w-full min-h-screen bg-gradient-to-tr from-neutral-300 to-white
    flex flex-col lg:flex-row gap-12 items-center justify-center py-12
    "
    >
      <div className="flex flex-col gap-8 items-start justify-center max-w-2xl">
        <h1 className="text-7xl font-bold">
          Make your website faster and easier
        </h1>
        <p className="text-xl text-neutral-700">
          Copy paste basic Next js components and use them in your websites
          without having to worry about styling basic components.
        </p>
        <div className="flex gap-4">
          <GradientButton link="/components">Components</GradientButton>
        </div>
      </div>
    </header>
  );
};

export default Hero;
