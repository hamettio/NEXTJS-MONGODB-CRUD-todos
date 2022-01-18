import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Basic Todo App</title>
      </Head>
      <div className={styles.navbar}>
        <div className={styles.nav}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/new">
            <a>Add Todo</a>
          </Link>
        </div>
      </div>
      <div className={styles.grid}>{children}</div>
    </>
  );
};

export default Layout;
