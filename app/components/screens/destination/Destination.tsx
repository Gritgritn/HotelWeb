import Image from "next/image";
import { FC } from "react";

import styles from "./Destination.module.scss";
import Arrow from "../../ui/arrow/Arrow";

const Destination: FC = () => {
  return (
    <section className={styles.destination__section}>
      <div>
        <div className={styles.destination}>The Destination</div>
        <div className={styles.destination__name}>Sevastopol</div>
      </div>
      <div className={styles.destination_img__container}>
        <Image
          src="/mondschein8.webp"
          alt="destination"
          fill
          className={styles.destination__img}
        />
      </div>
      <div className={styles.destination__description}>
        Embrace la dolce vita and immerse yourself in Italy’s historic piazzas and palazzi, breath-taking vineyards and coastline, and unparalleled mouth-watering cuisine. Revel in the romance of Italy by drifting down the storied canals of Venice, climbing the coastal trails of the Cinque Terre, or unwinding poolside in Capri.
      </div>
      <div className={styles.action__link}>
        <Arrow text="Explore" />
      </div>
    </section>
  );
};

export default Destination;
