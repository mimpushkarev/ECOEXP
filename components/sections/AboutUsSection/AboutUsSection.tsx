import {memo} from "react";
import Image from "next/image";

import Spinach from "@assets/pictures/Spinach.png";
import Arrow from "@assets/pictures/Arrow.png";
import styles from "./AboutUsSection.module.scss";

const AboutUsSection = () => {
  return (
    <div className="section">
      <div className="container">
        <div className={styles.box}>
          <div>
            <h2 className={["LH1", styles.heading].join(" ")}>О нас</h2>
          </div>
          <div className="XSH3">
            <div className={styles.prBlock}>
              <div className={styles.parPadding}>
                <p className="XSH2">
                  Мы молодая, развивающаяся и амбициозная компания
                </p>
                <p>
                  Здравствуйте! Меня зовут Константин Бурдуков, я являюсь
                  представителем компании ООО “Экоэкспертиза”. Наша компания
                  всегда готова оказать услуги производству в различных вопросах
                  экологической отчетности для предприятий и заводов. По всем
                  интересующим Вас вопросам готов провести консультацию, для
                  этого перейдите в раздел “Контакты”.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <p className={["LH1", styles.heading].join(" ")}>
              Какие проблемы мы решаем?
            </p>
          </div>
          <div className="XSH3">
            <div className={styles.prBlock}>
              <div>
                <p className="XSH2">Недостаточная отчистка</p>
                <p>
                  Если ваше предприятие переживает за достаточную отчистку
                  продуктов производства и выбросы в окружающую среду.
                </p>
              </div>
              <div>
                <Image
                  src={Arrow}
                  alt="Here is a solution"
                  width={45}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src={Spinach}
                  alt="Little plant"
                  width={30}
                  height={30}
                />
                <p>
                  Мы сможем это решить, проведем замеры и расчеты, подскажем как
                  это реализовать
                </p>
              </div>
            </div>
            <div className={styles.prBlock}>
              <div>
                <p className="XSH2">Какая-то еще проблема </p>
                <p>
                  Если ваше предприятие переживает за достаточную отчистку
                  продуктов производства и выбросы в окружающую среду.
                </p>
              </div>
              <div>
                <Image
                  src={Arrow}
                  alt="Here is a solution"
                  width={45}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src={Spinach}
                  alt="Little plant"
                  width={30}
                  height={30}
                />
                <p>
                  Мы сможем это решить, проведем замеры и расчеты, подскажем как
                  это реализовать{" "}
                </p>
              </div>
            </div>
            <div className={styles.prBlock}>
              <div>
                <p className="XSH2">Какая-то еще проблема </p>
                <p>
                  Если ваше предприятие переживает за достаточную отчистку
                  продуктов производства и выбросы в окружающую среду.
                </p>
              </div>
              <div>
                <Image
                  src={Arrow}
                  alt="Here is a solution"
                  width={45}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src={Spinach}
                  alt="Little plant"
                  width={30}
                  height={30}
                />
                <p>
                  Мы сможем это решить, проведем замеры и расчеты, подскажем как
                  это реализовать{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutUsSection);
