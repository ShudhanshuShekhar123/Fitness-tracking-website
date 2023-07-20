import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export const login = (details) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post("https://reqres.in/api/login", details);
    if (res.error) {
      throw new Error(res.error);
    }
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    console.log(res.data, "login success");
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE });
  }
};

export const register = (details) => async (dispatch) => {
  try {
    const res = await axios.post("https://reqres.in/api/register", details);
    if (res.error) {
      throw new Error(res.error);
    }
    alert("Register successfull");
  } catch (err) {
    alert("error");
  }
};
