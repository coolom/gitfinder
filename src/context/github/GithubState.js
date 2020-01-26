import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import githubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  GET_USER,
  SET_ALERT,
  CLEAR_USERS,
  SET_LOADING,
  SET_USER
} from "../types";

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    loading: false
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async text => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    console.log(res.data);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  const getUser = async username => {
    setLoading(true);

    console.log(process.env.NODE_ENV);
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: SET_USER, payload: res.data });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
