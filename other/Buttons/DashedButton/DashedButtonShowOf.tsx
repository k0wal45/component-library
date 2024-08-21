import React from "react";
import DashedButton from "./DashedButton";

export const DashedButtonShowOf = () => {
  return (
    <div className="w-full z-20 flex items-center justify-center py-24">
      <DashedButton />
    </div>
  );
};

export const DashedButtonCode = `import Link from "next/link";

const DashedButton = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  return (
    <Link
      href={href}
      className="py-2 px-4 border-2 border-dashed border-neutral-900 text-neutral-900 text-xl font-bold rounded-xl duration-200 hover:rounded-md active:scale-95"
    >
      {children}
    </Link>
  );
};

export default DashedButton;
`;
