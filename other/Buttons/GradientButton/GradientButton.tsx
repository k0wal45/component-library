"use client";
import Link from "next/link";

const GradientButton = ({
  link,
  children,
}: {
  link: string;
  children?: React.ReactNode;
}) => {
  return (
    <Link
      href={link}
      className="p-4 px-8 bg-gradient-to-r from-pink-500 to-blue-400 text-center rounded-md text-neutral-900 font-bold grid place-items-center text-xl transition-all duration-300
      hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.7)] 
      active:translate-x-[0px] active:translate-y-[0px] active:shadow-none
      "
    >
      {children}
    </Link>
  );
};

export default GradientButton;
