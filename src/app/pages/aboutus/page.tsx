import React from "react";
import styles from "./Aboutus.module.css";

// asd
const AboutUs = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.aboutUsList}>
        <li className={styles.title}>
          <strong>¿Qué es "HelpMe!"?</strong>
        </li>
        <li className={styles.text}>
          HelpMe! es un espacio para brindar ayuda de manera rápida y sencilla a
          quienes más lo necesitan.
        </li>

        <li className={styles.title}>
          <strong>Nuestra historia</strong>
        </li>
        <li className={styles.text}>
          Surgimos en un momento de gran necesidad como lo fue la pandemia por
          Covid-19. Pero no planeamos dejar de ayudar.
        </li>

        <li className={styles.title}>
          <strong>Nuestra misión</strong>
        </li>
        <li className={styles.text}>
          Queremos que cada organización que necesite de ayuda económica pueda
          recibirla de todos aquellos que están dispuestos a ofrecerla.
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
