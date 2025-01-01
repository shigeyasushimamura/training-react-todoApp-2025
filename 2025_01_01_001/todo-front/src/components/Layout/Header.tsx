import styles from "./Layout.module.css";
const Header = () => {
  return (
    <header className={styles["l-header"]}>
      <nav className={styles["l-header-container"]}>
        <div className={styles["p-header"]}>
          <a>
            <span>ねこ図鑑</span>
          </a>
        </div>
        <div className={styles["p-header"]}>
          <a>
            <span>相性診断</span>
          </a>
        </div>
        <div className={styles["p-header"]}>
          <a>サポート</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
