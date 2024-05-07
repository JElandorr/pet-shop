import React from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    // console.log(e, "clicked");
    navigate("/product-details");
  };

  return (
    <>
      <div
        id="product-list"
        className="product-list container-fluid no-padding"
      >
        <div className="section-padding" />
        {/* Container */}
        <div className="container">
          <div className="row">
            {/* Product Filter */}
            <div className="col-md-3 col-sm-4">
              {/* Widget Select Product */}
              <aside className="widget widget-select-product">
                <h3>Select Product</h3>
                <ul>
                  <li>
                    <input type="checkbox" /> Neck Strap <span>158</span>
                  </li>
                  <li>
                    <input type="checkbox" /> Pet Food <span>430</span>
                  </li>
                  <li>
                    <input type="checkbox" /> Pet Toys <span>279</span>
                  </li>
                  <li>
                    <input type="checkbox" /> Pet Outfits <span>365</span>
                  </li>
                  <li>
                    <input type="checkbox" /> Pet Cage <span>189</span>
                  </li>
                  <li>
                    <input type="checkbox" /> Soap &amp; Brushes{" "}
                    <span>763</span>
                  </li>
                </ul>
              </aside>
              {/* Widget Select Product /- */}
              {/* Widget Filter Price */}
              <aside className="widget widget-price-filter">
                <h3>Filter By Price</h3>
                <div className="price-filter">
                  <div id="slider-range" />
                  <div className="price-input">
                    <label>Price:</label>
                    <span id="amount" />
                    <label> - </label>
                    <span id="amount2" />
                  </div>
                  <a href="#" className="filter">
                    Filter
                  </a>
                </div>
              </aside>
              {/* Widget Filter Price /- */}
              {/* Widget Brands */}
              <aside className="widget widget-brands">
                <h3>Brands</h3>
                <ul>
                  <li>
                    <input type="checkbox" /> Pet Store <span>72</span>
                  </li>
                  <li>
                    <input type="checkbox" /> Shoppy Pets <span>24</span>
                  </li>
                  <li>
                    <input type="checkbox" /> E-Pet <span>10</span>
                  </li>
                  <li>
                    <input type="checkbox" /> Healthy Pet food <span>56</span>
                  </li>
                  <li>
                    <input type="checkbox" /> Nutro Pet <span>12</span>
                  </li>
                  <li>
                    <input type="checkbox" /> Pet Daisy <span>88</span>
                  </li>
                </ul>
              </aside>
              {/* Widget Brands /- */}
              {/* Widget Best Sellers */}
              <aside className="widget widget-best-seller">
                <h3>Widget Best Sellers</h3>
                {/* Seller Box */}
                <div className="seller-box">
                  <div className="product-img">
                    <a href="#" title="Product">
                      <img src="images/shop/seller-1.jpg" alt="Seller" />
                    </a>
                  </div>
                  <h4>
                    Pet Food <span>$ 32.00</span>
                  </h4>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star fill-color" />
                  </div>
                </div>
                {/* Seller Box /- */}
                {/* Seller Box */}
                <div className="seller-box">
                  <div className="product-img">
                    <a href="#" title="Product">
                      <img src="images/shop/seller-2.jpg" alt="Seller" />
                    </a>
                  </div>
                  <h4>
                    Pet bed <span>$ 16.00</span>
                  </h4>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                {/* Seller Box /- */}
                {/* Seller Box */}
                <div className="seller-box">
                  <div className="product-img">
                    <a href="#" title="Product">
                      <img src="images/shop/seller-3.jpg" alt="Seller" />
                    </a>
                  </div>
                  <h4>
                    Pet Outfit <span>$ 24.00</span>
                  </h4>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star fill-color" />
                  </div>
                </div>
                {/* Seller Box /- */}
              </aside>
              {/* Widget Best Sellers /- */}
            </div>
            {/* Product Filter /- */}
            {/* Product Box */}
            <div className="col-md-9 col-sm-8">
              {/* Section Header */}
              <div className="section-header">
                <h3>Our Best Quality Products</h3>
                <p>
                  In a freak mishap ranger and its pilot captain william buck
                  rogers are blown
                </p>
              </div>
              {/* Section Header /- */}
              {/* Products */}
              <div className="products">
                {/* Product Box */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="product-box" onClick={(e) => handleClick(e)}>
                    <div className="product-image">
                      <img src="images/shop/pets-1.jpg" alt="shop" />
                      <a className="cart" href="#">
                        <i>
                          <img src="images/icon/wishlist.png" alt="wishlist" />
                        </i>
                        Details
                      </a>
                      <div className="wishlist">
                        <a href="#">
                          <img
                            src="images/icon/like-icon.png"
                            alt="like icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="images/icon/addtocart.png"
                            alt="Add To Cart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h2>Pet Harness</h2>
                      <h3>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                        <span>$120.00</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Product Box /- */}
                {/* Product Box */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="product-box" onClick={(e) => handleClick(e)}>
                    <div className="product-image">
                      <img src="images/shop/pets-2.jpg" alt="shop" />
                      <a className="cart" href="#">
                        <i>
                          <img src="images/icon/wishlist.png" alt="wishlist" />
                        </i>
                        Details
                      </a>
                      <div className="wishlist">
                        <a href="#">
                          <img
                            src="images/icon/like-icon.png"
                            alt="like icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="images/icon/addtocart.png"
                            alt="Add To Cart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h2>Pet Toys</h2>
                      <h3>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                        <span>$150.00</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Product Box /- */}
                {/* Product Box */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="product-box" onClick={(e) => handleClick(e)}>
                    <div className="product-image">
                      <img src="images/shop/pets-3.jpg" alt="shop" />
                      <a className="cart" href="#">
                        <i>
                          <img src="images/icon/wishlist.png" alt="wishlist" />
                        </i>
                        VIEW DETAILS
                      </a>
                      <div className="wishlist">
                        <a href="#">
                          <img
                            src="images/icon/like-icon.png"
                            alt="like icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="images/icon/addtocart.png"
                            alt="Add To Cart"
                          />
                        </a>
                      </div>
                      <span className="new">new</span>
                    </div>
                    <div className="product-content">
                      <h2>Pet Out Fits</h2>
                      <h3>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                        <span>$280.00</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Product Box /- */}
                {/* Product Box */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="product-box" onClick={(e) => handleClick(e)}>
                    <div className="product-image">
                      <img src="images/shop/pets-4.jpg" alt="shop" />
                      <a className="cart" href="#">
                        <i>
                          <img src="images/icon/wishlist.png" alt="wishlist" />
                        </i>
                        Details
                      </a>
                      <div className="wishlist">
                        <a href="#">
                          <img
                            src="images/icon/like-icon.png"
                            alt="like icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="images/icon/addtocart.png"
                            alt="Add To Cart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h2>Pet Food</h2>
                      <h3>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                        <span>$360.00</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Product Box /- */}
                {/* Product Box */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="product-box" onClick={(e) => handleClick(e)}>
                    <div className="product-image">
                      <img src="images/shop/pets-5.jpg" alt="shop" />
                      <a className="cart" href="#">
                        <i>
                          <img src="images/icon/wishlist.png" alt="wishlist" />
                        </i>
                        Details
                      </a>
                      <div className="wishlist">
                        <a href="#">
                          <img
                            src="images/icon/like-icon.png"
                            alt="like icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="images/icon/addtocart.png"
                            alt="Add To Cart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h2>Pet Comb</h2>
                      <h3>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                        <span>$72.00</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Product Box /- */}
                {/* Product Box */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="product-box" onClick={(e) => handleClick(e)}>
                    <div className="product-image">
                      <img src="images/shop/pets-6.jpg" alt="shop" />
                      <a className="cart" href="#">
                        <i>
                          <img src="images/icon/wishlist.png" alt="wishlist" />
                        </i>
                        Details
                      </a>
                      <div className="wishlist">
                        <a href="#">
                          <img
                            src="images/icon/like-icon.png"
                            alt="like icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="images/icon/addtocart.png"
                            alt="Add To Cart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h2>Neck Harness with Bell</h2>
                      <h3>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                        <span>$16.00</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Product Box /- */}
                {/* Product Box */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="product-box" onClick={(e) => handleClick(e)}>
                    <div className="product-image">
                      <img src="images/shop/pets-7.jpg" alt="shop" />
                      <span className="sold">Sold Out</span>
                      <div className="wishlist">
                        <a href="#">
                          <img
                            src="images/icon/like-icon.png"
                            alt="like icon"
                          />
                        </a>
                        <a href="#">
                          <img src="images/icon/wishlist.png" alt="wishlist" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h2>Elezabethan Collar</h2>
                      <h3>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                        <span>$60.00</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Product Box /- */}
                {/* Product Box */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="product-box" onClick={(e) => handleClick(e)}>
                    <div className="product-image">
                      <img src="images/shop/pets-8.jpg" alt="shop" />
                      <a className="cart" href="#">
                        <i>
                          <img src="images/icon/wishlist.png" alt="wishlist" />
                        </i>
                        Details
                      </a>
                      <div className="wishlist">
                        <a href="#">
                          <img
                            src="images/icon/like-icon.png"
                            alt="like icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="images/icon/addtocart.png"
                            alt="Add To Cart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h2>Pet Tablets</h2>
                      <h3>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                        <span>$224.00</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Product Box /- */}
                {/* Product Box */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="product-box" onClick={(e) => handleClick(e)}>
                    <div className="product-image">
                      <img src="images/shop/pets-9.jpg" alt="shop" />
                      <a className="cart" href="#">
                        <i>
                          <img src="images/icon/wishlist.png" alt="wishlist" />
                        </i>
                        Details
                      </a>
                      <div className="wishlist">
                        <a href="#">
                          <img
                            src="images/icon/like-icon.png"
                            alt="like icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="images/icon/addtocart.png"
                            alt="Add To Cart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h2>Pet Bed</h2>
                      <h3>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span>$540.00</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Product Box /- */}
                {/* Product Box */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="product-box" onClick={(e) => handleClick(e)}>
                    <div className="product-image">
                      <img src="images/shop/pets-10.jpg" alt="shop" />
                      <a className="cart" href="#">
                        <i>
                          <img src="images/icon/wishlist.png" alt="wishlist" />
                        </i>
                        Details
                      </a>
                      <div className="wishlist">
                        <a href="#">
                          <img
                            src="images/icon/like-icon.png"
                            alt="like icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="images/icon/addtocart.png"
                            alt="Add To Cart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h2>Pet Soap &amp; Brushes</h2>
                      <h3>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                        <span>$140.00</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Product Box /- */}
                {/* Product Box */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="product-box" onClick={(e) => handleClick(e)}>
                    <div className="product-image">
                      <img src="images/shop/pets-11.jpg" alt="shop" />
                      <a className="cart" href="#">
                        <i>
                          <img src="images/icon/wishlist.png" alt="wishlist" />
                        </i>
                        Details
                      </a>
                      <div className="wishlist">
                        <a href="#">
                          <img
                            src="images/icon/like-icon.png"
                            alt="like icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="images/icon/addtocart.png"
                            alt="Add To Cart"
                          />
                        </a>
                      </div>
                      <span className="new">new</span>
                    </div>
                    <div className="product-content">
                      <h2>Pet Woolen Materials</h2>
                      <h3>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                        <span>$150.00</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Product Box /- */}
                {/* Product Box */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="product-box" onClick={(e) => handleClick(e)}>
                    <div className="product-image">
                      <img src="images/shop/pets-12.jpg" alt="shop" />
                      <a className="cart" href="#">
                        <i>
                          <img src="images/icon/wishlist.png" alt="wishlist" />
                        </i>
                        Details
                      </a>
                      <div className="wishlist">
                        <a href="#">
                          <img
                            src="images/icon/like-icon.png"
                            alt="like icon"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="images/icon/addtocart.png"
                            alt="Add To Cart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <h2>Pet Out Fits</h2>
                      <h3>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span>$970.00</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Product Box /- */}
              </div>
              {/* Products /- */}
              <div className="section-padding" />
              {/* Pagination */}
              <ul className="pagination">
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&lt;</span>
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li className="active">
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">&gt;</span>
                  </a>
                </li>
              </ul>
              {/* Pagination /- */}
            </div>
          </div>
        </div>
        {/* Container /- */}
        <div className="section-padding" />
      </div>
      {/* Product List /- */}
    </>
  );
};

export default Shop;
