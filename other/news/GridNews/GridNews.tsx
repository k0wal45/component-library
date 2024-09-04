import Image from "next/image";

const GridNews = () => {
  return (
    <section className="flex flex-col gap-8 w-full py-12 items-center justify-start p-4">
      <p className="text-xl tracking-[1rem] uppercase">our news</p>
      <h3 className="text-5xl first-letter:uppercase">promotions & events</h3>

      <div className="grid lg:grid-rows-2 lg:grid-cols-3 lg:max-w-6xl mt-12">
        <Image
          width={600}
          height={600}
          src="https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Taste Courtyard Dish"
          className="object-cover h-full aspect-square"
        />

        <div className="aspect-square bg-neutral-100 flex flex-col justify-center items-center p-4 lg:px-8 text-center gap-4">
          <h3 className="text-4xl">Beef Sauteed Onions - Let's Enjoy!</h3>
          <p className="text-gray-400 text-xl">---------</p>
          <p className="text-gray-400 text-xl">
            123 Broadway St, NY, United States
            <br />
            10:00 - 14:00
            <br />
            Monday, Jan. 25th 2024
          </p>
        </div>
        <Image
          width={600}
          height={600}
          src="https://images.unsplash.com/photo-1648501407197-4b7cd0957b27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Taste Courtyard Dish"
          className="object-cover h-full aspect-square"
        />

        <div className="aspect-square bg-neutral-100 flex flex-col justify-center items-center p-4 lg:px-8 text-center gap-4">
          <h3 className="text-4xl">Become A Super Chef So Easy With Us</h3>
          <p className="text-gray-400 text-xl">---------</p>
          <p className="text-gray-400 text-xl">
            1600 Allen St, NY, United States
            <br />
            12:00 - 17:00
            <br />
            Friday, Jan. 24th 2024
          </p>
        </div>
        <Image
          width={600}
          height={600}
          src="https://images.unsplash.com/photo-1577969181928-69c4e557c99a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Taste Courtyard Dish"
          className="object-cover h-full aspect-square"
        />

        <div className="aspect-square bg-neutral-100 flex flex-col justify-center items-center p-4 lg:px-8 text-center gap-4">
          <h3 className="text-4xl">Art Photography In Foody</h3>
          <p className="text-gray-400 text-xl">---------</p>
          <p className="text-gray-400 text-xl">
            580 Brooklyn St, NY, United States
            <br />
            9:00 - 12:00
            <br />
            Thursday, Feb. 6th 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default GridNews;
