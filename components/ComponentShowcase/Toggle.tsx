"use client";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { FaCode, FaEye } from "react-icons/fa";

const classes =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

type ToggleOptionsType = true | false;
const Toggle = ({
  selected,
  setSelected,
}: {
  selected: ToggleOptionsType;
  setSelected: Dispatch<SetStateAction<ToggleOptionsType>>;
}) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${classes} ${selected ? "text-white" : "text-slate-800"}`}
        onClick={() => {
          setSelected(true);
        }}
      >
        <FaEye className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">View</span>
      </button>
      <button
        className={`${classes} ${!selected ? "text-white" : "text-slate-800"}`}
        onClick={() => {
          setSelected(false);
        }}
      >
        <FaCode className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Code</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          !selected ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default Toggle;
