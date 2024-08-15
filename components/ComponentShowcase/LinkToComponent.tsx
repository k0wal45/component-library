"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  href: string;
  title: string;
  icon: JSX.Element;
  index: number;
}

const Card = ({ href, title, icon, index }: Props) => {
  return (
    <Link
      href={"/components/" + href}
      className="relative w-full md:w-[32rem] text-neutral-700 overflow-hidden flex flex-col justify-between gap-4 p-6 py-12 shadow-xl text-start shrink-0 cursor-pointer transition-all hover:scale-[1.015] hover:shadow-xl group"
    >
      <div className="flex justify-between items-center py-4 border-b-2 border-neutral-300">
        <div className="absolute text-8xl text-neutral-400/30 -rotate-12 z-[-1] top-0 right-0 scale-[2.3]">
          {icon}
        </div>
        <h2 className="text-2xl font-semibold group-hover:text-neutral-100 transition-all duration-700">
          {title}
        </h2>
        <p className="text-neutral-400 font-bold text-xl group-hover:text-white  transition-all duration-700">
          {"0" + (index + 1)}
        </p>
      </div>
      <motion.div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-y-[100%] group-hover:translate-y-[0%] transition-all duration-700 z-[-2]" />
    </Link>
  );
};

export default Card;
