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
    let citiesItems; //initialization
    if (cities === null) {
      citiesItems = <h4>Loading...</h4>;
    } else {
      //citiesItems = cities.map(city => <Cities key={city._id} city={city} />);

      citiesItems = <h1>THERE R CITIES</h1>;
    }

    return (
      <div className="cities">
        <div className="container">
          <div className="row">
            <div className="col-mn12">
              <h1 className="display-4">
                  {
              cities.map(function(city, i){
                  return <li key={i}>{city.name}</li>
              })
                  }
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
