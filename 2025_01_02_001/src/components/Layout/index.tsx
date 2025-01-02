import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";
interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles["content"]}>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
