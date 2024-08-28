import Image from "next/image";
import React from "react";
import { PiSteps } from "react-icons/pi";

const data = [
  {
    title: "Initial Planning",
    description:
      "Start by defining the goals of the event, setting a budget, and creating a timeline. This step involves brainstorming ideas and outlining the overall concept of the event.",
    img: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Venue Selection",
    description:
      "Choose a suitable venue that meets your event's needs, considering factors like location, capacity, and amenities. It's important to visit potential sites to ensure they align with your vision.",
    img: "https://images.unsplash.com/photo-1521727284875-14f6b020d1d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Event Promotion",
    description:
      "Promote the event through various channels, such as social media, email campaigns, and partnerships. Effective promotion is key to attracting the right audience and ensuring a successful turnout.",
    img: "https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Execution and Follow-Up",
    description:
      "On the day of the event, ensure everything runs smoothly by coordinating with vendors, managing the schedule, and addressing any issues that arise. After the event, gather feedback and evaluate its success for future improvements.",
    img: "https://images.unsplash.com/photo-1471967183320-ee018f6e114a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Steps = () => {
  return (
    <section className="flex flex-col items-center gap-8 p-4 lg:p-12">
      <div className="text-2xl font-medium text-neutral-700 flex items-center gap-4 text-center">
        <div className="text-blue-400">
          <PiSteps />
        </div>
        <h4>Steps</h4>
      </div>

      <p className="text-5xl font-bold text-center">Quick event realisation</p>

      <div className="flex flex-col items-center justify-center">
        {data.map((item, index) => (
          <LineItem data={item} index={index + 1} key={index} />
        ))}
      </div>
    </section>
  );
};

const LineItem = ({ data, index }: { data: any; index: number }) => {
  return (
    <div className="flex flex-col lg:odd:flex-row lg:even:flex-row-reverse lg:gap-8 items-center justify-center w-full lg:h-[30rem] max-w-7xl">
      {/* 1 side */}
      <div className="flex-1 flex flex-col items-start justify-center gap-4">
        <p className="text-4xl font-bold text-neutral-400">{"0" + index}</p>
        <h5 className="text-2xl font-bold">{data.title}</h5>
        <p className="text-light text-lg text-neutral-600">
          {data.description}
        </p>
      </div>
      {/* line */}
      <div className="hidden relative flex-none h-full lg:flex flex-col items-center justify-center after:content-['']  after:w-0.5 after:h-full  after:bg-neutral-300 after:indivne-block after:absolute after:bottom-0 after:left-1/2">
        <div className="size-8 bg-blue-400 rounded-full z-20 translate-x-[1px]"></div>
      </div>
      {/* 2 side */}
      <div className="flex-1 py-12">
        <Image
          width={700}
          height={500}
          alt=""
          src={data.img}
          className="rounded-xl object-cover h-full"
        />
      </div>
    </div>
  );
};

export default Steps;
