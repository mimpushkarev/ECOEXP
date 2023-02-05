import {memo} from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.nav}>
            <a
              href="/#contacts"
              className={["LXSText", styles.footerLink].join(" ")}
            >
              Контакты
            </a>
            <a
              href="/#about-us"
              className={["LXSText", styles.footerLink].join(" ")}
            >
              О нас
            </a>
            <a
              href="/#tariffs"
              className={["LXSText", styles.footerLink].join(" ")}
            >
              Тарифы
            </a>
          </div>
          <a
            href="https://t.me/maximmartyr"
            className={["LXSText", styles.footerLink].join(" ")}
            target="_blank"
            rel="noreferrer"
          >
            by martir
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
