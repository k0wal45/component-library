"use client";
import React, { useState } from "react";
import Code from "./Code";
import Toggle from "./Toggle";
import { createLink } from "@/DATA/helpers";

const ComponentShowcase = ({ component }: any) => {
  const [selected, setSelected] = useState(true);

  return (
    <section className="w-full h-fit">
      <div className="flex justify-between py-4">
        <h3 className="text-xl font-bold">{component.name}</h3>
        <Toggle selected={selected} setSelected={setSelected} />
      </div>

      <div className="w-full relative h-full z-40">
        <div
          className={`${
            !selected ? "hidden" : "block"
          } border-[1px] border-neutral-300`}
          id={createLink(component.name)}
        >
          {component.showOf}
        </div>
        <div
          className={`max-h-[30rem] w-full overflow-y-scroll z-20 ${
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
