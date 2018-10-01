import axios from "axios";
import { GET_CITIES, CITIES_LOADING, CLEAR_CITIES } from "./types";

//Get cities
export const getCities = () => dispatch => {
  //dispatch(setCitiesLoading());
  axios
    .get("api/cities/all")
    .then(res =>
      dispatch({
        type: GET_CITIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CITIES,
        payload: {}
      })
    );
};

// Cities Loading
export const setCitiesLoading = () => {
  return {
    type: CITIES_LOADING
  };
};

// Clear Cities
export const clearCities = () => {
  return {
    type: CLEAR_CITIES
  };
};
