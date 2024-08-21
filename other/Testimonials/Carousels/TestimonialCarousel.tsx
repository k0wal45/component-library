"use client";
import { useState } from "react";
import useMeasure from "react-use-measure"; // need this dependecie to work
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialCarousel = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-8 w-full py-16 p-4 overflow-hidden bg-slate-100">
      <p className="relative w-fit flex items-center gap-2 text-orange-500 text-xl font-semibold uppercase after:content-[''] after:absolute after:w-12 after:h-[2px] after:bg-orange-500 after:-right-16 after:hidden sm:after:block">
        Clients Reviews
      </p>
      <h6 className="text-6xl font-semibold max-w-2xl">
        What clients say about us?
      </h6>
      <Swiper />
    </section>
  );
};

export default TestimonialCarousel;

interface Review {
  img: string;
  review: string;
  rating: number;
  name: string;
}

let CARD_WIDTH = 615;
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
    width > BREAKPOINTS.lg ? 2 : width > BREAKPOINTS.sm ? 1 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (reviews.length - CARD_BUFFER);

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
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 overflow-hidden w-full">
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
          {reviews.map((content: Review, index: number) => (
            <TestimonialItem
              content={content}
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

interface Review {
  img: string;
  review: string;
  rating: number;
  name: string;
}
const TestimonialItem = ({
  content,
  width,
  margin,
}: {
  content: Review;
  width: number;
  margin: number;
}) => {
  const rating = [];

  for (let i = 1; i <= content.rating; i++) {
    rating.push(<MdOutlineStar key={i} />);
  }

  return (
    <div
      className="relative overflow-hidden flex flex-col justify-center max-w-[320px] md:max-w-full items-start gap-4 p-12 bg-white shadow-md text-start shrink-0 cursor-pointer transition-all hover:scale-[1.015] hover:shadow-xl group"
      style={{ width: width + "px", marginRight: margin + "px" }}
    >
      <Image
        width={150}
        height={150}
        alt="This person does not exist"
        src={content.img}
        className="size-24 object-cover"
      />
      <p className=" text-neutral-500">{content.review}</p>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
        <p className="text-2xl">{content.name}</p>
        <div className="flex text-xl text-yellow-400">{rating}</div>
      </div>
      <p className="absolute top-6 right-6 text-neutral-100 text-[10rem] z-10 rotate-12 group-hover:text-neutral-200 transition-colors duration-300">
        <FaQuoteRight />
      </p>
    </div>
  );
};

const reviews = [
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Great construction company, work completed on time and as expected. From the very beginning of our cooperation, I felt confident because the team was very professional. I recommend them to anyone looking for reliable specialists.",
    rating: 5,
    name: "John Smith",
  },
  {
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Very good quality of services, although it could be cheaper. Despite that, I am satisfied with the results. Everything was done according to plan, and the materials used for construction were of the highest quality.",
    rating: 4,
    name: "Emil Johnson",
  },
  {
    img: "https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Professional service, but the project was not completed on time. Despite some delays, the company made every effort to correct the situation, and in the end, I am satisfied with the results.",
    rating: 3,
    name: "Michael Davis",
  },
  {
    img: "https://images.unsplash.com/photo-1676484639103-4afa24e93c06?q=80&w=2045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "I am satisfied with the work done, I recommend this company to everyone. The construction crew was very polite and competent, and the entire process went smoothly without major issues.",
    rating: 5,
    name: "James Brown",
  },
  {
    img: "https://images.unsplash.com/photo-1624797432677-6f803a98acb3?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Service was performed as expected, but communication could have been better. At certain points, I felt a lack of updates on the progress of the work, but the final result was very good.",
    rating: 4,
    name: "David Wilson",
  },
];
