"use client";
import {memo, useEffect, useRef, useState} from "react";
import {usePathname} from "next/navigation";

import styles from "./NavBar.module.scss";

const NavBar = () => {
  const router = usePathname();

  const [isOnTop, setOnTopStatus] = useState(typeof window !== "undefined" ? window.pageYOffset < 200 : true);
  const headerRef = useRef();

  useEffect(() => {
    const setScrollStatus = () => {
      setOnTopStatus(window.pageYOffset < 200);
    };
    if (router === "/") {
      window.addEventListener("scroll", setScrollStatus);
    }

    setOnTopStatus(router === "/");

    return () => {
      window.removeEventListener("scroll", setScrollStatus);
    };
  }, [router]);

  return (
    <header
      ref={headerRef}
      className={[
        styles.navbar,
        isOnTop ? styles.navbar_isOnTop : "",
        router === "/" ? styles.mainPage : "",
      ].join(" ")}
    >
      <div className="container">
        <nav className={styles.navbarWrapper}>
          {router === "/" ? (
            <div className={styles.link} />
          ) : (
            <a href="/#" className={["H4", styles.link].join(" ")}>
              Главная
            </a>
          )}
          <div className={styles.nav}>
            <a href="/#about-us" className={["H4", styles.link].join(" ")}>
              О нас
            </a>
            <a href="/#tariffs" className={["H4", styles.link].join(" ")}>
              Тарифы
            </a>
            <a href="/#contacts" className={["H4", styles.link].join(" ")}>
              Контакты
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default memo(NavBar);
