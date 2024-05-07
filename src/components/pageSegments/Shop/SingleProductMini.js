import React from "react";

const SingleProductMini = ({ product }) => {
  return (
    <>
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
                <img src="images/icon/like-icon.png" alt="like icon" />
              </a>
              <a href="#">
                <img src="images/icon/addtocart.png" alt="Add To Cart" />
              </a>
            </div>
          </div>
          <div className="product-content">
            <h2>{product.name}</h2>
            <h3>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
              <span>
                {product.currency}
                {product.price}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductMini;
