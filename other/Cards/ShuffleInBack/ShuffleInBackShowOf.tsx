import React from "react";
import ShuffleInBack from "./ShuffleInBack";

export const ShuffleInBackShowOf = () => {
  return (
    <div className="flex items-center justify-center w-full p-4 py-12 bg-neutral-900">
      <ShuffleInBack />
    </div>
  );
};

export const ShuffleInBackCode = `import Image from "next/image";
import React from "react";

const ShuffleInBack = () => {
  return (
    <div
      className="
      aspect-square bg-white rounded-[3.2rem] relative p-8 max-w-72 flex flex-col items-center gap-4 z-20 shadow-lg duration-200 hover:scale-105
      after:absolute after:size-full after:top-0 after:left-0 after:bg-white/40 after:rounded-[3.2rem] after:z-[-2] after:origin-bottom-left after:rotate-[4deg] after:translate-y-[-1rem] after:duration-200 hover:after:rotate-[10deg] hover:after:translate-y-[-3rem] hover:after:translate-x-4 hover:after:scale-95
      before:absolute before:size-full before:top-0 before:left-0 before:bg-white/40 before:rounded-[3.2rem] before:z-[-2] before:origin-bottom-left before:rotate-[8deg] before:translate-y-[-2rem] before:duration-200 hover:before:rotate-[20deg] hover:before:translate-y-[-5.1rem] hover:before:translate-x-4 hover:before:scale-95

  "
    >
      <Image
        width={100}
        height={100}
        alt="Person profile"
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-24 aspect-square rounded-xl object-cover"
      />
      <p className="text-xl text-neutral-800 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
        necessitatibus magni ipsam ipsum sed earum officia incidunt porro totam
        eos.
      </p>
    </div>
  );
};

export default ShuffleInBack;
`;
