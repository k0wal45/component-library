"use client";
import React, { useState } from "react";
import Code from "./Code";
import Toggle from "./Toggle";
import Component from "./Component";

const ComponentShowcase = () => {
  const [selected, setSelected] = useState(true);

  return (
    <section className="p-12 w-full h-fit">
      <div className="flex justify-between p-4">
        <h3 className="text-xl font-bold">Basic FAQ</h3>
        <Toggle selected={selected} setSelected={setSelected} />
      </div>

      <div className="w-full bg-gray-600 relative h-full">
        <Component selected={selected} />
        <div
          className={`max-h-[30rem] w-full overflow-scroll z-20 ${
            selected ? "hidden" : "block"
          }`}
        >
          <Code code={code} />
        </div>
      </div>
    </section>
  );
};

export default ComponentShowcase;

const code = `import { FiLogIn } from "react-icons/fi";

const SlimeButton = () => {
  return (
    <button
      className='
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-violet-300 px-4 py-2 font-semibold
        uppercase text-violet-300 transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-violet-300
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95'
    >
      <FiLogIn />
      <span>Sign up free</span>
    </button>
  );
};

export default SlimeButton;
`;
