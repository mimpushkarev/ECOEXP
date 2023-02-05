import {memo} from "react";

import AboutUsSection from "@components/sections/AboutUsSection";

import {AboutUsPageType} from "./types";

const AboutUsPage: AboutUsPageType = () => {
  return (
    <>
      <AboutUsSection />
    </>
  );
};

export default memo(AboutUsPage);
