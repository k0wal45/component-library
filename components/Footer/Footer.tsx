"use client";
import { usePathname } from "next/navigation";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const curretPath = usePathname();
  return (
    <footer className="px-8 p-4 bg-base-200 flex flex-col items-center text-center shadow-inner text-lg gap-1">
      <div className="items-center grid-flow-col">
        <p>Copyright © {year} - All right reserved</p>
      </div>
      <div className="w-48 h-[1px] bg-neutral-300"></div>
      <div>
        <p>
          Created by:{" "}
          <a
            target="_blank"
            href="https://daniel-kowalski.com"
            className="underline"
            rel="noreferrer"
          >
            Daniel Kowalski
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
