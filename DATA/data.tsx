import { IoMdMenu } from "react-icons/io";
import { FaMedal, FaPhone } from "react-icons/fa";
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
import {
  ReservationFormCode,
  ReservationFormShowOf,
} from "@/other/Contact/ReservationForm/ReservationFormShowOf";
import {
  GridFormCode,
  GridFormShowOf,
} from "@/other/Contact/GridForm/GridFormShowOf";
import {
  SimpleFormCode,
  SimpleFormShowOf,
} from "@/other/Contact/SimpleForm/SimpleFormShowOf";
import {
  HoverButtonCode,
  HoverButtonShowOf,
} from "@/other/Buttons/HoverButton/HoverButtonShowOf";
import {
  DashedButtonCode,
  DashedButtonShowOf,
} from "@/other/Buttons/DashedButton/DashedButtonShowOf";
import {
  TestimonialCarouselCode,
  TestimonialCarouselShowOf,
} from "@/other/Testimonials/Carousels/TestimonialCarouselShowOf";
import { FaMessage } from "react-icons/fa6";

const componentsData = [
  {
    type: "Button",
    icon: <IoMdMenu />,
    name: "Gradient Button",
    showOf: <GradientButtonShowOf />,
    code: GradientButtonCode,
  },
  {
    type: "Button",
    icon: <IoMdMenu />,
    name: "Dashed Button",
    showOf: <DashedButtonShowOf />,
    code: DashedButtonCode,
  },
  {
    type: "Button",
    icon: <IoMdMenu />,
    name: "Hover Button",
    showOf: <HoverButtonShowOf />,
    code: HoverButtonCode,
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
  {
    type: "Contact",
    icon: <FaPhone />,
    name: "Reservation Form",
    showOf: <ReservationFormShowOf />,
    code: ReservationFormCode,
  },
  {
    type: "Contact",
    icon: <FaPhone />,
    name: "Grid Form",
    showOf: <GridFormShowOf />,
    code: GridFormCode,
  },
  {
    type: "Contact",
    icon: <FaPhone />,
    name: "Simple Form",
    showOf: <SimpleFormShowOf />,
    code: SimpleFormCode,
  },
  {
    type: "Testimonials",
    icon: <FaMessage />,
    name: "Testimonials Carousel",
    showOf: <TestimonialCarouselShowOf />,
    code: TestimonialCarouselCode,
  },
];

export default componentsData;
