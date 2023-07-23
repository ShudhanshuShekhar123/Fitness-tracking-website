import axios from "axios";
import {
  EXCERCISE_FAILURE,
  EXCERCISE_REQUEST,
  EXCERCISE_SUCCESS,
} from "./actionType";

export const getExcercise = (bodypart) => async (dispatch) => {
  dispatch({ type: EXCERCISE_REQUEST });
  try {
    const res = await axios.get(
      `https://fitness-palace.onrender.com/fitness/exercise?category=gym&type=${bodypart}`,
      {
        //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGI5NmY5YjU3M2JlNWIwZWM5NTlkMGYiLCJpYXQiOjE2OTAwMjk5MTV9.1rvqcMFgBYJ7liboip7AHdKGQ4JWCtutvUN6VaaZfFo
        headers: {
          "Content-Type": "application/json",
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
