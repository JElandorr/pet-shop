import React from "react";

const Shop = () => {
  return (
    <div className="shop container-fluid no-padding">
      <div className="section-padding" />
      {/* Container */}
      <div className="container">
        <div className="row">
          <div className="section-header">
            <h3>Updates From Our Shop</h3>
            <p>
              In a freak mishap ranger and its pilot captain william buck rogers
              are blown
            </p>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="product-box">
              <div className="product-image">
                <img src="images/shop/shop-1.jpg" alt="shop" />
                <a className="cart" href="#">
                  <i>
                    <img src="images/icon/addtocart.png" alt="Add To Cart" />
                  </i>
                  Add To Cart
                </a>
                <div className="wishlist">
                  <a href="#">
                    <img src="images/icon/like-icon.png" alt="like icon" />
                  </a>
                  <a href="#">
                    <img src="images/icon/wishlist.png" alt="wishlist" />
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
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="product-box">
              <div className="product-image">
                <img src="images/shop/shop-2.jpg" alt="shop" />
                <a className="cart" href="#">
                  <i>
                    <img src="images/icon/addtocart.png" alt="Add To Cart" />
                  </i>
                  Add To Cart
                </a>
                <div className="wishlist">
                  <a href="#">
                    <img src="images/icon/like-icon.png" alt="like icon" />
                  </a>
                  <a href="#">
                    <img src="images/icon/wishlist.png" alt="wishlist" />
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
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="product-box">
              <div className="product-image">
                <img src="images/shop/shop-3.jpg" alt="Shop" />
                <a className="cart" href="#">
                  <i>
                    <img src="images/icon/addtocart.png" alt="Add To Cart" />
                  </i>
                  Add To Cart
                </a>
                <div className="wishlist">
                  <a href="#">
                    <img src="images/icon/like-icon.png" alt="like icon" />
                  </a>
                  <a href="#">
                    <img src="images/icon/wishlist.png" alt="wishlist" />
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
                  <i className="fa fa-star-half-o" />
                  <span>$280.00</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="product-box">
              <div className="product-image">
                <img src="images/shop/shop-4.jpg" alt="Shop" />
                <a className="cart" href="#">
                  <i>
                    <img src="images/icon/addtocart.png" alt="Add To Cart" />
                  </i>
                  Add To Cart
                </a>
                <div className="wishlist">
                  <a href="#">
                    <img src="images/icon/like-icon.png" alt="like icon" />
                  </a>
                  <a href="#">
                    <img src="images/icon/wishlist.png" alt="wishlist" />
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
        </div>
      </div>
      {/* Container / */}
      <div className="section-padding" />
    </div>
  );
};

export default Shop;
