"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const TechIcon = ({ icon, name }: { icon: string; name: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90vh", "end 70vh"],
  });

  const visible = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div style={{ opacity: visible }} ref={ref}>
      <Image
        width={200}
        height={250}
        src={"/img/" + icon}
        alt={name}
        className="h-44 object-contain"
      />
    </motion.div>
  );
};

export default TechIcon;
