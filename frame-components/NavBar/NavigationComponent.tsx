import { memo } from "react";
import Link from "next/link";

import styles from "./NavigationComponent.module.scss";

const NavigationComponent = () => {
    return (
        <div className={styles.navbar}>
            <Link className={styles.link} href="/">
                Главная
            </Link>
            <Link className={styles.link} href="/about">
                О нас
            </Link>
            <Link className={styles.link} href="/contacts">
                Контакты
            </Link>
            <Link className={styles.link} href="/tariffs">
                Тарифы
            </Link>
        </div>
    );
}

export default memo(NavigationComponent);
