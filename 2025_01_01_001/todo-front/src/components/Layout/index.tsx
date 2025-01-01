import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles["l-body"]}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
