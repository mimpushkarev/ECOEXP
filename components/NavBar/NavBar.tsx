import {memo} from "react";
import Link from "next/link";

import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className={styles.navbar}>
          <Link className={styles.link} href="/">
            Главная
          </Link>
          <Link className={styles.link} href="/about-us">
            О нас
          </Link>
          <Link className={styles.link} href="/contacts">
            Контакты
          </Link>
          <Link className={styles.link} href="/tariffs">
            Тарифы
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(NavBar);
