import {
  GradientButtonCode,
  GradientButtonShowOf,
} from "../components/ComponentShowcase/Components/Buttons/GradientButton/ShowOf";
import {
  CenterTextBgImageCode,
  CenterTextBgImageShowOf,
} from "../components/ComponentShowcase/Components/Hero/CenterTextBgImage/CenterTextBgImageShowOf";
import {
  TextLeftHeroCode,
  TextLeftHeroShowOf,
} from "../components/ComponentShowcase/Components/Hero/LeftTextRightImg/ShowOf";

const componentsData = [
  {
    type: "Button Of Gradient",
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
  {
    type: "Hero",
    name: "Center with overlay image",
    showOf: <CenterTextBgImageShowOf />,
    code: CenterTextBgImageCode,
  },
];

export default componentsData;
