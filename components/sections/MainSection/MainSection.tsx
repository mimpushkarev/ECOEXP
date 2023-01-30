import {memo} from "react";

import styles from "./MainSection.module.scss";

const MainPageComponent = () => {
  return (
    <div>
      <div className={styles.image}>
        <div>
          <div className={styles.title}>
            <h1 className="H1">Экоэкспертиза</h1>
            <div className={styles.paragraph}>
              <p className="XLText">By Konstantin Byrdukov</p>
            </div>
          </div>
          <div>
            <p className="H4">Экологическая экспертиза</p>
            <div className={styles.paragraph}>
              <p className="XLText">
                Проведение на предприятиях и <br />
                заводах любой площади
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MainPageComponent);
