import {memo} from "react";

import styles from "./MainSection.module.scss";

const MAIN_TEXTS = {
  title: "EcoPragmat",
  description: {
    title: "Экологическое проектирование и консалтинг",
    subtitle: `Для объектов любой сложности`,
  },
};

const MainSection = () => {
  return (
    <section>
      <div className={styles.image}>
        <div>
          <div className={styles.title}>
            <h1 className="H1">{MAIN_TEXTS.title}</h1>
          </div>
          <div>
            <p className="H4">{MAIN_TEXTS.description.title}</p>
            <div className={styles.paragraph}>
              <p className="XLText">{MAIN_TEXTS.description.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(MainSection);
