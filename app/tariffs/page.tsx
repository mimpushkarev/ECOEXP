import { memo } from "react";

import TariffsComponent from "../../components/Tariffs/TariffsComponent";
import { TariffsPageType } from "./types";

const TariffsPage: TariffsPageType = () => {
    return (
        <>
            <h1>Тарифы</h1>
        </>
    );
};

export default memo(TariffsPage);