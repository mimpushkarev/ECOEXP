import {memo} from "react";

import TariffsTable from "@components/sections/TariffsSection";

import {TariffsPageType} from "./types";

const TariffsPage: TariffsPageType = () => {
  return (
    <>
      <TariffsTable />
    </>
  );
};

export default memo(TariffsPage);
