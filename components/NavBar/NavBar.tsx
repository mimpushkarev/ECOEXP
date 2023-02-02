import {memo} from "react";
import Link from "next/link";

import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarWrapper}>
          <Link href="/" passHref legacyBehavior>
            <a className={["H4", styles.link].join(" ")}>Главная</a>
          </Link>
          <div className={styles.nav}>
            <Link href="/about-us" passHref legacyBehavior>
              <a className={["H4", styles.link].join(" ")}>О нас</a>
            </Link>
            <Link href="/tariffs" passHref legacyBehavior>
              <a className={["H4", styles.link].join(" ")}>Тарифы</a>
            </Link>
            <Link href="/contacts" passHref legacyBehavior>
              <a className={["H4", styles.link].join(" ")}>Контакты</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(NavBar);
