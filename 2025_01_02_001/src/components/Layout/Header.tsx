import styles from "./Layout.module.css";
const Header = () => {
  return (
    <>
      <header className={styles["l-header"]}>
        <h1>下原自動車</h1>
      </header>
      <div className={styles["l-hamburger"]}>
        <button>menu</button>
      </div>

      <div className={styles["l-gnav"]}>
        <nav>
          <ul className={styles["nav"]}>
            <li className={styles["item"]}>私たちについて</li>
            <li className={styles["item"]}>事業案内</li>
            <li className={styles["item"]}>会社案内</li>
            <li className={styles["item"]}>採用情報</li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;
