// the object of all user context actions
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

// utilizing useReducer : initial state value
const INITIAL_STATE = {
  currentUser: null,
};

// passing the initial state manually to the state because we don't have useReducer hook anymore
export const userReducer = (state = INITIAL_STATE, action) => {
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
      // every single reducer by default needs to return the previous state if none of cases match the type
      return state;
  }
};
