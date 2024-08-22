import React from "react";
import FAQPhoto from "./FAQPhoto";

export const FAQPhotoShowOf = () => {
  return (
    <div>
      <FAQPhoto />
    </div>
  );
};

export const FAQPhotoCode = `"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const FAQPhoto = () => {
  return (
    <section className="flex gap-8 flex-col-reverse lg:flex-row items-center justify-center lg:max-w-[90vw] mx-auto p-4 mt-8">
      <FAQ />
      <Image
        width={900}
        height={900}
        className="w-[35rem] aspect-square rounded-xl"
        src="https://images.unsplash.com/photo-1564227503787-ad186f508e6f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="FAQ LunarisWeb"
      />
    </section>
  );
};

function generateRandomString() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 12; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const FAQ = () => {
  return (
    <div className="p-4 flex-1 flex flex-col gap-4 w-full lg:max-w-[50rem]">
      {data.map((faq) => (
        <FaqElement
          title={faq.title}
          answer={faq.answer}
          key={generateRandomString()}
        />
      ))}
    </div>
  );
};

const FaqElement = ({ title, answer }: { title: string; answer: string }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const ref: any = useRef();

  const IsInView = useInView(ref, { once: true, amount: 0.2 });

  const rotate = () => {
    return accordionOpen && "!rotate-180";
  };

  const acordion = () => {
    return accordionOpen
      ? "grid-rows-[1fr] opacity-100 p-4 border-l-2 py-2 my-2"
      : "grid-rows-[0fr] opacity-0";
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          x: -100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      animate={IsInView ? "visible" : "hidden"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="p-4 border-2 border-base rounded-xl text-lg"
    >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center  w-full text-start"
      >
        <p>{title}</p>
        <svg
          className="fill-emerald-500 shrink-0 ml-2 "
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={
              "transform origin-center transition duration-200 ease-out " +
              rotate()
            }
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={
              "transform origin-center rotate-90 transition duration-200 ease-out " +
              rotate()
            }
          />
        </svg>
      </button>
      <div
        className={
          "grid overflow-hidden transition-all duration-300 ease-in-out " +
          acordion()
        }
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </motion.div>
  );
};

export default FAQPhoto;

const data = [
  {
    title: "What is the return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. To initiate a return, please contact our customer service team.",
  },
  {
    title: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 5-7 business days. Expedited shipping options are also available at checkout.",
  },
  {
    title: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping times and costs vary depending on the destination.",
  },
  {
    title: "Can I track my order?",
    answer:
      "Yes, once your order is shipped, you will receive an email with a tracking number that you can use to monitor the delivery status.",
  },
  {
    title: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, PayPal, and Apple Pay. All payments are processed securely.",
  },
];
`;
