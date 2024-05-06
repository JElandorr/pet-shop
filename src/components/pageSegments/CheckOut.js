import React from "react";

const CheckOut = () => {
  return (
    <>
      {/* Checkout Content */}
      <div className="container-fluid no-padding checkout-content">
        {/* Container */}
        <div className="container">
          <div className="row">
            {/* Order Summary */}
            <div className="col-md-12 order-summary">
              <div className="section-padding" />
              {/* Section Header */}
              <div className="section-header">
                <h3>Order Summary</h3>
              </div>
              {/* Section Header /- */}
              <div className="order-summary-content">
                <table className="summary_table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Product</th>
                      <th className="product-name">Product Name</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="cart_item">
                      <td data-title="Product" className="product-thumbnail">
                        <a title="Product Thumbnail" href="">
                          <img
                            className="attachment-shop_thumbnail wp-post-image"
                            src="images/product/product-1.jpg"
                            alt="thumb-1"
                          />
                        </a>
                      </td>
                      <td data-title="Product Name" className="product-name">
                        <a title="Product Name" href="#">
                          White Pet Dog
                          <span>
                            Breed :<span> Maltese</span>
                          </span>
                          <span>
                            Category :<span>Companion</span>
                          </span>
                        </a>
                      </td>
                      <td data-title="Quantity" className="product-quantity">
                        <div className="quantity">
                          <input type="number" />
                        </div>
                      </td>
                      <td data-title="Total" className="product-subtotal">
                        <span>£650.00</span>
                      </td>
                    </tr>
                    <tr className="cart_item">
                      <td data-title="Product" className="product-thumbnail">
                        <a title="Product Thumbnail" href="">
                          <img
                            className="attachment-shop_thumbnail wp-post-image"
                            src="images/product/product-2.jpg"
                            alt="thumb-1"
                          />
                        </a>
                      </td>
                      <td data-title="Product Name" className="product-name">
                        <a title="Product Name" href="#">
                          Hunter Pet Dog
                          <span>
                            Breed :<span> Pit Bull</span>
                          </span>
                          <span>
                            Category :<span>Hunter</span>
                          </span>
                        </a>
                      </td>
                      <td data-title="Quantity" className="product-quantity">
                        <div className="quantity">
                          <input type="number" />
                        </div>
                      </td>
                      <td data-title="Total" className="product-subtotal">
                        <span>£480.00</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="section-padding" />
            </div>
            {/* Order Summary /- */}
            {/* Billing Address */}
            <div className="col-md-12 billing-address no-padding">
              <div className="section-title col-md-12">
                <h3>Billing Address</h3>
              </div>
              <form className="billing-address-form">
                <div className="form-group col-md-3 col-sm-3 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="billing-first-name"
                    placeholder="First Name*"
                    required=""
                  />
                </div>
                <div className="form-group col-md-3 col-sm-3 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="billing-last-name"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group col-md-3 col-sm-3 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="billing-phone"
                    placeholder="Phone*"
                    required=""
                  />
                </div>
                <div className="form-group col-md-3 col-sm-3 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="billing-zip"
                    placeholder="Postcode/ZIP*"
                    required=""
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="billing-address-3"
                    placeholder="Address Line 1*"
                    required=""
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="billing-address-4"
                    placeholder="Address Line 2"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="billing-city"
                    placeholder="Town / City*"
                    required=""
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="billing-state"
                    placeholder="State / Country*"
                    required=""
                  />
                </div>
                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <input type="checkbox" />
                  <span>Ship Items To The Above Billing Address</span>
                </div>
              </form>
              {/* Booking Details Form/- */}
              <div className="section-padding" />
            </div>
            {/* Billing Address /- */}
            {/* Shipping Address */}
            <div className="col-md-12 billing-address shipping-address no-padding">
              <div className="section-title col-md-12">
                <h3>Shipping Address</h3>
              </div>
              <form className="billing-address-form shipping-address-form">
                <div className="form-group col-md-3 col-sm-3 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="shipping-first-name"
                    placeholder="First Name*"
                    required=""
                  />
                </div>
                <div className="form-group col-md-3 col-sm-3 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="shipping-last-name"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group col-md-3 col-sm-3 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="shipping-phone"
                    placeholder="Phone*"
                    required=""
                  />
                </div>
                <div className="form-group col-md-3 col-sm-3 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="shipping-zip"
                    placeholder="Postcode/ZIP*"
                    required=""
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="billing-address-1"
                    placeholder="Address Line 1*"
                    required=""
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="shipping-address-2"
                    placeholder="Address Line 2"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="shipping-city"
                    placeholder="Town / City*"
                    required=""
                  />
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    id="shipping-state"
                    placeholder="State / Country*"
                    required=""
                  />
                </div>
              </form>
              {/* Shipping Details Form/- */}
              <div className="section-padding" />
            </div>
            {/* Shipping Address /- */}
            {/* Payment Mode */}
            <div className="col-md-5 payment-mode">
              <div className="section-title">
                <h3>Select Payment Mode</h3>
              </div>
              <div className="payment-type">
                <div className="radio-box">
                  <input
                    type="radio"
                    name="optionsRadios"
                    id="db-transfer"
                    defaultValue="option1"
                  />
                  <div className="radio-content">
                    <span>Direct Bank Transfer</span>
                    <p>
                      Kindly use your Order ID as the payment reference. Your
                      order wont be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                </div>
                <div className="radio-box">
                  <input
                    type="radio"
                    name="optionsRadios"
                    id="cod"
                    defaultValue="option2"
                  />
                  <div className="radio-content">
                    <span>Cash On Delivery</span>
                    <p>
                      Limited to Selected Town / City according to the area
                      postal ZIP codes
                    </p>
                  </div>
                </div>
                <div className="radio-box">
                  <input
                    type="radio"
                    name="optionsRadios"
                    id="paypal"
                    defaultValue="option3"
                  />
                  <div className="radio-content">
                    <span>Paypal</span>
                    <img
                      src="images/icon/visa-master-card.png"
                      alt="visa-master-card"
                    />
                  </div>
                </div>
              </div>
              <a href="#">Place Order</a>
              <div className="section-padding" />
            </div>
          </div>
        </div>
        {/* Container /- */}
      </div>
      {/* Checkout Content /- */}
    </>
  );
};

export default CheckOut;
