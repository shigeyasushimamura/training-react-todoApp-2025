import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles["main"]}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
