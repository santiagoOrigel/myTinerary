import React, { Component } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllMyTineraries } from "../../../actions/myTinerariesActions";

class Mytineraries extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getAllMyTineraries();
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
                  return <li key={i}>{myTinerary.title}</li>;
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

Mytineraries.prototypes = {
  getAllMyTineraries: Proptypes.array.isRequired
};

export default connect(
  mapStateToProps,
  { getAllMyTineraries }
)(Mytineraries);
