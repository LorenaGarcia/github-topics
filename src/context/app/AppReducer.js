import {
  SEARCH_TOPICS,
  SET_LOADING,
  CLEAR_TOPICS,
  GET_TOPIC,
  CHANGE_PAGE
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_TOPICS:
      return {
        ...state,
        topics: action.payload,
        loading: false
      };
    case GET_TOPIC:
      return {
        ...state,
        topic: action.payload,
        loading: false
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
        loading: false
      };
    case CLEAR_TOPICS:
      return {
        ...state,
        topics: [],
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
