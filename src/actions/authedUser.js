import { clearQuestions, getQuestions } from './questions';

export const CLEAR_AUTHED_USER = 'CLEAR_AUTHED_USER';
export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export const clearAuthedUser = () => ({
  type: CLEAR_AUTHED_USER
});

export const setAuthedUser = (id) => ({
  type: SET_AUTHED_USER,
  id
});

export const handleLogin = (id) => (dispatch) => {
  dispatch(setAuthedUser(id));

  return dispatch(getQuestions());
};

export const handleLogout = () => (dispatch) => {
  dispatch(clearAuthedUser());
  return dispatch(clearQuestions());
};
