import styles from "./Layout.module.css";
const Footer = () => {
  return (
    <>
      <footer id={styles["l-footer"]}>
        <div className={styles["l-footer"]}>
          <div className={styles["container"]}>
            <div className={styles["row"]}>
              <div className={styles["col-lg-5"]}>下原自動車</div>
              <div className={styles["col-lg-7"]}>
                <div className={styles["row"]}>
                  <div className={styles["col-lg-7"]}>
                    <ul className={styles["nav"]}>
                      <li className={styles["item"]}>私たちについて</li>
                      <li className={styles["item"]}>事業案内</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
