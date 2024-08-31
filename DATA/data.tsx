import { IoMdMenu } from "react-icons/io";
import {
  FaCheck,
  FaDollarSign,
  FaMedal,
  FaPhone,
  FaQuestion,
} from "react-icons/fa";
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
import {
  FullWidthTestimonialCode,
  FullWidthTestimonialsShowOf,
} from "@/other/Testimonials/FullWidth/FullWidthTestimonialsShowOf";
import {
  FAQPhotoCode,
  FAQPhotoShowOf,
} from "@/other/FAQ/FAQPhoto/FAQPhotoShowOf";
import {
  FAQPhotoInfoCode,
  FAQPhotoInfoShowOf,
} from "@/other/FAQ/FAQPhotoInfo/FAQPhotoInfoShowOf";
import { IoDocument } from "react-icons/io5";
import {
  BadgeOnImageCode,
  BadgeOnImageShowOf,
} from "@/other/About/BadgeOnImage/BadgeOnImageShowOf";
import {
  ExpertAboudShowOf,
  ExpertAboutCode,
} from "@/other/About/ExpertAbout/ExpertAboudShowOf";
import { StepsCode, StepsShowOf } from "@/other/Other/Steps/StepsShowOf";
import {
  CostInCircleCode,
  CostInCircleShowOf,
} from "@/other/Pricing/CostInCircle/CostInCircleShowOf";
import {
  HoverRevealCode,
  HoverRevealShowOf,
} from "@/other/Services/HoverReveal/HoverRevealShowOf";
import {
  SwiperServiceCode,
  SwiperServiceShowOf,
} from "@/other/Services/SwiperService/SwiperServiceShowOf";

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
  {
    type: "Testimonials",
    icon: <FaMessage />,
    name: "Full Width Carousel",
    showOf: <FullWidthTestimonialsShowOf />,
    code: FullWidthTestimonialCode,
  },
  {
    type: "FAQ",
    icon: <FaQuestion />,
    name: "FAQ with photo",
    showOf: <FAQPhotoShowOf />,
    code: FAQPhotoCode,
  },
  {
    type: "FAQ",
    icon: <FaQuestion />,
    name: "FAQ with contact info",
    showOf: <FAQPhotoInfoShowOf />,
    code: FAQPhotoInfoCode,
  },
  {
    type: "About",
    icon: <IoDocument />,
    name: "Badge on image",
    showOf: <BadgeOnImageShowOf />,
    code: BadgeOnImageCode,
  },
  {
    type: "About",
    icon: <IoDocument />,
    name: "Expert Photo",
    showOf: <ExpertAboudShowOf />,
    code: ExpertAboutCode,
  },
  {
    type: "Services",
    icon: <FaDollarSign />,
    name: "Reveal on Hover",
    showOf: <HoverRevealShowOf />,
    code: HoverRevealCode,
  },
  {
    type: "Services",
    icon: <FaDollarSign />,
    name: "Swiper Service",
    showOf: <SwiperServiceShowOf />,
    code: SwiperServiceCode,
  },
  {
    type: "Pricing",
    icon: <FaDollarSign />,
    name: "Cost in circle",
    showOf: <CostInCircleShowOf />,
    code: CostInCircleCode,
  },
  {
    type: "Other Sections",
    icon: <FaCheck />,
    name: "Steps",
    showOf: <StepsShowOf />,
    code: StepsCode,
  },
];

export default componentsData;
