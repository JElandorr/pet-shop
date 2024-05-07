import React from "react";

import Header from "../pageSegments/Header";
import Breadcrumbs from "../pageSegments/Breadcrumbs";
import Shop from "../pageSegments/Shop/Shop";
import Newsletter from "../pageSegments/Newsletter";
import Footer from "../pageSegments/Footer";

const ShopPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Breadcrumbs title="Shop" />
        <Shop />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default ShopPage;
