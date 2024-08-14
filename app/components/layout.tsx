import Link from "next/link";
import React from "react";
import { IoFileTrayStackedSharp } from "react-icons/io5";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <ul className="fixed top-0 left-0 flex flex-col h-screen bg-white pt-20 px-2 overflow-scroll scroll-smooth scroll-hide">
        <li>
          <Link
            href="/components"
            className="text-lg text-primary flex items-center gap-2 font-semibold"
          >
            <IoFileTrayStackedSharp />
            All Components
          </Link>
        </li>
        {DUMMY_DATA.map((data) => (
          <ul
            key={data.title}
            className="p-2 flex flex-col font-medium text-sm"
          >
            <li className="font-semibold text-neutral-400 pl-[-1.5rem]">
              {data.title}
            </li>
            {data.array.map((name) => (
              <li
                key={name}
                className="w-full p-1 px-2 hover:bg-neutral-200 rounded-sm"
              >
                {name}
              </li>
            ))}
          </ul>
        ))}
      </ul>
      <div className="ml-52 w-[calc(100vw-13rem)]">{children}</div>
    </main>
  );
};

export default layout;

const DUMMY_DATA = [
  {
    title: "Sections",
    array: [
      "FAQ",
      "Forms",
      "Heros",
      "Features",
      "Pricing",
      "Sign in",
      "Stats",
      "Testimonials",
      "3D",
      "Kanban Boards",
    ],
  },
  {
    title: "Components",
    array: [
      "Accordions",
      "Buttons",
      "Calendars",
      "Cards",
      "Carousels",
      "Countdown",
      "Dropdown Menus",
      "Grids",
      "Inputs",
      "Links",
      "Loaders",
      "Modals",
      "Navbars & Menus",
      "Notifications",
      "Other",
      "Progress",
      "Tabs",
      "Tables",
      "Text",
      "Toggles",
    ],
  },
];
