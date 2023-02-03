import {memo} from "react";

import TariffsTable from "@components/TariffsTable";
import {TariffsPageType} from "./types";

const TariffsPage: TariffsPageType = () => {
  return (
    <>
      <TariffsTable />
    </>
  );
};

export default memo(TariffsPage);
