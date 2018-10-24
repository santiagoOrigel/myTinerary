import React, { Component } from "react";
import Proptypes from "prop-types";

import { connect } from "react-redux";
import { getActivitiesByMyTinerary } from "../../../../actions/activitiesActions";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

class Activities extends Component {
  componentDidMount() {
    if (this.props.match.params.mytinerary) {
      this.props.getActivitiesByMyTinerary(this.props.match.params.mytinerary);
    }
  }

  render() {
    let activities = this.props.activities || [];

    return (
      <div className="activities">
        <div className="container">
          <div className="row">
            <Slider>
              {activities.map((activity, index) => (
                <div key={index}>
                  <h2>{activity.title}</h2>

                  <div>{activity.description}</div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.activity.activities
});

Activities.prototypes = {
  getActivitiesByMyTinerary: Proptypes.array.isRequired
};

export default connect(
  mapStateToProps,
  { getActivitiesByMyTinerary }
)(Activities);
