import { IoMdMenu } from "react-icons/io";
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
import { FaMedal } from "react-icons/fa";

const componentsData = [
  {
    type: "Button",
    icon: <IoMdMenu />,
    name: "Gradient Button",
    showOf: <GradientButtonShowOf />,
    code: GradientButtonCode,
  },
  {
    type: "Hero",
    icon: <FaMedal />,
    name: "Text on left Hero",
    showOf: <TextLeftHeroShowOf />,
    code: TextLeftHeroCode,
  },
  {
    type: "Hero",
    icon: <FaMedal />,
    name: "Center with overlay image",
    showOf: <CenterTextBgImageShowOf />,
    code: CenterTextBgImageCode,
  },
];

export default componentsData;
