import {memo} from "react";

import ContactsCard from "@components/ContactsCard";

import styles from "./ContactSection.module.scss";

const CONTACT_TEXTS = {
  title: "Вы всегда можете со мной связаться.",
  description: "Сделайте это в удобном для вас варианте из предложенных.",
};

const CONTACTS = [
  {
    title: "Telegram",
    value: "/",
  },
  {
    title: "VK",
    value: "https://vk.com/id104895605",
  },
  {
    title: "Mail",
    value: "test@test.ru",
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
