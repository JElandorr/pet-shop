import React from "react";

const Login = () => {
  return (
    <>
      {/* Checkout Content */}
      <div className="container-fluid no-padding checkout-content">
        {/* Container */}
        <div className="container">
          <div className="row">
            {/* User Login */}
            <div className="col-md-6 user-login">
              <div className="section-padding" />
              <div className="section-title">
                <h3>Return User Login</h3>
              </div>
              <form className="new-user-registeration">
                <div className="form-group">
                  <label className="col-md-4 col-sm-4 col-xs-12">
                    Your Email*
                  </label>
                  <div className="col-md-8 col-sm-8 col-xs-12">
                    <input
                      type="email"
                      className="form-control"
                      id="user-email"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 col-sm-4 col-xs-12">
                    Password*
                  </label>
                  <div className="col-md-8 col-sm-8 col-xs-12">
                    <input
                      type="text"
                      className="form-control"
                      id="user-pwd"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-12 pull-right">
                  <p>
                    Still do not have an account?{" "}
                    <a href="/register">Register Here!</a>
                  </p>
                  <a href="#">Forgot Password?</a>
                  <button type="submit" className="btn-register btn-sign-in">
                    Sign In
                  </button>
                </div>
              </form>
              {/* <p>
                <span>Or</span>
              </p>
              <a href="#">Purchase As Guest User</a> */}
              <div className="section-padding" />
            </div>
            {/* User Login /- */}
          </div>
        </div>
        {/* Container /- */}
      </div>
      {/* Checkout Content /- */}
    </>
  );
};

export default Login;
