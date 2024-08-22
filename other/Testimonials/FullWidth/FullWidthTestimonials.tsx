"use client";
import Image from "next/image";
import { useState } from "react";
import useMeasure from "react-use-measure"; // need this dependecie to work
import { MdOutlineStar } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface Review {
  img: string;
  review: string;
  rating: number;
  name: string;
}

const FullWidthTestimonial = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT = Math.abs(offset) < width * (reviews.length - 1);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += width));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= width));
  };

  return (
    <section className="flex flex-col gap-8 py-12 w-full bg-neutral-800 text-white">
      <h6 className="text-3xl lg:text-6xl font-bold text-center p-4">
        Our customers' feedback
      </h6>
      <div className="flex items-center justify-center gap-4 text-neutral-900">
        <button
          className="grid place-items-center p-4  bg-white "
          onClick={shiftLeft}
        >
          <FaArrowLeft />
        </button>
        <button
          className="grid place-items-center p-4 bg-white"
          onClick={shiftRight}
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="w-full overflow-hidden">
        <motion.div
          animate={{
            x: offset,
          }}
          transition={{
            ease: "easeInOut",
          }}
          className="flex w-full"
          ref={ref}
        >
          {reviews.map((content: Review, index: number) => (
            <Review
              img={content.img}
              name={content.name}
              opinion={content.review}
              rate={content.rating}
              key={index}
              width={width}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Review = ({ img, name, opinion, rate, width }: any) => {
  const rating = [];

  for (let i = 1; i <= rate; i++) {
    rating.push(<MdOutlineStar key={i} />);
  }

  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center md:max-w-full text-center gap-12 p-12 px-4 lg:px-12 shrink-0 cursor-pointer transition-all group w-full">
      <div className="flex text-3xl text-white">{rating}</div>

      <p className="text-2xl  font-bold">{opinion}</p>

      <div className="flex flex-col items-center gap-2">
        <Image
          width={100}
          height={100}
          src={img}
          alt="Picture of person"
          className="aspect-square rounded-full w-16 object-cover"
        />
        <h6 className="text-lg text-neutral-200 font-hussar">{name}</h6>
      </div>
    </div>
  );
};

export default FullWidthTestimonial;

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
