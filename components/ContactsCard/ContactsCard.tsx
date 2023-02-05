import {memo} from "react";

import styles from "./ContactsCard.module.scss";

const ContactsCard = () => {
  return (
    <div className={styles.contactgroup}>
      <a
        className={[styles.contactItem, styles.contactItem_active].join(" ")}
        href="/"
        target="_blank"
      >
        <div className="XLH1">
          <p>01</p>
          <p>Telegram</p>
        </div>
      </a>
      <a href="/" className={styles.contactItem} target="_blank">
        <div className="XLH1">
          <p>02</p>
          <p>Vk</p>
        </div>
      </a>
      <div className={styles.contactItem}>
        <div className="XLH1">
          <p>03</p>
          <p>Mail</p>
        </div>
      </div>
    </div>
  );
};

export default memo(ContactsCard);
