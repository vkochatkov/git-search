import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from '../actionTypes';
import { AnyAction } from 'redux';

export const initialState = {
  user: {},
  users: [],
  loading: false,
  repos: [],
};

export const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return { ...state, user: action.payload, loading: false };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        user: {},
        users: [],
        loading: false,
        repos: [],
      };
    default:
      return state;
  }
};
