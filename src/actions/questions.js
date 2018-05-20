import { showLoading, hideLoading } from 'react-redux-loading';

import { _getQuestions } from '../utils/_DATA.js';

export const CLEAR_QUESTIONS = 'CLEAR_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const clearQuestions = () => ({
  type: CLEAR_QUESTIONS
});

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const getQuestions = () => (dispatch) => {
  dispatch(showLoading());

  return _getQuestions()
    .then((questions) => {
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
};
