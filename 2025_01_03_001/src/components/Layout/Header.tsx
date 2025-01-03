import styles from "./Layout.module.css";

const Header = () => {
  return (
    <div className={styles["l-header"]}>
      <header>
        <h1>
          <a href="/">タイトル</a>
        </h1>
      </header>
      <nav>
        <ul className={styles["nav-container"]}>
          <li className={styles["nav-item"]}>お知らせ</li>
          <li className={styles["nav-item"]}>採用情報</li>
          <li className={styles["nav-item"]}>金融機関の皆様へ</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
