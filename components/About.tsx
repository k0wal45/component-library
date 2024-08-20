import { BsFillPersonFill } from "react-icons/bs";
import {
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaMoon,
  FaQuestion,
} from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

const About = () => {
  return (
    <div
      className="max-w-7xl w-full mx-auto py-24 px-4 flex flex-col md:grid place-items-center md:grid-cols-8 lg:grid-cols-11 grid-rows-4 gap-4  overflow-visible
      [&>*]:rounded-xl [&>*]:border-2 [&>*]:border-neutral-200 [&>*]:size-full
    "
    >
      <div className="col-span-8 lg:col-span-3 relative overflow-hidden group p-4 flex items-center">
        <h4 className="text-6xl font-bold text-neutral-400 group-hover:text-neutral-200 duration-300">
          About
        </h4>
        <FaQuestion className="absolute top-0 right-0 text-8xl text-neutral-400/30 -rotate-[30deg] scale-150 z-[-1]" />
        <div className="size-full absolute top-0 left-0 bg-neutral-800 z-[-2] translate-y-full group-hover:translate-y-0 duration-300 transition-transform"></div>
      </div>
      <div className="h-full w-full col-span-4 row-span-4 overflow-y-scroll scroll-hide aspect-square p-4">
        <p className="text-xl text-neutral-600">
          Lunaris UI is a personal side project that I started to think about
          after recognizing a recurring pattern in my freelance work constantly
          reusing and customizing the same components across various projects.
          To streamline this process and help other developers in their careers,
          I created Lunaris UI, a library of simple, ready-to-use components
          designed to be easily copied and pasted into any project.
          <br />
          <br />
          Built on Next.js, React.js, Tailwind CSS, and Framer Motion, Lunaris
          UI offers a collection of components that are both versatile and easy
          to integrate. These are the only dependencies you'll need to install,
          making it a lightweight solution for any project, whether personal or
          commercial.
          <br />
          <br />
          Lunaris UI is aimed at developers who need customizable components for
          their projects. Whether you're building something for yourself or for
          a client, these components are free to use and modify however you see
          fit. My goal with this library is to empower developers with a toolkit
          that simplifies their workflow, allowing them to focus on creating
          amazing products.
          <br />
          <br />
          Feel free to explore, use, and customize these components to fit your
          needs. I'm excited to see how Lunaris UI can help others in their
          development journeys.
        </p>
      </div>
      <div
        className="w-full col-span-4 row-span-4 max-h-[27rem] grid grid-cols-2 border-none p-0 gap-4 aspect-square
        [&>*]:rounded-xl [&>*]:size-full text-white text-4xl 
      "
      >
        <a
          href="https://www.linkedin.com/in/daniel-kowalski-com/"
          target="_blank"
          className="bg-blue-500 grid place-items-center hover:rotate-12 duration-200 ease-in-out active:scale-95"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/k0wal45"
          target="_blank"
          className="bg-zinc-900 grid place-items-center hover:rotate-12 duration-200 ease-in-out active:scale-95"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/k0wal45/"
          target="_blank"
          className="bg-gradient-to-br from-purple-600 to-yellow-500 via-pink-600 grid place-items-center hover:rotate-12 duration-200 ease-in-out active:scale-95"
        >
          <FaInstagram />
        </a>
        <a
          href="https://daniel-kowalski.com"
          target="_blank"
          className="bg-red-600 grid place-items-center hover:rotate-12 duration-200 ease-in-out active:scale-90"
        >
          <FaGlobe />
        </a>
      </div>
      <div className="col-span-3 row-span-2 bg-neutral-900 flex flex-col gap-4 items-center justify-center text-white p-4 py-8">
        <FaMoon className="text-7xl" />
        <p className="text-4xl font-bold">Lunaris UI</p>
      </div>
      <div className="col-span-3 relative overflow-hidden group p-4 grid place-items-center font-medium">
        <p className="text-2xl text-neutral-800 group-hover:text-neutral-200 duration-300">
          Author:{" "}
          <a
            href="https://daniel-kowalski.com"
            target="_blank"
            className="underline"
          >
            Daniel Kowalski
          </a>
        </p>
        <BsFillPersonFill className="absolute top-0 right-0 text-8xl text-neutral-400/30 -rotate-[30deg] scale-150 z-[-1]" />
        <div className="size-full absolute top-0 left-0 bg-neutral-800 z-[-2] translate-y-full group-hover:translate-y-0 duration-300 transition-transform"></div>
      </div>
    </div>
  );
};

export default About;
