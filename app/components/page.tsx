import React from "react";

const page = () => {
  return (
    <div className="max-w-5xl flex flex-col gap-8 mt-20 mx-auto w-full">
      <h1 className="text-4xl font-semibold">All Components</h1>
      <p className="max-w-2xl">
        Components are built with{" "}
        <a
          href="https://react.dev/"
          className="underline text-primary"
          target="_blank"
        >
          React JS
        </a>
        ,{" "}
        <a href="https://nextjs.org/" className="underline " target="_blank">
          Next JS
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          className="underline text-primary"
          target="_blank"
        >
          Tailwind CSS
        </a>
        , and{" "}
        <a
          href="https://www.framer.com/motion/"
          className="underline text-secondary"
          target="_blank"
        >
          Framer Motion
        </a>
        . This is side-project to give you guys free and usefull tool to create
        websites faster and easier. If you have any question, hit me up on
        e-mail:{" "}
        <a
          href="mailto:lunarisweb.pl@gmail.com"
          className="underline text-accent"
        >
          lunarisweb.pl@gmail.com
        </a>
      </p>
    </div>
  );
};

export default page;
