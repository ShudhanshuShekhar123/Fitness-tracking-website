import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authreducer } from "./AuthReducer/reducer";

const rootreduceer = combineReducers({
  authreducer,
});

export const store = legacy_createStore(rootreduceer, applyMiddleware(thunk));
