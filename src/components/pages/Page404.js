import React from "react";

import Header from "../pageSegments/Header";
import Error from "../pageSegments/Error";
import Newsletter from "../pageSegments/Newsletter";
import Footer from "../pageSegments/Footer";

const Page404 = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Error />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Page404;
