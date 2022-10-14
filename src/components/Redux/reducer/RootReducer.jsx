import { combineReducers } from "redux";
import Reducer from "./Reducer";

const RootReducer = combineReducers({
  userStore: Reducer,
});

export default RootReducer;
