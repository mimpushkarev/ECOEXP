import {memo} from "react";

import MainSection from "@components/sections/MainSection";
import ContactSection from "@components/sections/ContactSection";
import TariffsTable from "@components/TariffsTable";

import {MainPageType} from "./types";

const MainPage: MainPageType = () => {
  return (
    <>
      <MainSection />
      <TariffsTable />
      <ContactSection />
    </>
  );
};

export default memo(MainPage);
