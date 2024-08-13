"use client";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { FaMoon } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { VscClippy } from "react-icons/vsc";

const Navbar = () => {
  const curretPath = usePathname();
  console.log(curretPath);

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    const previous: any = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full px-4 h-16 flex justify-center items-center lg:px-20 z-40 bg-white shadow-xl overflow-hidden"
    >
      <div className="max-w-7xl w-full flex justify-between items-center h-full">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid place-items-center bg-neutral-900 p-2 rounded-lg">
            <FaMoon className="text-white" />
          </div>
          <p className="text-3xl font-bold text-black hidden sm:block">
            Lunaris UI
          </p>
        </Link>
        <ul className="flex items-center font-medium h-full">
          <li className="relative h-full flex items-center">
            <Link href="/components" className="mx-4">
              Components
            </Link>

            <div
              className={`absolute w-full bottom-0 left-0 h-2 bg-primary z-[-1] transition-transform duration-200 ease-in-out ${
                curretPath.startsWith("/components")
                  ? "translate-y-0"
                  : "translate-y-12"
              }`}
              style={{ clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" }}
            ></div>
          </li>
          <li className="h-8 w-[1px] bg-neutral-400"></li>
          <li className="relative h-full flex items-center">
            <Link href="/about" className="mx-4">
              About
            </Link>
            <div
              className={`absolute w-full bottom-0 left-0 h-2 bg-primary z-[-1] transition-transform duration-200 ease-in-out ${
                curretPath.startsWith("/about")
                  ? "translate-y-0"
                  : "translate-y-12"
              }`}
              style={{ clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" }}
            ></div>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
