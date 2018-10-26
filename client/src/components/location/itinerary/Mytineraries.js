import React, { Component } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMyTinerariesByCity } from "../../../actions/myTinerariesActions";

class Mytineraries extends Component {
  componentDidMount() {
    if (this.props.match.params.city) {
      this.props.getMyTinerariesByCity(this.props.match.params.city);
    }
  }

  render() {
    let myTineraries = this.props.myTineraries || [];

    return (
      <div className="myTineraries">
        <div className="container">
          <div className="row">
            <div className="col-mn12">
              <h1 className="lead">
                {myTineraries.map((myTinerary, i) => {
                  return (
                    <li key={i}>
                      <Link to={`/activities/${myTinerary.title}`}>
                        {myTinerary.title}
                      </Link>
                    </li>
                  );
                })}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myTineraries: state.myTinerary.myTineraries
});

Mytineraries.Proptypes = {
  getMyTinerariesByCity: Proptypes.array.isRequired
};

export default connect(
  mapStateToProps,
  { getMyTinerariesByCity }
)(Mytineraries);
