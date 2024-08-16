import componentsData from "@/DATA/data";
import { createLink, groupComponentsByType } from "@/DATA/helpers";
import Link from "next/link";
import React from "react";
import { IoFileTrayStackedSharp } from "react-icons/io5";

interface ComponentGroup {
  type: string;
  names: string[];
}

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // Group the components by their type
  const components = groupComponentsByType(componentsData);

  return (
    <main>
      <ul className="fixed top-0 left-0 hidden md:flex flex-col h-screen max-w-[15rem] bg-white pt-20 px-2 overflow-scroll scroll-smooth scroll-hide">
        <li>
          <Link
            href="/components"
            className="text-lg text-primary flex items-center gap-2 font-semibold cursor-pointer"
          >
            <IoFileTrayStackedSharp />
            All Components
          </Link>
        </li>
        {/* Iterate over the grouped components */}
        {components.map((data: ComponentGroup) => (
          <ul key={data.type} className="p-2 flex flex-col font-medium text-sm">
            <li className="font-semibold text-neutral-400 pl-[-1.5rem]">
              {data.type} {/* Corrected from `data.title` to `data.type` */}
            </li>
            {data.names.map((name) => (
              <Link key={name} href={"/components/" + createLink(data.type)}>
                <li className="w-full p-1 px-2 hover:bg-neutral-200 rounded-sm cursor-pointer">
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        ))}
      </ul>
      <div className="md:ml-64 md:w-[calc(100vw-20rem)]">{children}</div>
    </main>
  );
};

export default Layout;
