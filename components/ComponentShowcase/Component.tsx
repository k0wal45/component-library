import GradientButton from "./Components/Buttons/GradientButton/GradientButton";

const Component = ({ selected }: { selected: boolean }) => {
  return (
    <div
      className={`bg-gray-900 w-full z-20 flex items-center justify-center py-24 ${
        !selected ? "hidden" : "block"
      }`}
    >
      <GradientButton link="">Button</GradientButton>
    </div>
  );
};

export default Component;
