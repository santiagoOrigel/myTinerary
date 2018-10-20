import axios from "axios";
import { GET_ACTIVITIES_BY_MYTINERARY, GET_ALL_ACTIVITIES } from "./types";

//Get AllActivities
export const getAllActivities = () => dispatch => {
  axios
    .get("/api/activities/all")
    .then(res =>
      dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: {}
      })
    );
};

//Get myTineraries by mytinerarygtrgthythyt fix me
export const getActivitiesByMyTinerary = mytinerary => dispatch => {
  axios
    .get(`/api/activities/${mytinerary}`)
    .then(res =>
      dispatch({
        type: GET_ACTIVITIES_BY_MYTINERARY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ACTIVITIES_BY_MYTINERARY,
        payload: {}
      })
    );
};
