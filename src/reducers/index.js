import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
import userLogin from "./userLoginReducer";

export default combineReducers({
  user: usersReducer,
  loggedIn: userLogin
});
