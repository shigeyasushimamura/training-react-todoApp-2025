import React, { FC } from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
