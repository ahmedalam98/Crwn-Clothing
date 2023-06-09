// this file ( Store Object )contains :
// 1) all of Redux code
// 2) where our state lives
// 3) recieve actions and dispatch them into reducers to make them  update the state

import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  next(action);
};

// little library helpers that run before an action hits the reducer, it hits the middleware first
const middleWares = [loggerMiddleware, sagaMiddleware];

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

// at the end: telling saga-middleware to run with the rootSaga
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
