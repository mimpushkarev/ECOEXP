import {memo} from "react";

import MainSection from "@components/sections/MainSection";
import AboutUsSection from "@components/sections/AboutUsSection";
import TariffsSection from "@components/sections/TariffsSection";
import ContactSection from "@components/sections/ContactSection";

import {MainPageType} from "./types";

const MainPage: MainPageType = () => {
  return (
    <>
      <MainSection />
      <AboutUsSection />
      <TariffsSection />
      <ContactSection />
    </>
  );
};

export default memo(MainPage);
