import styles from "./Layout.module.css";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <header className={styles["header__heading"]}>
        <h1>タイトル</h1>
      </header>

      <nav className={styles["header__nav"]}>
        <div>おしらせ</div>
        <div>注意書き</div>
        <div>コンタクト</div>
      </nav>
    </div>
  );
};

export default Header;
