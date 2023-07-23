import {
  EXCERCISE_FAILURE,
  EXCERCISE_REQUEST,
  EXCERCISE_SUCCESS,
} from "./actionType";

const initialState = {
  excercise: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EXCERCISE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EXCERCISE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        excercise: action.payload,
      };
    case EXCERCISE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
