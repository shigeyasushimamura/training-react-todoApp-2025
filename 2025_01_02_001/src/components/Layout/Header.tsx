import styles from "./Layout.module.css";

const Header = () => {
  return (
    <>
      <header className={styles["l-header"]}>
        <a href="/">
          <h1>下原自動車</h1>
        </a>
      </header>
      <div className={styles["l-hamburger"]}>
        <button>menu</button>
      </div>

      <div className={styles["l-gnav"]}>
        <nav>
          <ul className={styles["nav"]}>
            <li className={styles["item"]}>
              <a href="/">私たちについて</a>
            </li>
            <li className={styles["item"]}>
              <a href="/">事業案内</a>
            </li>
            <li className={styles["item"]}>
              <a href="/">会社案内</a>
            </li>
            <li className={styles["item"]}>
              <a href="/">採用情報</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;
