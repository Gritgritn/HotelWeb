import { FC } from "react";
import Map, { Marker, NavigationControl } from 'react-map-gl';

import styles from "./Map.module.scss";
import Image from "next/image";

const SevastopolMap: FC = () => {
  return (
    <section className={styles.map__container}>
      <Map
        initialViewState={{
          longitude: 33.51923216247664,
          latitude: 44.636292955019854,
          zoom: 10
        }}
        mapboxAccessToken="pk.eyJ1IjoiZ3JpdDAwMSIsImEiOiJjbGg5czBuMWkwYWNzM21sZ2x0N3Z5dTdnIn0.LtULtTPtHSWN04_Nv333dw"
        style={{ height: 400}}
        mapStyle="mapbox://styles/mapbox/outdoors-v10"
        scrollZoom
      >
        <NavigationControl />
        <Marker longitude={33.51923216247664} latitude={44.636292955019854} anchor="bottom" >
          {/* <img src="./pin.png" /> */}
          <Image
            src="/marker.webp"
            alt=""
            width={50}
            height={50}
            className={styles.marker__img}
          />
        </Marker>
      </Map>
    </section>
  );
};

export default SevastopolMap;
