import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export const login = (details) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post(
      "https://freaking-backend.onrender.com/user/login",
      details
    );
    if (res.error) {
      throw new Error(res.error);
    }
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    console.log(res.data, "login success");
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE });
    console.log(err);
    alert("Something went wrong");
  }
};

export const register = (details) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://freaking-backend.onrender.com/user/register",
      details
    );
    if (res.error) {
      throw new Error(res.error);
    }
    alert("Register successfull");
  } catch (err) {
    console.log(err);
    alert("error");
  }
};
