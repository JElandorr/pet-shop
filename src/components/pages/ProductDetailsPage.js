import React from "react";

import Header from "../pageSegments/Header";
import Breadcrumbs from "../pageSegments/Breadcrumbs";
import ProductDetails from "../pageSegments/ProductDetails";
import Newsletter from "../pageSegments/Newsletter";
import Footer from "../pageSegments/Footer";

const ProductDetailsPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Breadcrumbs title="Shop" titleURL="/shop" subTitle="Product Details" />
        <ProductDetails />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default ProductDetailsPage;
