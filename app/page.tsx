import {memo} from "react";

import MainSection from "@components/sections/MainSection";
import ContactSection from "@components/sections/ContactSection";

import {MainPageType} from "./types";

const MainPage: MainPageType = () => {
  return (
    <>
      <MainSection />
      <ContactSection />
    </>
  );
};

export default memo(MainPage);
