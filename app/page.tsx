import {memo} from "react";

import MainSection from "@components/sections/MainSection";
import AboutUsSection from "@components/sections/AboutUsSection";
import ContactSection from "@components/sections/ContactSection";

import {MainPageType} from "./types";

const MainPage: MainPageType = () => {
  return (
    <>
      <MainSection />
      <AboutUsSection />
      <ContactSection />
    </>
  );
};

export default memo(MainPage);
