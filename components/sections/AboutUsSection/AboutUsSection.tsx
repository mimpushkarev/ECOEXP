import {memo} from "react";
import Image from "next/image";

import Spinach from "@assets/pictures/Spinach.png";
import Arrow from "@assets/pictures/Arrow.png";
import styles from "./AboutUsSection.module.scss";

const AboutUsSection = () => {
  return (
    <section className="section">
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
                  Компания EcoPragmat недавно появилась на рынке, но специалисты
                  имеют опыт более пяти лет в экологии. Мы поможем исполнить
                  экологическое законодательство и избежать штрафов при
                  проверках.
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
                <p className="XSH2">Экологическое проектирование</p>
                <ul>
                  <li>Инвентаризация источников воздействия</li>
                  <li>
                    Определение нормативов воздействия на окружающую среду
                  </li>
                </ul>
                <p>
                  Выезжаем на площадку предприятия, определяем источники
                  воздействия на окружающую среду, разрабатываем документацию,
                  сопровождаем согласование в госорганахы
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
                  Клиент получает экологическую документацию, соответствующую
                  текущим требованиям законодательства
                </p>
              </div>
            </div>
            <div className={styles.prBlock}>
              <div>
                <p className="XSH2">Экологическая отчетность</p>
                <p>
                  Заполняем ежегодную статистическую отчетность по данным
                  клиента и сдаем ее в госорганы
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
                  Клиент сдает отчетность с первого раза, избегает штрафов за
                  отсутствие или просрочку отчетов
                </p>
              </div>
            </div>
            <div className={styles.prBlock}>
              <div>
                <p className="XSH2">Комплексное сопровождение</p>
                <p>
                  Выполняем работу эколога: берем ответственность за соблюдение
                  экологического законодательства на себя, определяем план
                  работ, разрабатываем документацию, отчитываемся в госорганы,
                  помогаем пройти экологические проверки
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
                  Клиент исполняет требования законодательства по экологии без
                  штатного эколога
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutUsSection);
