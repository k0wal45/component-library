import ComponentShowcase from "@/components/ComponentShowcase/ComponentShowcase";
import componentsData from "@/DATA";
import React from "react";

export const revalidate = 10;

const page = () => {
  return (
    <div className="mt-24 flex flex-col gap-8">
      <div className="flex flex-col">
        <p className="text-neutral-600">Components / Navigation</p>
        <h1 className="text-4xl text-neutral-900 font-semibold">Navigation</h1>
      </div>
      {componentsData.map((component) => (
        <ComponentShowcase component={component} key={component.name} />
      ))}
    </div>
  );
};

export default page;
