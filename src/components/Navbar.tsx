"use client";
import Link from "next/link";
import { FaHome, FaUser } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/home" className={styles.navLink}>
            <FaHome className={styles.icon} />
            <span>Home</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/profile" className={styles.navLink}>
            <FaUser className={styles.icon} />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
