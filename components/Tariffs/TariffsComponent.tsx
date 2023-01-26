import Head from "next/head";
import React from "react";
import NavigationComponent from "../../frame-components/NavBar/NavigationComponent";

function TariffsComponent() {
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

export default TariffsComponent;
