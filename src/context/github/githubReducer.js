import {
  SEARCH_USERS,
  GET_USER,
  SET_ALERT,
  CLEAR_USERS,
  SET_LOADING,
  SET_USER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    default:
      break;
  }
};
