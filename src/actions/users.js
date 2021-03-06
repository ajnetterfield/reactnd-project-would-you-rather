import { showLoading, hideLoading } from 'react-redux-loading';

import { _getUsers } from '../utils/_DATA.js';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const getUsers = () => (dispatch) => {
  dispatch(showLoading());

  return _getUsers()
    .then((users) => {
      dispatch(receiveUsers(users));
    }).then(() => {
      dispatch(hideLoading());
    });
};
