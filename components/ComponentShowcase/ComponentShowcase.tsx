"use client";
import React, { useState } from "react";
import Code from "./Code";
import Toggle from "./Toggle";

const ComponentShowcase = ({ component }: any) => {
  const [selected, setSelected] = useState(true);

  return (
    <section className="p-12 w-full h-fit">
      <div className="flex justify-between py-4">
        <h3 className="text-xl font-bold">{component.name}</h3>
        <Toggle selected={selected} setSelected={setSelected} />
      </div>

      <div className="w-full relative h-full">
        <div className={!selected ? "hidden" : "block"}>{component.showOf}</div>
        <div
          className={`max-h-[30rem] w-full overflow-scroll z-20 ${
            selected ? "hidden" : "block"
          }`}
        >
          <Code code={component.code} />
        </div>
      </div>
    </section>
  );
};

export default ComponentShowcase;
