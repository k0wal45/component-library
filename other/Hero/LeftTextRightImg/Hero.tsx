import Image from "next/image";

// replace image for yors to work

const TextLeftHero = () => {
  return (
    <header
      id="glowna"
      className="flex flex-col lg:flex-row justify-center gap-4 items-center lg:px-48 max-w-screen py-24 pb-12 shadow-2xl bg-neutral-800"
    >
      <div className="flex flex-col justify-center items-start lg:max-w-[40vw] p-4 gap-8">
        <h1 className="text-4xl lg:text-6xl font-bold  text-white">
          Knowledge and specialists are the key to be secure
        </h1>
        <p className="text-xl text-neutral-100">Be safe on the internet</p>
        <div className="p-4 px-6 bg-gradient-to-br from-orange-500 bg-yellow-400 font-semibold text-white duration-200 transition-all hover:scale-105 active:scale-95">
          Take Action
        </div>
      </div>
      <Image
        width={800}
        height={700}
        src="/components/hero/safe.png"
        alt="Laptop Bezpiecznie"
        className="w-[80vw] lg:max-w-[50%] lg:w-full"
      />
    </header>
  );
};

export default TextLeftHero;
