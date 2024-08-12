import SlimeButton from "../Showcase/SlimeButton";

const Component = ({ selected }: { selected: boolean }) => {
  return (
    <div
      className={`bg-gray-900 w-full z-20 flex items-center justify-center py-24 ${
        !selected ? "hidden" : "block"
      }`}
    >
      <SlimeButton />
    </div>
  );
};

export default Component;
