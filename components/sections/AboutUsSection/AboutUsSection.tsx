import {memo} from "react";
import Image from "next/image";

import Spinach from "@assets/pictures/Spinach.png";
import Arrow from "@assets/pictures/Arrow.png";

import styles from "./AboutUsSection.module.scss";

const ABOUT_TEXTS = {
  about: {
    title: "Мы молодая, развивающаяся и амбициозная компания",
    description: `Компания EcoPragmat недавно появилась на рынке, но специалисты
    имеют опыт более пяти лет в экологии. Мы поможем исполнить
    экологическое законодательство и избежать штрафов при
    проверках.`,
  },
  problems: [
    {
      title: "Экологическое проектирование",
      list: [
        "Инвентаризация источников воздействия",
        "Определение нормативов воздействия на окружающую среду",
      ],
      description: `Выезжаем на площадку предприятия, определяем источники
      воздействия на окружающую среду, разрабатываем документацию,
      сопровождаем согласование в госорганы`,
      solution: `Клиент получает экологическую документацию, соответствующую
      текущим требованиям законодательства`,
    },
    {
      title: "Экологическая отчетность",
      description: `Заполняем ежегодную статистическую отчетность по данным
      клиента и сдаем ее в госорганы`,
      solution: `Клиент сдает отчетность с первого раза, избегает штрафов за
      отсутствие или просрочку отчетов`,
    },
    {
      title: "Комплексное сопровождение",
      description: `Выполняем работу эколога: берем ответственность за соблюдение
      экологического законодательства на себя, определяем план
      работ, разрабатываем документацию, отчитываемся в госорганы,
      помогаем пройти экологические проверки`,
      solution: `Клиент исполняет требования законодательства по экологии без
      штатного эколога`,
    },
  ],
};

const AboutUsSection = () => {
  return (
    <section className="section" id="about-us">
      <div className="container">
        <div className={styles.box}>
          <div>
            <h2 className={["LH1", styles.heading].join(" ")}>О нас</h2>
          </div>
          <div className="XSH3">
            <div className={styles.prBlock}>
              <div className={styles.parPadding}>
                <p className="XSH2">{ABOUT_TEXTS.about.title}</p>
                <p>{ABOUT_TEXTS.about.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <p className={["LH1", styles.heading].join(" ")}>
              Какие задачи мы решаем?
            </p>
          </div>
          <div className="XSH3">
            {ABOUT_TEXTS.problems.map((problem, index) => (
              <div className={styles.prBlock} key={index}>
                <div>
                  <p className="XSH2">{problem.title}</p>
                  {problem.list?.length && (
                    <ul>
                      {problem.list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <p>{problem.description}</p>
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
                  <p>{problem.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutUsSection);
