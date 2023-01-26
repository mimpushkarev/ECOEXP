import Head from "next/head";
import React from "react";
import NavigationComponent from "../../frame-components/NavBar/NavigationComponent";

function AboutComponent() {
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

export default AboutComponent;
