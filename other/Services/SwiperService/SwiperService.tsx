"use client";
import { useState } from "react";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React from "react";
import {
  FaHammer,
  FaBuilding,
  FaRedo,
  FaLeaf,
  FaProjectDiagram,
} from "react-icons/fa";

const SwiperService = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-8 w-full bg-orange-50 py-16 p-4 overflow-hidden">
      <p className="relative w-fit flex items-center gap-2 text-orange-500 text-xl font-semibold uppercase after:content-[''] after:absolute after:w-12 after:h-[2px] after:bg-orange-500 after:-right-16 after:hidden sm:after:block">
        Our Services
      </p>
      <h3 className="text-6xl font-semibold max-w-2xl">
        What services do we provide?
      </h3>
      <Swiper />
    </section>
  );
};

export default SwiperService;

interface Props {
  title: string;
  description: string;
  icon: any;
}

const CARD_WIDTH = 400;
const MARGIN = 25;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Swiper = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (services.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 overflow-hidden w-screen">
      <div className="flex items-center justify-center gap-4 lg:hidden">
        <button
          className="grid place-items-center p-4 bg-white shadow-[4px_4px_0px_#F68A0A] "
          onClick={shiftLeft}
        >
          <FaArrowLeft />
        </button>
        <button
          className="grid  place-items-center p-4 bg-white shadow-[4px_4px_0px_#F68A0A]"
          onClick={shiftRight}
        >
          <FaArrowRight />
        </button>
      </div>
      <button
        className="lg:grid place-items-center p-4 bg-white shadow-[4px_4px_0px_#F68A0A] hidden"
        onClick={shiftLeft}
      >
        <FaArrowLeft />
      </button>
      <div className=" w-full max-w-7xl overflow-hidden p-4">
        <motion.div
          animate={{
            x: offset,
          }}
          transition={{
            ease: "easeInOut",
          }}
          className="flex "
          ref={ref}
        >
          {services.map((content: Props, index: number) => (
            <Card
              content={content}
              index={index + 1}
              key={index}
              width={CARD_WIDTH}
              margin={MARGIN}
            />
          ))}
        </motion.div>
      </div>
      <button
        className="lg:grid hidden place-items-center p-4 bg-white shadow-[4px_4px_0px_#F68A0A]"
        onClick={shiftRight}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

const services = [
  {
    icon: <FaHammer />,
    title: "Construction of Single-Family Homes",
    description:
      "Comprehensive construction of single-family homes, from foundations to interior finishing, tailored to the individual needs and preferences of clients.",
  },
  {
    icon: <FaBuilding />,
    title: "Construction of Commercial Buildings",
    description:
      "Professional services in the construction of commercial buildings such as office buildings, shopping centers, hotels, and warehouses, using the latest technologies and materials.",
  },
  {
    icon: <FaRedo />,
    title: "Renovations and Modernizations",
    description:
      "Carrying out renovations and modernizations of existing buildings to improve functionality, aesthetics, and energy efficiency.",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainable Construction",
    description:
      "Execution of projects using eco-friendly materials, energy-efficient systems, and pro-environmental solutions to minimize environmental impact.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Construction Project Management",
    description:
      "Comprehensive management of construction projects, including planning, supervision, and coordination of all stages of the investment, to ensure timely and budget-compliant completion of the work.",
  },
];

interface Props {
  title: string;
  description: string;
  icon: any;
}

const Card = ({
  content,
  index,
  width,
  margin,
}: {
  content: Props;
  index: number;
  width: number;
  margin: number;
}) => {
  return (
    <div
      className="relative overflow-hidden flex flex-col justify-between gap-4 p-12 bg-white shadow-sm text-start shrink-0 cursor-pointer transition-all hover:scale-[1.015] hover:shadow-xl group"
      style={{ width: width + "px", marginRight: margin + "px" }}
    >
      <div className="flex justify-between items-center py-4 border-b-2 border-neutral-300">
        <div className="text-6xl text-orange-500">{content.icon}</div>
        <p className="text-neutral-400 font-bold text-xl group-hover:text-white  transition-all duration-700">
          {"0" + index}
        </p>
      </div>
      <h4 className="text-2xl group-hover:text-neutral-100  transition-all duration-700">
        {content.title}
      </h4>
      <p className="text-neutral-600  group-hover:text-neutral-300 transition-all duration-700">
        {content.description}
      </p>
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-x-[-100%] group-hover:translate-x-[0%] transition-all duration-700 z-[-1]" />
    </div>
  );
};
