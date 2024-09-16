import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  // esto vuela, solo queda la referencia a las rutas...
  // ahora esta asi para abrir rapidamente las pages desde localhost:3000
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1>Main Page</h1>
        <ul>
          <li>
            <Link href="/pages/login">Login</Link>
          </li>
          <li>
            <Link href="/pages/home">Home</Link>
          </li>
          <li>
            <Link href="/pages/register">Register</Link>
          </li>
          <li>
            <Link href="/pages/aboutus">About us</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
