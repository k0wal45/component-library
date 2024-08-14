"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { BiPaste } from "react-icons/bi";
import { FaRegCopy } from "react-icons/fa";

const ThreeDHoverScreenCard = () => {
  const [moveUp, setMoveUp] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setMoveUp(latest);
  });

  return (
    <motion.div className="hidden lg:block" ref={ref}>
      <ScreenMock moveUp={moveUp} />
    </motion.div>
  );
};

const ScreenMock = ({ moveUp }: { moveUp: number }) => {
  return (
    // Light Gradient Background
    <motion.div
      style={{
        transformStyle: "preserve-3d",
        rotateY: "15deg",
        rotateX: "2.5deg",
        x: -10,
      }}
      className="w-[40vw] min-w-[30rem] aspect-video rounded-2xl p-4 bg-gradient-to-br from-violet-300 to-indigo-300 shadow-xl"
    >
      {/* Browser Screen */}
      <motion.div
        style={{
          translateY: -moveUp / 5,
          translateZ: "30px",
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full bg-slate-900 rounded-xl shadow-xl p-2 relative"
      >
        {/* Browser Buttons */}
        <div className="flex gap-1 mt-1 relative">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
        </div>
        {/* Browser Mockup */}
        <motion.div
          transition={{ type: "spring", stiffness: 100 }}
          style={{
            transformStyle: "preserve-3d",
            translateY: -moveUp / 5,
          }}
          className="p-2 rounded-md absolute top-8 bottom-2 left-2 right-2 bg-slate-800 grid gap-4 grid-cols-6 grid-rows-6"
        >
          <motion.div
            transition={{ type: "spring", stiffness: 100 }}
            style={{
              translateY: -moveUp / 5,
            }}
            className="rounded-lg w-full col-span-6 row-span-1 bg-slate-700"
          />
          <motion.div
            style={{
              translateY: -moveUp / 6,
              translateZ: "20px",
            }}
            className="rounded-lg w-full col-span-1 row-span-5 bg-slate-700"
          />
          <motion.div
            style={{
              translateY: -moveUp / 4,
              translateZ: "80px",
            }}
            className="rounded-lg w-full col-span-3 row-span-5 bg-gradient-to-br from-accent to-primary flex items-center justify-center z-30"
          >
            <FaRegCopy className="text-7xl" />
          </motion.div>
          <motion.div
            style={{
              translateY: -moveUp / 3,
              translateZ: "120px",
            }}
            className="rounded-lg w-full col-span-2 row-span-5 bg-gradient-to-br from-secondary to-primary flex items-center justify-center z-30"
          >
            <BiPaste className="text-7xl" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ThreeDHoverScreenCard;

// creddits to hover.dev
