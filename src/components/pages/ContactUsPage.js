import React from "react";

import Header from "../pageSegments/Header";
import Breadcrumbs from "../pageSegments/Breadcrumbs";
import ContactUs from "../pageSegments/ContactUs";
import Newsletter from "../pageSegments/Newsletter";
import Footer from "../pageSegments/Footer";

const ContactUsPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Breadcrumbs title="Contact Us" />
        <ContactUs />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default ContactUsPage;
