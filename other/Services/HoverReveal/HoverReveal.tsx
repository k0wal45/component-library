"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineWeb } from "react-icons/md";
import { PiPencilCircle } from "react-icons/pi";
import { FaAddressCard } from "react-icons/fa";
import Link from "next/link";

const HoverReveal = () => {
  return (
    <section className="bg-cover lg:bg-contain flex flex-col items-center justift-center gap-8 mx-auto p-4 my-12">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <h5 className="text-3xl lg:text-5xl font-bold">
          What services do I offer?
        </h5>
        <p className="lg:w-2/3 text-lg">
          I provide services for creating responsive and fast websites, logos,
          and all kinds of advertising materials such as business cards or
          banners.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-center justify-center pb-12 pt-0 lg:pt-12 w-full">
        <OfferCard
          title="Logos"
          text="Memorable and visually pleasing logos for any company"
          link=""
          img="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          icon={<PiPencilCircle />}
        />

        <OfferCard
          title="Websites"
          text="Modern, responsive websites compatible with all devices"
          link=""
          img="https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          icon={<MdOutlineWeb />}
        />

        <OfferCard
          title="Advertising Materials"
          text="Business cards, banners, and many other things that will help you attract customers"
          link=""
          img="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          icon={<FaAddressCard />}
        />

        <CardMobile
          title="Logos"
          text="Memorable and visually pleasing logos for any company"
          link=""
          img="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          icon={<PiPencilCircle />}
        />
        <CardMobile
          title="Websites"
          text="Modern, responsive websites compatible with all devices"
          link=""
          img="https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          icon={<MdOutlineWeb />}
        />
        <CardMobile
          title="Advertising Materials"
          text="Business cards, banners, and many other things that will help you attract customers"
          link=""
          img="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          icon={<FaAddressCard />}
        />
      </div>
    </section>
  );
};

export default HoverReveal;

const CardMobile = ({
  title,
  text,
  link,
  img,
  icon,
}: {
  title: string;
  text: string;
  link: string;
  img: string;
  icon: JSX.Element;
}) => {
  return (
    <div className="bg-white relative w-full max-w-[25rem] aspect-square flex-1 z-10 group lg:hidden block">
      <Image
        src={img}
        alt="title"
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute z-[-1]"
      />
      <div className="w-full h-full p-2">
        <div className="flex flex-col z-20 bg-white w-full h-full items-center justify-center text-center p-4 gap-2">
          <p className="text-8xl text-blue-500">{icon}</p>
          <h6 className="text-2xl font-bold">{title}</h6>
          <p>{text}</p>
          <div>
            <Link href={link}>Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const OfferCard = ({
  title,
  text,
  link,
  img,
  icon,
}: {
  title: string;
  text: string;
  link: string;
  img: string;
  icon: JSX.Element;
}) => {
  const clipPath = {
    initial: { clipPath: "polygon(0 0, 100% 0, 11% 11%, 0 100%)" },
    animate: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  };

  const scale = {
    initial: { scale: 1 },
    animate: { scale: 1.1 },
  };

  return (
    <motion.div
      className="bg-white relative w-full max-w-[25rem] aspect-square flex-1 z-10 group hidden lg:block"
      whileHover="animate"
      initial="initial"
      animate="initial"
      variants={scale}
      transition={{ duration: 0.6, ease: "backOut" }}
    >
      <Image
        src={img}
        alt="title"
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute z-[-1]"
      />
      <div className="w-full h-full p-2">
        <motion.div
          variants={clipPath}
          className="flex flex-col z-20 bg-white w-full h-full items-center justify-center py-12 text-center p-4 gap-2"
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <motion.p
            className="text-8xl text-blue-500"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              initial: { opacity: 0, translateY: "20px" },
              animate: { opacity: 1, translateY: 0 },
            }}
          >
            {icon}
          </motion.p>

          <motion.h6
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={{
              initial: { opacity: 0, translateY: "20px" },
              animate: { opacity: 1, translateY: 0 },
            }}
            className="text-2xl font-bold"
          >
            {title}
          </motion.h6>
          <motion.p
            transition={{ duration: 0.7, delay: 0.4 }}
            variants={{
              initial: { opacity: 0, translateY: "20px" },
              animate: { opacity: 1, translateY: 0 },
            }}
          >
            {text}
          </motion.p>
          <motion.div
            transition={{ duration: 0.8, delay: 0.5 }}
            variants={{
              initial: { opacity: 0, translateY: "20px" },
              animate: { opacity: 1, translateY: 0 },
            }}
            className="mt-4"
          >
            <Link
              href={link}
              className="cursor-pointer px-6 py-4 bg-blue-500 text-lg uppercase rounded-none hover:scale-105 active:scale-95 duration-200 font-bold"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
