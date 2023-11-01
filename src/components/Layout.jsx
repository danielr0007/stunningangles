import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

function Layout(props) {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/favicon.png" />
      </Helmet>

      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
