import {memo} from "react";

import styles from "./ContactsCard.module.scss";
import {ContactsCardType} from "./types";

const ContactsCard: ContactsCardType = ({contacts}) => {
  return (
    <div className={styles.contactgroup}>
      {contacts.map((contact, index) => {
        const classes = [styles.contactItem];
        if (index === 0) {
          classes.push(styles.contactItem_active);
        }

        if (contact.isCopy) {
          return (
            <div className={classes.join(" ")} key={contact.value}>
              <div className="XLH1">
                <p>{contact.title}</p>
                <p>{contact.value}</p>
              </div>
            </div>
          );
        }

        return (
          <a
            className={classes.join(" ")}
            href={contact.value}
            key={contact.value}
            target="_blank"
            rel="noreferrer"
          >
            <div className="XLH1">
              <p>{contact.title}</p>
              <p>{contact.value}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default memo(ContactsCard);
