import { SET_CURRENT_USER } from "../types";

//Login & get Token
export const loginUser = (userData) => (dispatch) => {};

//Set Current user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//Log user out
export const logoutUser = () => (dispatch) => {};
