import React from "react";

const Register = () => {
  return (
    <>
      {/* Checkout Content */}
      <div className="container-fluid no-padding checkout-content">
        {/* Container */}
        <div className="container">
          <div className="row">
            {/* User Registration */}
            <div className="col-md-6 user-registration">
              <div className="section-padding" />
              <div className="section-title">
                <h3>New User Registeration</h3>
              </div>
              {/* New User Registeration */}
              <form className="new-user-registeration">
                <div className="form-group">
                  <label className="col-md-4 col-sm-4 col-xs-12">
                    Your Name
                  </label>
                  <div className="col-md-8 col-sm-8 col-xs-12">
                    <input
                      type="text"
                      className="form-control"
                      id="new-user-id"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 col-sm-4 col-xs-12">Email</label>
                  <div className="col-md-8 col-sm-8 col-xs-12">
                    <input
                      type="email"
                      className="form-control"
                      id="new-user-email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 col-sm-4 col-xs-12">
                    Password
                  </label>
                  <div className="col-md-8 col-sm-8 col-xs-12">
                    <input
                      type="text"
                      className="form-control"
                      id="new-user-pwd"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 col-sm-4 col-xs-12">
                    Re - Type Password
                  </label>
                  <div className="col-md-8 col-sm-8 col-xs-12">
                    <input
                      type="text"
                      className="form-control"
                      id="new-user-re-pwd"
                    />
                  </div>
                </div>
                <div className="col-md-8 pull-right">
                  <p>
                    Already have an account? <a href="/login">Login Here</a>!
                  </p>
                  <button type="submit" className="btn-register">
                    Register
                  </button>
                </div>
              </form>
              <div className="section-padding" />
              {/* New User Registeration /- */}
            </div>
            {/* User Registration */}
          </div>
        </div>
        {/* Container /- */}
      </div>
      {/* Checkout Content /- */}
    </>
  );
};

export default Register;
