import React from "react";
import ExpertAbout from "./ExpertAbout";

export const ExpertAboudShowOf = () => {
  return (
    <div>
      <ExpertAbout />
    </div>
  );
};

export const ExpertAboutCode = `import { FaPerson } from "react-icons/fa6";
import classes from "./expert.module.css";
import Image from "next/image";
import Link from "next/link";

const ExpertAbout = () => {
  function yearsSince(dataObecna: any) {
    const dataUrodzenia: any = new Date("2011-03-12");
    const roznicaCzasu = dataObecna - dataUrodzenia;
    const roznicaWiek = new Date(roznicaCzasu).getFullYear() - 1970;
    return roznicaWiek;
  }

  return (
    <div className="mx-auto grid place-items-center p-4 lg:p-8">
      <section
        className={
          classes.bgBoxes +
          " bg-fixed max-w-7xl rounded-3xl px-4  relative text-white text-center flex flex-col items-center justify-center gap-12 overflow-hidden w-full"
        }
      >
        <div className="text-2xl flex items-center gap-4 text-center font-bold mt-12 z-20">
          <div className="text-orange-400">
            <FaPerson />
          </div>
          <h4>Experts</h4>
        </div>

        <p className="text-5xl font-bold text-center z-20">
          Many years of experience
        </p>
        <Link
          href=""
          className="px-6 py-4 bg-orange-400 rounded-lg font-semibold hover:bg-orange-600 active:scale-95 transition-all duration-300 z-20"
        >
          Get in touch
        </Link>
        <div className="z-20 flex flex-col lg:flex-row items-center gap-8 lg:items-end justify-around w-full pt-24 lg:pt-12">
          {/* item */}
          <div className="bg-white px-16 pt-4 rounded-xl lg:rounded-b-none lg:max-w-[20rem] w-full">
            <Image
              width={300}
              height={600}
              src="/img/worker.png"
              alt="Dariusz Kowalski"
              className="scale-[1.4] origin-bottom"
            />
          </div>
          {/* item */}
          <div className="flex flex-col gap-4">
            <p className="text-8xl font-bold text-orange-400">
              {yearsSince(new Date())}
            </p>
            <div className="bg-white p-8 rounded-xl lg:rounded-b-none lg:max-w-[20rem] lg:w-[1000px]">
              <p className="text-2xl font-bold text-black">
                So many years of experience has our company
              </p>
              <p className="text-xl text-neutral-500">
                Our many years of experience translates into the quality and
                reliability of our services.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl lg:rounded-b-none lg:max-w-[20rem] w-full relative overflow-hidden h-[26rem]">
            <Image
              width={600}
              height={800}
              src="https://images.unsplash.com/photo-1593630265256-d2cc162ab58f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div
          className={
            classes.bgRoudedMask + " absolute top-0 left-0 w-full h-full z-10"
          }
        ></div>
      </section>
    </div>
  );
};

export default ExpertAbout;


// here you can have styles for expert.module.css that you have to add under this file

.bgBoxes {
  background-color: #000000;
  opacity: 1;
  background-image: linear-gradient(#242424 2px, transparent 2px),
    linear-gradient(to right, #242424 2px, #000000 2px);
  background-size: 100px 100px;
}
.bgRoudedMask {
  background: rgb(0, 0, 0);
  background: -moz-radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 56%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 56%,
    rgba(0, 0, 0, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 56%,
    rgba(0, 0, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
}

`;
