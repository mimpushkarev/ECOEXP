import {memo} from "react";

import ContactSection from "@components/sections/ContactSection";

import {ContactsPageType} from "./types";

const ContactsPage: ContactsPageType = () => {
  return (
    <>
      <ContactSection />
    </>
  );
};

export default memo(ContactsPage);
