import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ShopPage from "./components/pages/ShopPage";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";
import BlogPage from "./components/pages/BlogPage";
import BlogDetailsPage from "./components/pages/BlogDetailsPage";
import ServicesPage from "./components/pages/ServicesPage";
import Page404 from "./components/pages/Page404";
import ContactUsPage from "./components/pages/ContactUsPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-details" element={<BlogDetailsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
