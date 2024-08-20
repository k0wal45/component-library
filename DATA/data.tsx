import { IoMdMenu } from "react-icons/io";
import { FaMedal } from "react-icons/fa";
import {
  GradientButtonCode,
  GradientButtonShowOf,
} from "@/other/Buttons/GradientButton/ShowOf";
import {
  TextLeftHeroCode,
  TextLeftHeroShowOf,
} from "@/other/Hero/LeftTextRightImg/ShowOf";
import {
  CenterTextBgImageCode,
  CenterTextBgImageShowOf,
} from "@/other/Hero/CenterTextBgImage/CenterTextBgImageShowOf";
import {
  MarginAroundCode,
  MarginAroundShowOf,
} from "@/other/Hero/MarginAround/MarginAroundShowOf";
import { CgCardDiamonds } from "react-icons/cg";
import {
  DarkOnHoverCode,
  DarkOnHoverShowOf,
} from "@/other/Cards/DarkOnHover/DarkOnHoverShowOf";
import {
  ShuffleInBackCode,
  ShuffleInBackShowOf,
} from "@/other/Cards/ShuffleInBack/ShuffleInBackShowOf";

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
  {
    type: "Hero",
    icon: <FaMedal />,
    name: "Margin around",
    showOf: <MarginAroundShowOf />,
    code: MarginAroundCode,
  },
  {
    type: "Cards",
    icon: <CgCardDiamonds />,
    name: "Dark on Hover",
    showOf: <DarkOnHoverShowOf />,
    code: DarkOnHoverCode,
  },
  {
    type: "Cards",
    icon: <CgCardDiamonds />,
    name: "Shuffle in back",
    showOf: <ShuffleInBackShowOf />,
    code: ShuffleInBackCode,
  },
];

export default componentsData;
