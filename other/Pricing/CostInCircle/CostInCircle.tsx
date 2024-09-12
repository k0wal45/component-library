import { Playfair } from "next/font/google";

const font = Playfair({ subsets: ["latin"] });
// this font is here because with serif fonts it just looks better, feel free to customize it as you want :)

const CostInCircle = () => {
  return (
    <section
      className={
        font.className +
        " flex flex-col justify-center items-center mx-auto p-4 mt-12 text-center"
      }
    >
      <p className="text-xl tracking-[1rem] uppercase">Special menu</p>
      <h4 className="text-5xl font-playfair-semibold">
        Delicious Flavour Of Autumn
      </h4>
      <div className="flex flex-col lg:flex-row gap-8 mt-12">
        <MenuCard
          name="Coconut Shrimp"
          text="Delicate shrimp immersed in coconut sauce, served with crunchy baguette."
          cost={22}
          photo="https://images.unsplash.com/photo-1611695500858-e6ac19b1ca55?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <MenuCard
          name="Asparagus Cream Soup"
          text="Velvety asparagus cream soup, served with garlic croutons."
          cost={14}
          photo="https://images.unsplash.com/photo-1708759284833-b6f465188305?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <MenuCard
          name="Ravioli with Ricotta and Spinach in Cream Sauce"
          text="Delicate ravioli with ricotta and spinach in creamy Alfredo sauce."
          cost={28}
          photo="https://images.unsplash.com/photo-1662478839788-7d2898ca66cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="cursor-pointer px-6 py-4 bg-lime-400 text-xl uppercase rounded-none mt-12 hover:scale-105 active:scale-95 duration-200">
        view full menu
      </div>
    </section>
  );
};

export default CostInCircle;

const MenuCard = ({
  name,
  text,
  cost,
  photo,
}: {
  name: string;
  text: string;
  cost: number;
  photo: string;
}) => {
  return (
    <div className="flex flex-col w-80 shadow-xl bg-neutral-100">
      <div className="relative">
        <img
          src={photo}
          alt="The dish in Tasty Courtyard"
          className="w-80 h-64 object-cover"
        />
        <div className="grid place-items-center text-4xl absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2 scale-125 bg-white p-4 rounded-full aspect-square shadow-[0_0_0_12px_rgba(255,255,255,0.5)]">
          <p className="translate-y-[-10%]">{cost}$</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-8 py-8 pt-12 p-4">
        <h6 className="font-semibold text-3xl mt-4">{name}</h6>
        <p className="text-xl text-gray-500">{text}</p>
      </div>
    </div>
  );
};
