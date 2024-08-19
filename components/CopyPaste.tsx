"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const CopyPaste = () => {
  const [scale, setScale] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScale(latest * 2);
  });

  return (
    <section
      className="h-screen w-full flex flex-col gap-6 items-center justify-center text-center p-4 relative overflow-visible"
      ref={ref}
    >
      <h2 className="text-5xl lg:text-7xl font-[800] w-fit bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent py-2 max-w-3xl tracking-widest">
        Copy and paste components
      </h2>
      <p className="text-lg text-neutral-600 lg:text-2xl font-medium max-w-3xl ">
        Copy, paste, and customize. Our free components are here to speed up
        your React projects.
      </p>
      <p className="text-lg lg:text-2xl text-primary font-medium max-w-3xl ">
        Quickly build websites with our pre-built components. Save time and
        focus on what matters.
      </p>
      <Link
        href="/components"
        className="p-4 px-6 rounded-lg bg-primary text-xl font-semibold text-white"
      >
        See all components
      </Link>
      <div className="absolute flex items center justify-center z-[-1]">
        <motion.div
          style={{ scale: scale }}
          transition={{ duration: 200, ease: "easeInOut" }}
          className="bg-neutral-300 size-[40rem] rounded-full grid place-items-center blur-xl"
        >
          <div className="bg-white size-72 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CopyPaste;
