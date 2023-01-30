import {memo} from "react";

import MainSection from "@components/sections/MainSection/MainSection";
import {MainPageType} from "./types";

const MainPage: MainPageType = () => {
  return (
    <>
      <MainSection />
    </>
  );
};

export default memo(MainPage);
