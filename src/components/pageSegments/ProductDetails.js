import React from "react";

const ProductDetails = () => {
  return (
    <>
      <>
        {/* Product List */}
        <div className="product-list container-fluid no-padding">
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
              {/* Product Details */}
              {/* col-md-9 */}
              <div className="col-md-9 col-sm-8 single-product-detail">
                <div className="row">
                  <div className="col-md-5 col-sm-5 single-product">
                    <img
                      src="images/shop/single-product.jpg"
                      alt="single-product"
                    />
                  </div>
                  <div className="col-md-7 col-sm-7 summary">
                    <div className="entry-summary">
                      <h2 className="product_title">Neck Harness with Bell</h2>
                      <p className="price">
                        <span className="amount">$75</span>
                        <del>$85</del>
                      </p>
                      <div className="review-link">
                        <a href="#" title="Reviews">
                          5 Review(s)
                        </a>
                        <a href="#" title="Add Review">
                          Add Your Review
                        </a>
                      </div>
                      <span className="product-ratting">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </span>
                      <div className="description">
                        <p>
                          The ship set ground on the shore of this uncharted
                          desert isle with Gilligan the Skipper too the
                          millionaire and his wife. And when the odds are
                          against him and their dangers work to do.{" "}
                        </p>
                      </div>
                      <div className="color-option">
                        <h5>Color :</h5>
                        <div className="color-box">
                          <span />
                        </div>
                        <div className="color-box color2">
                          <span />
                        </div>
                        <div className="color-box color3">
                          <span />
                        </div>
                        <div className="color-box color4">
                          <span />
                        </div>
                        <div className="color-box color5">
                          <span />
                        </div>
                        <div className="color-box color6">
                          <span />
                        </div>
                      </div>
                      <div className="add-icons">
                        <a href="#" title="Wishlist">
                          <img src="images/icon/addto-1.png" alt="addto-icon" />
                        </a>
                        <a href="#" title="Share">
                          <img src="images/icon/addto-2.png" alt="addto-icon" />
                        </a>
                        <a href="#" title="Email">
                          <img src="images/icon/addto-3.png" alt="addto-icon" />
                        </a>
                      </div>
                      <div className="qty-add">
                        <div className="quantity">
                          <label>Qty :</label>
                          <input type="number" />
                        </div>
                        <div className="size">
                          <label>Size :</label>
                          <select>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                          </select>
                        </div>
                        <div className="add-to-cart">
                          <a title="Add To Cart" href="#" className="btn">
                            <img
                              src="images/icon/addto-cart.png"
                              alt="Add to cart"
                            />
                            Add To Cart
                          </a>
                        </div>
                      </div>
                      <div className="product-stock">
                        <span>Availability : </span>
                        <a title="In Stock" href="#">
                          In Stock 20 Item(s)
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="woocommerce-tabs col-md-12 col-sm-12 col-xs-12">
                    <div role="tabpanel">
                      {/* Nav tabs */}
                      <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active">
                          <a
                            title="Product Details"
                            href="#product-details"
                            role="tab"
                            data-toggle="tab"
                          >
                            Product deTails
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            title="Review"
                            href="#review"
                            role="tab"
                            data-toggle="tab"
                          >
                            reviews
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            title="Product Tags"
                            href="#product-tags"
                            role="tab"
                            data-toggle="tab"
                          >
                            product tags
                          </a>
                        </li>
                      </ul>
                      {/* Tab panes */}
                      <div className="tab-content">
                        <div
                          role="tabpanel"
                          className="tab-pane active"
                          id="product-details"
                        >
                          <p>
                            Then along come two they got nothin' but their
                            jeans. Flying away on a wing and a prayer. Who could
                            it be? Believe it or not its just me. Today still
                            wanted by the government they survive as soldiers of
                            fortune. Boy the way Glen Miller played. Songs that
                            made the hit parade. Guys like us we had it made.
                            Those were the days.
                          </p>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="review">
                          <p>
                            Then along come two they got nothin' but their
                            jeans. Flying away on a wing and a prayer. Who could
                            it be? Believe it or not its just me. Today still
                            wanted by the government they survive as soldiers of
                            fortune. Boy the way Glen Miller played. Songs that
                            made the hit parade. Guys like us we had it made.
                            Those were the days.
                          </p>
                        </div>
                        <div
                          role="tabpanel"
                          className="tab-pane"
                          id="product-tags"
                        >
                          <p>
                            Then along come two they got nothin' but their
                            jeans. Flying away on a wing and a prayer. Who could
                            it be? Believe it or not its just me. Today still
                            wanted by the government they survive as soldiers of
                            fortune. Boy the way Glen Miller played. Songs that
                            made the hit parade. Guys like us we had it made.
                            Those were the days.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Product List */}
                  <div
                    id="product-list"
                    className="product-list col-md-12 col-sm-12 col-xs-12"
                  >
                    <div className="section-header">
                      <h3>Similar Products</h3>
                      <p>
                        In a freak mishap ranger and its pilot captain william
                        buck rogers are blown
                      </p>
                    </div>
                    {/* Products */}
                    <div className="products row">
                      {/* Product Box */}
                      <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="product-box">
                          <div className="product-image">
                            <img src="images/shop/shop-1.jpg" alt="shop" />
                            <a className="cart" href="#">
                              <i>
                                <img
                                  src="images/icon/addtocart.png"
                                  alt="Add To Cart"
                                />
                              </i>
                              Add To Cart
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
                                  src="images/icon/wishlist.png"
                                  alt="wishlist"
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
                        <div className="product-box">
                          <div className="product-image">
                            <img src="images/shop/shop-2.jpg" alt="shop" />
                            <a className="cart" href="#">
                              <i>
                                <img
                                  src="images/icon/addtocart.png"
                                  alt="Add To Cart"
                                />
                              </i>
                              Add To Cart
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
                                  src="images/icon/wishlist.png"
                                  alt="wishlist"
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
                        <div className="product-box">
                          <div className="product-image">
                            <img src="images/shop/shop-3.jpg" alt="shop" />
                            <a className="cart" href="#">
                              <i>
                                <img
                                  src="images/icon/addtocart.png"
                                  alt="Add To Cart"
                                />
                              </i>
                              Add To Cart
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
                                  src="images/icon/wishlist.png"
                                  alt="wishlist"
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
                    </div>
                  </div>
                </div>
              </div>
              {/* Product Details /- */}
            </div>
          </div>
          {/* Container /- */}
          <div className="section-padding" />
        </div>
        {/* Product List /- */}
      </>
    </>
  );
};

export default ProductDetails;
