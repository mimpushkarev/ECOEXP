import { memo } from "react";
import Head from "next/head";

import NavigationComponent from "../../frame-components/NavBar/NavigationComponent";

const AboutComponent = () => {
    return (
        <div>
            <Head>
                <title> О нас </title>
            </Head>
            <NavigationComponent />

            <h1>О нас</h1>
        </div>
    );
}

export default memo(AboutComponent);
