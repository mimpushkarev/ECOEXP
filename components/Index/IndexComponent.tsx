import Head from "next/head";
import React from "react";
import NavigationComponent from "../../frame-components/NavBar/NavigationComponent";

function IndexComponent() {
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

export default IndexComponent;
