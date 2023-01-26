import Head from "next/head";
import React from "react";
import NavigationComponent from "../../frame-components/NavBar/NavigationComponent";

function ContactsComponent() {
    return (
        <div>
            <Head>
                <title>Контакты </title>
            </Head>
            <NavigationComponent />

            <h1>Контакты</h1>
        </div>
    );
}

export default ContactsComponent;
