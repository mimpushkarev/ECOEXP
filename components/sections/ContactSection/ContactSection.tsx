import {memo} from "react";

import ContactsCard from "@components/ContactsCard";

import styles from "./ContactSection.module.scss";

const CONTACT_TEXTS = {
  title: "Вы всегда можете связаться с нами.",
  description: "Сделайте это в удобном для вас варианте из предложенных.",
};

const CONTACTS = [
  {
    title: "Телефон",
    value: "8(965)514-82-20",
    isCopy: true,
  },
  {
    title: "Телефон",
    value: "8(912)035-72-23",
    isCopy: true,
  },
  {
    title: "Mail",
    value: "ecopragmat@yandex.ru",
    isCopy: true,
  },
];

const ContactSection = () => {
  return (
    <section className="section" id="contacts">
      <div className="container">
        <div className={styles.box}>
          <h2 className="H2">{CONTACT_TEXTS.title}</h2>
          <div className={styles.paragraph}>
            <p className="XLText">{CONTACT_TEXTS.description}</p>
          </div>
          <ContactsCard contacts={CONTACTS} />
        </div>
      </div>
    </section>
  );
};

export default memo(ContactSection);
