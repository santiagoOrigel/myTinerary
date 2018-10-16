import axios from "axios";
import { GET_MYTINERARIES_BY_CITY } from "./types";
import { GET_ALL_MYTINERARIES } from "./types";
import { request } from "http";

//Get myTineraries
export const getAllMyTineraries = () => dispatch => {
  axios
    .get("/api/mytineraries/all")
    .then(res =>
      dispatch({
        type: GET_ALL_MYTINERARIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_MYTINERARIES,
        payload: {}
      })
    );
};

//Get All Mytineraries
export const getMyTinerariesByCity = () => dispatch => {
  axios
    .get("api/mytineraries/:city")
    .then(res =>
      dispatch({
        type: GET_ALL_MYTINERARIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_MYTINERARIES,
        payload: {}
      })
    );
};
