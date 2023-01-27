import { memo } from "react";

import ContactsComponent from "../../components/Contacts/ContactsComponent";
import { ContactsPageType } from "./types";

const ContactsPage: ContactsPageType = () => {
    return <ContactsComponent />;
};

export default memo(ContactsPage);