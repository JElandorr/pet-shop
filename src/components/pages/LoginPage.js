import React from "react";

import Header from "../pageSegments/Header";
import Breadcrumbs from "../pageSegments/Breadcrumbs";
import Login from "../pageSegments/Login";
import Newsletter from "../pageSegments/Newsletter";
import Footer from "../pageSegments/Footer";

const LoginPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Breadcrumbs title="Login" />
        <Login />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
