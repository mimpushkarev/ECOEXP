import { memo } from "react";
import Head from "next/head";

import NavigationComponent from "../../frame-components/NavBar/NavigationComponent";

const MainPageComponent = () => {
    return (
        <div>
            <Head>
                <title>Главная</title>
            </Head>

            <NavigationComponent />

            <h1>Главная</h1>
        </div>
    );
}

export default memo(MainPageComponent);
