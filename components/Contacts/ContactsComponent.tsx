import { memo } from "react";
import Head from "next/head";

import NavigationComponent from "../../frame-components/NavBar/NavigationComponent";

const ContactsComponent = () => {
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

export default memo(ContactsComponent);
