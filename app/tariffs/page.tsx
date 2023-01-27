import { memo } from "react";

import TariffsComponent from "../../components/Tariffs/TariffsComponent";
import { TariffsPageType } from "./types";

const TariffsPage: TariffsPageType = () => {
    return <TariffsComponent />;
};

export default memo(TariffsPage);