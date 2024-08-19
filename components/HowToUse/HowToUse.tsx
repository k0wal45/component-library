"use client";
import { FaCopy } from "react-icons/fa";
import UniversalToogle from "./Toggle";
import { useState } from "react";
import { motion } from "framer-motion";

const copyToClipboard = (string: string) => {
  navigator.clipboard.writeText(string);
};

const HowToUse = () => {
  const [framework, setFramework] = useState(true);
  const [tailwind, setTailwind] = useState(true);

  const handleFrameworkChange = () => {
    if (framework) {
      return "npx create-next-app@latest";
    }
    return "npx create-react-app my-app";
  };

  return (
    <section className="min-h-screen flex flex-col gap-4 items-start justify-center w-fit mx-auto">
      <h4 className="text-6xl font-extrabold text-neutral-800 mb-8">
        How to use?
      </h4>
      {/* first step */}
      <p className="text-xl text-neutral-600">
        1. Create React/Next JS project
      </p>
      <UniversalToogle
        option1="Next JS"
        option2="ReactJS"
        selected={framework}
        setSelected={setFramework}
      />
      <div className="w-[30rem] rounded-xl bg-neutral-300 p-6 shadow-xl tracking-widest flex justify-between">
        {handleFrameworkChange()}
        <div
          onClick={() => copyToClipboard(handleFrameworkChange())}
          className="text-neutral-700 hover:bg-white/30 p-1 rounded-lg text-sm active:scale-90 transition-all duration-150"
        >
          <FaCopy />
        </div>
      </div>
      {/* second step */}
      <p className="text-xl text-neutral-600">2. Install Tailwind CSS</p>
      <UniversalToogle
        option1="Next JS"
        option2="React JS"
        selected={tailwind}
        setSelected={setTailwind}
      />
      <div className="w-[30rem] rounded-xl bg-neutral-300 p-6 shadow-xl tracking-widest flex justify-between">
        npm install -D tailwindcss
        <div
          onClick={() => copyToClipboard("npm install -D tailwindcss")}
          className="text-neutral-700 hover:bg-white/30 p-1 rounded-lg text-sm active:scale-90 transition-all duration-150"
        >
          <FaCopy />
        </div>
      </div>
      {tailwind ? (
        <p className="text-neutral-400">
          // if you're using next js it will ask you if you want to use next js.
          <br />
          // Say yes and continue
        </p>
      ) : (
        <p className="text-neutral-400">
          // further steps can be found{" "}
          <a
            href="https://tailwindcss.com/docs/installation"
            className="underline"
            target="_blank"
          >
            {" "}
            here
          </a>
        </p>
      )}
      {/* third step */}
      <p className="text-xl text-neutral-600">3. Install Framer Motion</p>

      <div className="w-[30rem] rounded-xl bg-neutral-300 p-6 shadow-xl tracking-widest flex justify-between">
        npm install framer-motion
        <div
          onClick={() => copyToClipboard("npm install framer-motion")}
          className="text-neutral-700 hover:bg-white/30 p-1 rounded-lg text-sm active:scale-90 transition-all duration-150"
        >
          <FaCopy />
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
