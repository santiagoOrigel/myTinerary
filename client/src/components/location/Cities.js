import React, { Component } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCities } from "../../actions/cityActions";

class Cities extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    this.props.getCities();
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }

  render() {
    let cities = this.props.cities || [];
    const search = this.state.search;

    cities = cities.filter(city => {
      return city.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="cities">
        <form>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search for city"
            name="cityFilter"
            value={this.state.search}
            onChange={this.updateSearch}
          />
        </form>
        <div className="container">
          <div className="row">
            <div className="col-mn12">
              <h1 className="lead">
                {cities.map((city, i) => {
                  return (
                    <li key={i}>
                      <Link to={`/mytineraries/${city.name}`}>{city.name}</Link>
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
  cities: state.city.cities
});

Cities.prototypes = {
  getCities: Proptypes.array.isRequired
};

export default connect(
  mapStateToProps,
  { getCities }
)(Cities);
