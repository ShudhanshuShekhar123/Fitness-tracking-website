import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authreducer } from "./AuthReducer/reducer";
import { reducer as excercisereducer } from "./ExcerciseReducer/reducer";

const rootreduceer = combineReducers({
  authreducer,
  excercisereducer,
});

export const store = legacy_createStore(rootreduceer, applyMiddleware(thunk));
