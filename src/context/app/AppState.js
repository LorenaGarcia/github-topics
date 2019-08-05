import React, { useReducer } from "react";
import axios from "axios";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import * as ACTIONS from "../types";

const GithubState = props => {
  const initialState = {
    topics: [],
    topic: {},
    currentPage: 1,
    perPage: 3,
    loading: false
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const searchTopics = async text => {
    setLoading(true);

    const options = {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.mercy-preview+json"
      },
      url: `https://api.github.com/search/topics?q=${text}+is:featured`
    };

    const res = await axios(options);

    dispatch({
      type: ACTIONS.SEARCH_TOPICS,
      payload: res.data.items
    });
  };

  const changePage = async page => {
    setLoading(true);

    dispatch({
      type: ACTIONS.CHANGE_PAGE,
      payload: page
    });
  };

  const getTopic = async topicname => {
    setLoading();

    const topic = state.topics.find(({ name }) => name === topicname);

    dispatch({
      type: ACTIONS.GET_TOPIC,
      payload: topic
    });
  };

  const clearTopics = () => dispatch({ type: ACTIONS.CLEAR_TOPICS });

  const setLoading = () => dispatch({ type: ACTIONS.SET_LOADING });

  return (
    <AppContext.Provider
      value={{
        ...state,
        searchTopics,
        clearTopics,
        changePage,
        getTopic
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default GithubState;
