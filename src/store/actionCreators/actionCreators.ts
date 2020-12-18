import { Action, AnyAction, Dispatch } from 'redux';

import axios from 'axios';
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from '../actionTypes';
import { ReposProps, User, Users } from '../../interfaces/interface';
import { CLIENT_ID, CLIENT_SECRET } from '../../constants/contsants';

const withCreds = (url: string) =>
  `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

export const setLoading = (): Action => ({ type: SET_LOADING });

export const clearUsers = (): Action => ({ type: CLEAR_USERS });

export const setSearchQuery = (users: Users) => ({
  type: SEARCH_USERS,
  payload: users,
});

export const setUser = (user: User) => ({ type: GET_USER, payload: user });

export const setRepos = (repos: ReposProps) => ({
  type: GET_REPOS,
  payload: repos,
});

export const setError = () => ({});

export const search = (value: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading());
    const response = await axios.get(
      withCreds(`https://api.github.com/search/users?q=${value}&`),
    );

    dispatch(setSearchQuery(response.data.items));
  };
};

export const getUser = (name: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading());

      const response = await axios.get(
        withCreds(`https://api.github.com/users/${name}?`),
      );

      dispatch(setUser(response.data));
    } catch (e) {
      dispatch(setError());
    }
  };
};

export const getRepos = (name: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading());

    const response = await axios.get(
      withCreds(`https://api.github.com/users/${name}/repos?per_page=10&`),
    );

    dispatch(setRepos(response.data));
  };
};
