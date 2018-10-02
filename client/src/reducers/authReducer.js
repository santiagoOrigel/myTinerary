import { SUCCESS_REGISTRATION_DISPATCH } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_REGISTRATION_DISPATCH:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
