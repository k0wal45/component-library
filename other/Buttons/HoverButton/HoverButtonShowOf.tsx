import React from "react";
import HoverButton from "./HoverButton";

export const HoverButtonShowOf = () => {
  return (
    <div className="bg-gray-900 w-full z-20 flex items-center justify-center py-24">
      <HoverButton />
    </div>
  );
};

export const HoverButtonCode = `import Link from "next/link";

// to make it work you have to import this button somewhere in your code where you want it, then you have to make looks like this
// <HoverButton link="">Button</HoverButton>
// this is reusable button which u can use anywhere you want in your project


export const HoverButton = ({ href, children }: { href: string, children: string }) => {
  return (
    <Link
      href={href}
      className="flex w-fit px-8 items-center gap-4 p-4 font-semibold text-xl text-white duration-300 transition-transform active:scale-90 relative overflow-hidden group z-20"
    >
      {children}
      <div className="absolute w-full h-1/2 top-0 left-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-x-[-110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
      <div className="absolute w-full h-1/2 bottom-0 right-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-x-[110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
      <div className="absolute inset-0 bg-orange-500 z-[-2]" />
    </Link>
  );
};
`;
