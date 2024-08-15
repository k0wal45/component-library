import {
  GradientButtonCode,
  GradientButtonShowOf,
} from "./components/ComponentShowcase/Components/Buttons/GradientButton/ShowOf";
import {
  TextLeftHeroCode,
  TextLeftHeroShowOf,
} from "./components/ComponentShowcase/Components/Hero/LeftTextRightImg/showOf";

const componentsData = [
  {
    type: "Button",
    name: "Gradient Button",
    showOf: <GradientButtonShowOf />,
    code: GradientButtonCode,
  },
  {
    type: "Hero",
    name: "Text on left Hero",
    showOf: <TextLeftHeroShowOf />,
    code: TextLeftHeroCode,
  },
];

export default componentsData;
