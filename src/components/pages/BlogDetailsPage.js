import React from "react";

import Header from "../pageSegments/Header";
import Breadcrumbs from "../pageSegments/Breadcrumbs";
import BlogDetails from "../pageSegments/BlogDetails";
import Newsletter from "../pageSegments/Newsletter";
import Footer from "../pageSegments/Footer";

const BlogDetailsPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Breadcrumbs title="Blog" titleURL="/blog" subTitle="Blog Details" />
        <BlogDetails />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default BlogDetailsPage;
