import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
