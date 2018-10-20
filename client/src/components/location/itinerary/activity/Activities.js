import React, { Component } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getActivitiesByMyTinerary } from "../../../../actions/activitiesActions";
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
            <div className="col-mn12">
              <h1 className="lead">
                <tr>
                  <th />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <th>TITLE </th>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;
                  <th>AUTHOR</th>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <th>PRICE</th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <th>ADRESS</th>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <th>FAVORITE</th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </tr>
                {activities.map((activity, i) => {
                  return (
                    <li key={i}>
                      {activity.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {activity.author} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {activity.price}{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {activity.adress} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <img
                        src={require("../../../../img/trash.png")}
                        alt=""
                        width="2%"
                        className="trash"
                      />
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
  activities: state.activity.activities
});

Activities.prototypes = {
  getActivitiesByMyTinerary: Proptypes.array.isRequired
};

export default connect(
  mapStateToProps,
  { getActivitiesByMyTinerary }
)(Activities);
