"use client";
import { motion } from "framer-motion";

const UniversalToogle = ({
  selected,
  setSelected,
  option1,
  option2,
}: {
  selected: any;
  setSelected: any;
  option1: string;
  option2: string;
}) => {
  return (
    <div className="flex gap-2 relative">
      <div
        onClick={() => setSelected(true)}
        className="relative py-1 px-2 rounded-xl transition-colors duration-300 cursor-pointer"
      >
        {option1}
        <motion.div
          animate={selected ? "active" : "inactive"}
          variants={{
            active: {
              x: "0px",
              opacity: 1,
            },
            inactive: {
              x: "-100px",
              opacity: 0,
            },
          }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="w-full h-full bg-primary absolute top-0 left-0 z-[-1] rounded-lg"
        ></motion.div>
      </div>
      <div
        onClick={() => setSelected(false)}
        className="relative py-1 px-2 rounded-xl transition-colors duration-300 cursor-pointer"
      >
        {option2}
        <motion.div
          animate={!selected ? "active" : "inactive"}
          variants={{
            active: {
              x: "0px",
              opacity: 1,
            },
            inactive: {
              x: "100px",
              opacity: 0,
            },
          }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="w-full h-full bg-primary absolute top-0 left-0 z-[-1] rounded-lg"
        ></motion.div>
      </div>
    </div>
  );
};

export default UniversalToogle;
