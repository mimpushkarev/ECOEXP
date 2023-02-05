import {FC} from "react";

type ContactType = {
  title: string;
  value: string;
  isCopy?: boolean;
};
type ContactsType = Array<ContactType>;

type ContactsCardPropsType = {
  contacts: ContactsType;
};
export type ContactsCardType = FC<ContactsCardPropsType>;
