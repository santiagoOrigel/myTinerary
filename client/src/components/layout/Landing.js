import React, { Component } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions/authActions";
import { connect } from "react-redux";

class Landing extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <div className="landing">
        {user ? user.name : null}
        <div className="landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">MYtinerary</h1>
                <p className="lead">
                  {" "}
                  Schedule your Itinerary in you favorite City.
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>

                <a href="login.html" className="btn btn-lg btn-light">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Landing);
