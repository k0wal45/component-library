"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import TechIcon from "./TechIcon";

const Technologies = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const translate = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);
  const translateReverse = useTransform(
    scrollYProgress,
    [0, 1],
    ["50px", "-50px"]
  );

  return (
    <section
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-center gap-12 p-4 mx-auto"
    >
      <div className="flex flex-col sm:flex-row gap-8 items-center justify-center w-full max-w-2xl">
        <TechIcon name="Next JS" icon="nextjs.png" />
        <div className="flex flex-col items-center gap-8">
          <TechIcon name="Framer Motion" icon="framermotion.png" />
          <TechIcon name="Tailwind CSS" icon="tailwindcss.png" />
        </div>
        <TechIcon name="React JS" icon="reactjs.png" />
      </div>
      <div className="flex flex-col gap-6 justify-center max-w-3xl w-full">
        <motion.h3
          style={{ scale: scale, translateX: translateReverse }}
          className="text-5xl md:text-7xl font-black text-neutral-900 max-w-3xl origin-bottom-right"
        >
          React JS and Talwind CSS Componentes
        </motion.h3>
        <motion.p
          style={{
            translateX: translate,
          }}
          className="text-2xl text-neutral-600 font-medium"
        >
          Lunaris UI is library of prebuilt simple componenets to help you save
          time while building your own project or to inspire you to build your
          own!
        </motion.p>
        <motion.p
          style={{
            translateX: translateReverse,
          }}
          className="text-2xl text-neutral-600 font-medium"
        >
          Easily integrate Tailwind CSS and Framer Motion components into your
          Next JS or React JS apps. Copy, paste, and customize—it's that simple.
        </motion.p>
        <Link
          href="/components"
          className="py-4 px-6 text-neutral-900 border-neutral-900 border-2 rounded-xl w-fit text-xl font-semibold"
        >
          See all components
        </Link>
      </div>
    </section>
  );
};

export default Technologies;
