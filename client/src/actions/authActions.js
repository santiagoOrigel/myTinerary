import axios from "axios";
import { GET_ERRORS, SUCCESS_REGISTRATION_DISPATCH } from "./types";

//Register User by POST and redirection will be performed to / which is the Landing Page defined in App.js in this line: <Route exact path="/" component={Landing} />
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
