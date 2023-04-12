import { combineReducers } from "redux";

import { userReducer } from "./user/user-reducer";

// object recieve keys for small reducers and actual value ot them
export const rootReducer = combineReducers({
  user: userReducer,
});
