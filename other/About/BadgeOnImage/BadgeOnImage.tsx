import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const BadgeOnImage = () => {
  return (
    <section className="p-4 flex flex-col lg:flex-row items-center justify-center gap-12 my-24 ">
      <AboutImage />
      <Description />
    </section>
  );
};

export default BadgeOnImage;

const AboutImage = () => {
  return (
    <div className="relative w-fit">
      <Image
        width={600}
        height={600}
        alt=""
        src="https://images.unsplash.com/photo-1513692398020-cbaea622c427?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="lg:size-[30rem] object-cover"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
        }}
      />

      <div
        className="bg-white absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 pb-4 pr-4"
        style={{ clipPath: "polygon(0 0, 100% 0, 85% 90%, 0% 100%)" }}
      >
        <Image
          width={700}
          height={600}
          alt=""
          src="https://images.unsplash.com/uploads/14123892966835548e7bd/14369636?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-[10rem] lg:size-[20rem] object-cover "
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 90%, 0% 100%)" }}
        />
      </div>
      <div className="size-40 bg-white rounded-full absolute bottom-0 right-0 p-4">
        <div className=" bg-white rounded-full size-full p-4 border-[2px] border-orange-500 flex flex-col text-center items-center justify-center">
          <p className="text-5xl font-bold text-orange-500">25</p>
          <p className="text-neutral-500 leading-4 font-semibold ">
            years of experience
          </p>
        </div>
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <div className="flex flex-col justify-center max-w-xl gap-4">
      <p className="relative w-fit flex items-center gap-2 text-orange-500 text-xl font-semibold uppercase after:content-[''] after:absolute after:w-12 after:h-[2px] after:bg-orange-500 after:-right-16 after:hidden sm:after:block">
        about our company
      </p>

      <h2 className="text-6xl font-semibold">We think about your dreams</h2>

      <p className="text-lg text-neutral-600">
        Many modern construction companies are focusing on sustainable
        construction practices, using green materials, energy-efficient systems
        and eco-friendly designs to reduce the impact of of their investments on
        the environment.
      </p>

      {/* list */}

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-8 font-semibold">
        {/* item */}
        <div className="flex items-center gap-4">
          <FaCheckCircle className="text-orange-500 text-4xl" />
          <p className="text-xl text-neutral-600">Available 24/7</p>
        </div>
        {/* item */}
        <div className="flex items-center gap-4">
          <FaCheckCircle className="text-orange-500 text-4xl" />
          <p className="text-xl text-neutral-600">Qualified employees</p>
        </div>
        {/* item */}
        <div className="flex items-center gap-4">
          <FaCheckCircle className="text-orange-500 text-4xl" />
          <p className="text-xl text-neutral-600">Modern technology</p>
        </div>
        {/* item */}
        <div className="flex items-center gap-4">
          <FaCheckCircle className="text-orange-500 text-4xl" />
          <p className="text-xl text-neutral-600">25 years of experience</p>
        </div>
      </div>

      {/* bottom */}

      <div className="flex flex-col md:flex-row gap-4 items-start justify-start mt-6">
        <div className="flex w-fit px-8 items-center gap-4 p-4 font-semibold text-xl text-white duration-300 transition-transform active:scale-90 relative overflow-hidden group z-20 cursor-pointer">
          Contact Us
          <div className="absolute w-full h-1/2 top-0 left-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-x-[-110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
          <div className="absolute w-full h-1/2 bottom-0 right-0 bg-gradient-to-r from-neutral-800 to-neutral-900 translate-x-[110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
          <div className="absolute inset-0 bg-orange-500 z-[-2]" />
        </div>
        <div className="border-l-2 border-neutral-300 flex flex-col pl-4">
          <p className="text-xl font-semibold">Benjamin Smith</p>
          <p className="text-orange-500">CEO & Founder</p>
        </div>
      </div>
    </div>
  );
};
