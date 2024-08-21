import React from "react";
import { MarginAround } from "./MarginAround";

export const MarginAroundShowOf = () => {
  return (
    <div className="p-6 lg:p-12">
      <MarginAround />
    </div>
  );
};

export const MarginAroundCode = `"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// to make it work as a server component simply move <Reveal /> component to other file and delete 'use client' from the top of the file and everything will be fine

const MarginAround = () => {
  return (
    <header className="min-h-[90vh] bg-cover h-fit m-6 lg:m-12 my-16 lg:my-20 rounded-3xl flex flex-col lg:flex-row items-end justify-between overflow-hidden bg-fixed bg-[url(https://images.unsplash.com/photo-1505133078601-a8b623c0517b?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
      <section className="flex flex-col lg:h-[90vh] gap-12 items-start justify-start lg:w-1/2 p-6 py-12 lg:p-24 lg:py-36">
        <Reveal>
          <h1 className="text-6xl lg:text-8xl font-bold text-white max-w-4xl p-2">
            We build places for your memories
          </h1>
        </Reveal>

        <Link
          href=""
          className="py-2 px-6 bg-transparent text-center text-neutral-900 font-bold transition-all duration-300 bg-white rounded-xl
            flex items-center justify-center gap-4
            hover:bg-gray-200
            active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
            "
        >
          Book a free call
        </Link>
      </section>

      <section className=" flex items-end justify-end">
        <div className="flex w-fit p-4 lg:p-8 bg-black/40 lg:rounded-tl-xl flex-col lg:flex-row text-white">
          <div className="flex flex-col gap-12">
            <Reveal>
              <p className="max-w-md text-2xl text-start">
                Construction company with years of experience and tons of happy
                client to back it up
              </p>
            </Reveal>
            <Reveal>
              <Link
                href=""
                className="flex items-center justify-start gap-4 text-xl hover:border-b-2 pb-2 border-white w-fit"
              >
                Check out some images
                <FaArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </header>
  );
};

export default MarginAround;

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref: any = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duation: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-1 bottom-1 left-1 right-1 bg-orange-500 z-20"
      />
    </div>
  );
};
`;
