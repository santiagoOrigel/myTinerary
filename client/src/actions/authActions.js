import axios from "axios";
import { GET_ERRORS, SUCCESS_REGISTRATION_DISPATCH } from "./types";

//Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(
      res =>
        dispatch({
          type: SUCCESS_REGISTRATION_DISPATCH,
          payload: res.data
        }),
      history.push("/")
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
