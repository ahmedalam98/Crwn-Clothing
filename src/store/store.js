// this file ( Store Object )contains :
// 1) all of Redux code
// 2) where our state lives
// 3) recieve actions and dispatch them into reducers to make them  update the state

import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// little library helpers that run before an action hits the reducer, it hits the middleware first
const middleWares = [logger];

const composeedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeedEnhancers);
