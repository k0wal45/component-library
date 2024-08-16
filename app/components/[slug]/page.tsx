"use client";
import ComponentShowcase from "@/components/ComponentShowcase/ComponentShowcase";
import componentsData from "@/DATA/data";
import { filterComponentsBySlug } from "@/DATA/helpers";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const { slug } = useParams();

  const data = filterComponentsBySlug(componentsData, slug);

  return (
    <div className="mt-24 flex flex-col gap-8 p-4">
      <div className="flex flex-col">
        <p className="text-neutral-600">Components / {data.name}</p>
        <h1 className="text-4xl text-neutral-900 font-semibold">{data.name}</h1>
      </div>
      {data.components.map((component) => (
        <ComponentShowcase component={component} key={component.name} />
      ))}
    </div>
  );
};

export default page;
