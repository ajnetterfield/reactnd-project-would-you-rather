import { showLoading, hideLoading } from 'react-redux-loading';

import { _getQuestions, _saveQuestionAnswer } from '../utils/_DATA.js';

export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const CLEAR_QUESTIONS = 'CLEAR_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const answerQuestion = ({ answer, authedUser, qid }) => ({
  type: ANSWER_QUESTION,
  answer,
  authedUser,
  qid
});

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

export const handleAnswerQuestion = (info) => (dispatch) => {
  dispatch(answerQuestion(info));
  return _saveQuestionAnswer(info);
};
