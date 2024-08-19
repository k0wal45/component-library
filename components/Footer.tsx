"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const curretPath = usePathname();
  return (
    <footer className="px-8 p-4 bg-base-200 flex items-center justify-around text-center shadow-inner text-lg gap-1 h-48">
      <div className="flex items-center justify-start text-start gap-4">
        <Image
          width={200}
          height={200}
          alt=""
          src="/img/me.png"
          className="w-20 aspect-square rounded-xl"
        />
        <p>
          Created by:
          <br />
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
