import { showLoading, hideLoading } from 'react-redux-loading';

import { _getQuestions } from '../utils/_DATA.js';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};

export const getQuestions = () => (dispatch) => {
  dispatch(showLoading());

  return _getQuestions()
    .then((questions) => {
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
};
