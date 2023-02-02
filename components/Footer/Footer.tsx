import {memo} from "react";
import Link from "next/link";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.nav}>
            <Link href="/contacts" passHref legacyBehavior>
              <a className={["LXSText", styles.footerLink].join(" ")}>
                Контакты
              </a>
            </Link>
            <Link href="/about-us" passHref legacyBehavior>
              <a className={["LXSText", styles.footerLink].join(" ")}>О нас</a>
            </Link>
            <Link href="/tariffs" passHref legacyBehavior>
              <a className={["LXSText", styles.footerLink].join(" ")}>Тарифы</a>
            </Link>
          </div>
          <Link href="https://t.me/maximmartyr" passHref legacyBehavior>
            <a className={["LXSText", styles.footerLink].join(" ")}>
              by martir
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
