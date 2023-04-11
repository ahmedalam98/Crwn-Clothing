import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

import { createAction } from "../utils/reducer/reducer.utils";

// the actual values we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// the object of all user context actions
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    // action for the function we need to access in user context
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      // return an object of all the state values + the value we want to update
      return {
        ...state,
        // state value inside reducer that will be modified
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in useReduer`);
  }
};

// utilizing useReducer 1) : initial state value
const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // utilizing useReducer 2) :
  // NOTE 1 : state, dispatch ---> always return from useReducer
  // NOTE 2 : userReducer, INITIAL_STATE ---> cuz you pass to reducers the actual reducer & initial state of context you wanna modify
  // Note 3 : dispatch is a function that always recieve an *action* and *payload* (if found) as arguments
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  const value = { currentUser, setCurrentUser };

  // centralized place of Auth Listener
  // hook up to stream of some events
  useEffect(() => {
    // unsubscribe ---> to make onAuthStateChangedListener stop listening whenever the UserProvider is unmount
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
