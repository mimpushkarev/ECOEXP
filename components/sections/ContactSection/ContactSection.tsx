import {memo} from "react";

import styles from "./ContactSection.module.scss";

const ContactSection = () => {
  return (
    <div className={styles.frame}>
      <div className="section">
        <div className="container">
          <h2 className="H2">Вы всегда можете со мной связаться.</h2>
          <div className={styles.paragraph}>
            <p className="XLText">
              Сделайте это в удобном для вас варианте из предложенных.
            </p>
          </div>
          <div className={styles.contactgroup}>
            <div className={styles.fristContact}>
              <div className={styles.firstNumber}>
                <p className="XLH1">
                  <h1>01</h1>
                  <h1>Telegram</h1>
                </p>
              </div>
            </div>
            <div className={styles.secondContact}>
              <div className={styles.lastNumbers}>
                <p className="XLH1">
                  <h1>02</h1>
                  <h1>Vk</h1>
                </p>
              </div>
            </div>
            <div className={styles.thirdContact}>
              <div className={styles.lastNumbers}>
                <p className="XLH1">
                  <h1>03</h1>
                  <h1>Mail</h1>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ContactSection);
