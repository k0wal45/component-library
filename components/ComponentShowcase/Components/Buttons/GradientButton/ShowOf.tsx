import GradientButton from "./GradientButton";

export const GradientButtonShowOf = () => {
  return (
    <div className="bg-gray-900 w-full z-20 flex items-center justify-center py-24">
      <GradientButton link="">Button</GradientButton>
    </div>
  );
};

export const GradientButtonCode = `"use client";
import Link from "next/link";

// to make it work you have to import this button somewhere in your code where you want it, then you have to make looks like this
// <GradientButton link="">Button</GradientButton>
// this is reusable button which u can use anywhere you want in your project

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
      className="p-4 px-8 bg-gradient-to-r from-secondary to-primary text-center rounded-md text-neutral-900 font-bold grid place-items-center text-xl transition-all duration-300
      hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.7)] 
      active:translate-x-[0px] active:translate-y-[0px] active:shadow-none
      "
    >
      {children}
    </Link>
  );
};

export default GradientButton;
`;
