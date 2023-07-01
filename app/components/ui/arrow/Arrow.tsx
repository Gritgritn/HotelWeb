import Image from "next/image";
import { FC } from "react";

import roomsPic from '../../../../asset/double-balcony-na-8074-edit-930x673-crop-50-50-630x673.jpeg'
import styles from "./Arrow.module.scss";

interface ArrowProps {
  text: string
}

const Arrow: FC<ArrowProps> = (props) => {
  return (
    <div className={styles.book__container}>
    <div>{props.text}</div>
    <div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
className={styles.book_arrow__svg}
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M1629 3663 c-206 -105 -166 -411 61 -462 28 -7 256 -11 595 -11 l550
  0 -682 -682 c-525 -526 -687 -693 -702 -728 -42 -93 -21 -208 50 -279 71 -71
  186 -92 279 -50 35 15 203 178 728 702 l682 682 0 -556 c0 -639 -1 -631 79
  -711 116 -116 299 -94 386 47 l30 48 3 916 c3 1020 6 963 -66 1036 -79 80 -5
  75 -1028 75 l-910 0 -55 -27z"
  fill="#000000"
          />
        </g>
      </svg>
    </div>
  </div>
  );
};

export default Arrow;
