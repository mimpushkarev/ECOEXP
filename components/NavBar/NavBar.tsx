"use client";
import {memo} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import styles from "./NavBar.module.scss";

const NavBar = () => {
  const router = usePathname();
  return (
    <div className={router === "/" ? styles.navbarMainSection : styles.navbar}>
      <div className="container">
        <div className={styles.navbarWrapper}>
          {router === "/" ? (
            <div className={styles.link} />
          ) : (
            <Link href="/" passHref legacyBehavior>
              <a className={["H4", styles.link].join(" ")}>Главная</a>
            </Link>
          )}
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

// const navigation = [
//   {id: 1, title: "Главная", path: "/"},
//   {id: 2, title: "О нас", path: "/about-us"},
//   {id: 3, title: "Тарифы", path: "/tariffs"},
//   {id: 4, title: "Контакты", path: "/contacts"},
// ];
{
  /* <div>
  {navigation.map(({id, title, path}) => (
    <Link key={id} href={path} passHref legacyBehavior>
      <a className={["H4", styles.link].join(" ")}>{title}</a>
    </Link>
  ))}
</div> */
}
