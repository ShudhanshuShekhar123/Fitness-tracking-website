import axios from "axios";
import {
  EXCERCISE_FAILURE,
  EXCERCISE_REQUEST,
  EXCERCISE_SUCCESS,
} from "./actionType";

export const getExcercise = (obj) => async (dispatch) => {
  dispatch({ type: EXCERCISE_REQUEST });
  try {
    const res = await axios.get(
      `https://fitness-place.onrender.com/fitness/exercise?category=gym&type=${obj.bodypart}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: obj.token,
        },
      }
    );
    console.log(res.data);
    dispatch({ type: EXCERCISE_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: EXCERCISE_FAILURE });
  }
};
