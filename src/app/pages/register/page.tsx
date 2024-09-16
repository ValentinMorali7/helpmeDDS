"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Register.module.css";

const RegistrationForm = () => {
  const [activeButton, setActiveButton] = useState("USUARIO");

  const handleClick = (button: any) => {
    setActiveButton(button);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <p className={styles.title}>Registro</p>
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.toggleButton} ${
              activeButton === "USUARIO" ? styles.active : styles.inactive
            }`}
            onClick={() => handleClick("USUARIO")}
          >
            USUARIO
          </button>
          <button
            className={`${styles.toggleButton} ${
              activeButton === "ORGANIZACION" ? styles.active : styles.inactive
            }`}
            onClick={() => handleClick("ORGANIZACION")}
          >
            ORGANIZACION
          </button>
        </div>
        <div className={styles.form}>
          {activeButton === "USUARIO" ? (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Nombre</label>
                <input className={styles.input} type="text" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Dirección</label>
                <input className={styles.input} type="text" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>CUIL</label>
                <input className={styles.input} type="text" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Teléfono</label>
                <input className={styles.input} type="text" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Número de Legajo</label>
                <input className={styles.input} type="text" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Contraseña</label>
                <input className={styles.input} type="password" />
              </div>
            </>
          ) : (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Nombre</label>
                <input className={styles.input} type="text" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Apellido</label>
                <input className={styles.input} type="text" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Fecha de nacimiento</label>
                <input className={styles.input} type="date" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Contraseña</label>
                <input className={styles.input} type="password" />
              </div>
            </>
          )}
        </div>
        <button className={styles.submitButton}>Registrarse</button>
      </div>
    </div>
  );
};

export default RegistrationForm;
