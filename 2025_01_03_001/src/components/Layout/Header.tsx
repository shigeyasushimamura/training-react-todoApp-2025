import styles from "./Layout.module.css";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <header>
        <h1 className={styles["header__header"]}>
          <a href="/">タイトル</a>
        </h1>
      </header>
      <nav className={styles["header__nav"]}>
        <ul className={styles["header__list"]}>
          <li className={styles["header__item"]}>お知らせ</li>
          <li className={styles["header__item"]}>採用情報</li>
          <li className={styles["header__item"]}>金融機関の皆様へ</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
