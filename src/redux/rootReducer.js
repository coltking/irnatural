import { combineReducers } from "redux";
import userReducer from "./userReducer";
import homeReducer from "./homeReducer";
const rootReducers = combineReducers({
    userReducer,homeReducer
 })
export default rootReducers;
