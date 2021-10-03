import React, { FC } from "react";
import Nav from "./Header/Nav";
import Footer from "./Footer/Footer";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
