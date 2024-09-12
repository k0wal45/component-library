"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoLunarisUi from "@/components/Logo";

const Navbar = () => {
  const curretPath = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full px-4 h-16 flex justify-center items-center lg:px-20 z-50 bg-white border-b-2 border-neutral-900 overflow-hidden">
      <div className="max-w-7xl w-full flex justify-between items-center h-full">
        <Link href="/" className="flex items-center gap-2">
          <LogoLunarisUi />
          <p className="text-3xl font-bold text-black hidden sm:block whitespace-nowrap">
            Lunaris UI
          </p>
        </Link>
        <ul className="flex items-center font-medium h-full">
          <li className="relative h-full flex items-center">
            <Link href="/components" className="mx-4">
              Components
            </Link>

            <div
              className={`absolute w-full bottom-0 left-0 h-2 bg-primary z-[-1] transition-transform duration-600 ease-in-out ${
                curretPath.startsWith("/components")
                  ? "translate-y-0"
                  : "translate-y-12"
              }`}
              style={{ clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" }}
            ></div>
          </li>
          <li className="relative h-full flex items-center">
            <Link href="/templates" className="mx-4">
              Templates
            </Link>

            <div
              className={`absolute w-full bottom-0 left-0 h-2 bg-primary z-[-1] transition-transform duration-600 ease-in-out ${
                curretPath.startsWith("/templates")
                  ? "translate-y-0"
                  : "translate-y-12"
              }`}
              style={{ clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" }}
            ></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
