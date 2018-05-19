import { getQuestions } from './questions';

export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export const setAuthedUser = (id) => {
  return {
    type: SET_AUTHED_USER,
    id
  };
};

export const handleLogin = (id) => (dispatch) => {
  dispatch(setAuthedUser(id));

  return dispatch(getQuestions());
};
