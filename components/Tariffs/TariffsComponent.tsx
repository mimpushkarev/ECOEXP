import { memo } from "react";
import Head from "next/head";

import NavigationComponent from "../../frame-components/NavBar/NavigationComponent";

const TariffsComponent = () => {
    return (
        <div>
            <Head>
                <title>Тарифы</title>
            </Head>
            <NavigationComponent />
            <h1>Тарифы</h1>
        </div>
    );
}

export default memo(TariffsComponent);
