import { memo } from "react";

import ContactsComponent from "../../components/Contacts/ContactsComponent";
import { ContactsPageType } from "./types";

const ContactsPage: ContactsPageType = () => {
    return (
        <>
            <h1>Контакты</h1>
        </>
    )
};

export default memo(ContactsPage);