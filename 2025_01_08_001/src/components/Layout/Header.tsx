import styles from "./Layout.module.css";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <header className={styles["header__heading"]}>いるいるこんな人</header>

      <nav className={styles["header__nav"]}>
        <div className={styles["header__item"]}>サイト紹介</div>
        <div className={styles["header__item"]}>お知らせ</div>
      </nav>
    </div>
  );
};

export default Header;
