import Image from "next/image";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.content}>
      <div className={styles.imageContainer}>
        <Image
          className={`${styles.animated} ${styles.bounce} ${styles.foto}`}
          src="/assets/icons/logo.png"
          alt="Logo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Home;
