import Image from "next/image";
import { FC } from "react";

import roomsPic from '../../../../asset/double-balcony-na-8074-edit-930x673-crop-50-50-630x673.jpeg'
import styles from "./Rooms.module.scss";

const Rooms: FC = () => {
  return (
    <section className={styles.rooms__section}>
      <div className={styles.rooms__text}>
        Rooms 
        <span>
          3
        </span>
      </div>

      <div className={styles.slider}>
        <div className={styles.slider__carousel}>
          <div className={styles.slide__container}>
            <a className={styles.slide__link}>
              <Image src={roomsPic} alt="slider__image" width={630} height={673} className={styles.slide__picture} />
            </a>
            <h4 className={styles.slider__title}>Bashnya</h4>
          </div>
          <div className={styles.slide__container}>
            <a className={styles.slide__link}>
              <Image src={roomsPic} alt="slider__image" width={630} height={673} className={styles.slide__picture} />
            </a>
            <h4 className={styles.slider__title}>Bashnya</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
