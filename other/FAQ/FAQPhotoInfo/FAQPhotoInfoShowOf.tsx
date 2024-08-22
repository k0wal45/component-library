import React from "react";
import FAQPhotoInfo from "./FAQPhotoInfo";

export const FAQPhotoInfoShowOf = () => {
  return (
    <div>
      <FAQPhotoInfo />
    </div>
  );
};

export const FAQPhotoInfoCode = `"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import useMeasure from "react-use-measure";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

interface Question {
  question: string;
  answer: string;
}

const FAQPhotoInfo = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-6xl mx-auto p-4">
      <div className="flex-1 flex flex-col justify-end items-start w-full lg:w-[30rem] aspect-square relative p-8 rounded-xl overflow-hidden">
        <ul className="flex flex-col gap-4">
          <li className="bg-white p-[2px] px-2 flex items-center gap-2 font-semibold text-neutral-600 text-lg rounded-lg whitespace-nowrap w-fit">
            <p className="text-orange-400">
              <FaCheck />
            </p>
            +1 111(123)-1234
          </li>
          <li className="bg-white p-[2px] px-2 flex items-center gap-2 font-semibold text-neutral-600 text-lg rounded-lg whitespace-nowrap w-fit">
            <p className="text-orange-400">
              <FaCheck />
            </p>
            +1 111(123)-1234
          </li>

          <li className="bg-white p-[2px] px-2 flex items-center gap-2 font-semibold text-neutral-600 text-lg rounded-lg whitespace-nowrap w-fit">
            <p className="text-orange-400">
              <FaCheck />
            </p>
            contact@contact.com
          </li>
        </ul>
        <Image
          width={800}
          height={800}
          src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
      </div>

      <div className="px-4 py-12 flex-1">
        <h6 className="mb-4 text-5xl font-bold">
          Frequently Asked Questions About Hiking
        </h6>
        <p className="text-xl font-neutral-600">
          Whether you're a seasoned hiker or just starting out, our FAQ section
          is here to help you prepare for your next adventure.
        </p>
        {data.map((question: Question, index: number) => (
          <FAQItem title={question.question} key={index}>
            {question.answer}
          </FAQItem>
        ))}
      </div>
    </section>
  );
};

const FAQItem = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: string;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.p
          variants={{
            open: {
              color: "#ff9c1d",
            },
            closed: {
              color: "black",
            },
          }}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left text-lg font-medium w-full"
        >
          {title}
        </motion.p>
        <motion.p
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(124 58 237)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
          }}
          className="w-min"
        >
          <FiChevronDown className="text-2xl w-min" />
        </motion.p>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-600"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default FAQPhotoInfo;

const data = [
  {
    question: "What should I bring on a day hike?",
    answer:
      "For a day hike, it's important to bring water, snacks, a map or GPS, a first aid kit, sunscreen, and appropriate clothing. It's also a good idea to carry a multi-tool and a flashlight.",
  },
  {
    question: "How do I choose the right hiking trail?",
    answer:
      "Choose a trail based on your fitness level and experience. Research the trail's difficulty, length, and elevation gain. Always check recent trail conditions and weather forecasts before heading out.",
  },
  {
    question: "Is it safe to hike alone?",
    answer:
      "Hiking alone can be safe if you're well-prepared and experienced. Make sure to inform someone of your plans, carry a fully charged phone, and stick to well-marked trails. However, it's generally safer to hike with a partner.",
  },
];
`;
