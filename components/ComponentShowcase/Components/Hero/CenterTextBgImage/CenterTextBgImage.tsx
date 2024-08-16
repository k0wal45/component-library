import Image from "next/image";

// remember to add next.config.js file for images from 3rd party websites to work

const CenterTextBgImage = () => {
  return (
    <header className="w-full relative flex flex-col justify-center items-center gap-6 p-4 py-24 lg:py-48 overflow-hidden text-center z-20 text-white">
      <h1 className="text-5xl lg:text-7xl font-bold">
        The Future of Innovation
      </h1>
      <p className="text-xl max-w-xl">
        Explore how cutting-edge solutions are transforming the world around us.
        Step into the world of innovation and learn more about the future of
        technology.
      </p>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <div className="p-4 px-6 bg-white text-black font-bold text-lg hover:bg-neutral-300 active:scale-105 transition-all duration-200">
          Learn More
        </div>
        <div className="p-4 px-6 text-white border-4 scale-95 border-white font-bold text-lg hover:bg-neutral-300/10 active:scale-105 transition-all duration-200">
          Sign Up
        </div>
      </div>
      <Image
        width={1920}
        height={1080}
        alt="Technology image from unsplash"
        src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute w-full h-full top-0 left-0 z-[-1] object-cover brightness-50"
      />
    </header>
  );
};

export default CenterTextBgImage;
