import React from "react";

import Header from "../pageSegments/Header";
import Breadcrumbs from "../pageSegments/Breadcrumbs";
import Blog from "../pageSegments/Blog";
import Newsletter from "../pageSegments/Newsletter";
import Footer from "../pageSegments/Footer";

const BlogPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Breadcrumbs title="Blog" />
        <Blog />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
