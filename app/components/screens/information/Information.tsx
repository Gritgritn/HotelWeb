import Image from "next/image";
import { FC } from "react";

import styles from "./Information.module.scss";
import Arrow from "../../ui/arrow/Arrow";

const Information: FC = () => {
  return (
    <section className={styles.information__section}>
      <div className={styles.information__container}>
        {/* Блок заголовка */}
        <div className={styles.information_header}>
          <div className={styles.information_header__destination}>
            BOLZANO, ITALY
          </div>
          <div className={styles.information_header__name}>
            Parkhotel Mondschein
          </div>
        </div>

        {/* Блок с фото */}
        <div className={styles.information_picture__block}>
          <div className={styles.information_picture__block}>
            <div className={styles.information_picture__block}>
              <Image
                src="/mondschein8.webp"
                alt=""
                width={1044}
                height={1582}
                className={styles.information_img}
              />
            </div>
            <div className={styles.information_description__text}>
              Images courtesy of Parkhotel Mondschein, Ana Santl
            </div>
          </div>

          <div className={styles.information__text}>
            Once upon a time... That’s how many stories could begin at the
            Parkhotel Mondschein. The 800 years are palpable as nature blends
            with architecture; exquisite simplicity and almost forgotten
            treasures accompany the arrival.
          </div>

          <Arrow text="Book Now" />
        </div>
      </div>
    </section>
  );
};

export default Information;
