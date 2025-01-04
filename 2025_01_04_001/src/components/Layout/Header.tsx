import styles from "./Layout.module.css";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <header className={styles["header__title"]}>
        <a href="/">Title</a>
      </header>

      <nav className={styles["header__nav"]}>
        <div className={styles["header__item"]}>News</div>
        <div className={styles["header__item"]}>Contact</div>
      </nav>
    </div>
  );
};

export default Header;
