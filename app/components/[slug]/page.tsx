"use client";
import ComponentShowcase from "@/components/ComponentShowcase/ComponentShowcase";
import componentsData from "@/DATA/data";
import { filterComponentsBySlug } from "@/DATA/helpers";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const { slug } = useParams();

  const data = filterComponentsBySlug(componentsData, slug);

  if (data.components.length !== 0) {
    return (
      <div className="mt-24 flex flex-col gap-8 p-4">
        <div className="flex flex-col">
          <p className="text-neutral-600">Components / {data.name}</p>
          <h1 className="text-4xl text-neutral-900 font-semibold">
            {data.name}
          </h1>
        </div>
        {data.components.map((component) => (
          <ComponentShowcase component={component} key={component.name} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col gap-6 items-center justify-center text-center">
      <h1 className="text-5xl lg:text-7xl font-bold">Opppps!</h1>
      <p className="text-xl max-w-xl">
        Something went wrong, no components here :/
      </p>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <Link
          href=""
          className="p-4 px-6 bg-black text-white font-bold text-lg hover:bg-neutral-800 active:scale-105 transition-all duration-200"
        >
          Home
        </Link>
        <Link
          href=""
          className="p-4 px-6 text-black border-4 scale-95 border-black font-bold text-lg hover:bg-neutral-800/10 active:scale-105 transition-all duration-200"
        >
          Browse Components
        </Link>
      </div>
    </div>
  );
};

export default page;
