import { FaPerson } from "react-icons/fa6";

const DarkOnHover = () => {
  return (
    <div className="relative w-72 overflow-hidden flex flex-col justify-between gap-4 p-12 bg-white shadow-sm text-start shrink-0 cursor-pointer transition-all hover:scale-[1.015] hover:shadow-xl group">
      <div className="flex justify-between items-center py-4 border-b-2 border-neutral-300">
        <FaPerson className="text-5xl text-orange-500" />
        <p className="text-neutral-400 font-bold text-xl group-hover:text-white  transition-all duration-700">
          01
        </p>
      </div>
      <h4 className="text-3xl font-medium text-netural-900 group-hover:text-neutral-100 transition-all duration-700">
        Hire us
      </h4>
      <p className="text-neutral-600  group-hover:text-neutral-300 transition-all duration-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora modi
        cumque possimus totam id laboriosam qui nihil ipsam aliquam harum.
      </p>
      <div className="size-full absolute top-0 left-0 bg-neutral-900 z-[-2] -translate-x-full group-hover:translate-x-0 duration-300 transition-transform"></div>
    </div>
  );
};

export default DarkOnHover;
