import React from "react";

import Header from "../pageSegments/Header";
import Breadcrumbs from "../pageSegments/Breadcrumbs";
import Register from "../pageSegments/Register";
import Newsletter from "../pageSegments/Newsletter";
import Footer from "../pageSegments/Footer";

const RegisterPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Breadcrumbs title="Register" />
        <Register />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default RegisterPage;
