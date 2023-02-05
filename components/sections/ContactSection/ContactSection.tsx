import {memo} from "react";

import ContactsCard from "@components/ContactsCard";

import styles from "./ContactSection.module.scss";

const ContactSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.box}>
          <h2 className="H2">Вы всегда можете со мной связаться.</h2>
          <div className={styles.paragraph}>
            <p className="XLText">
              Сделайте это в удобном для вас варианте из предложенных.
            </p>
          </div>
          <ContactsCard />
        </div>
      </div>
    </section>
  );
};

export default memo(ContactSection);
