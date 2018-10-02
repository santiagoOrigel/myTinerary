import React, { Component } from "react";
import Proptypes from "prop-types";
//import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCities } from "../../actions/cityActions";

class Cities extends Component {
  componentDidMount() {
    this.props.getCities();
  }
  render() {
    const cities = this.props.cities || [];

    return (
      <div className="cities">
        <div className="container">
          <div className="row">
            <div className="col-mn12">
              <h1 className="lead">
                {cities.map(function(item, i) {
                  return <li key={i}>{item.name}</li>;
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
  cities: state.city.cities
});

Cities.prototypes = {
  getCities: Proptypes.array.isRequired
};

export default connect(
  mapStateToProps,
  { getCities }
)(Cities);
