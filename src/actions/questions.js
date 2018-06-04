import { showLoading, hideLoading } from 'react-redux-loading';

import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from '../utils/_DATA.js';

export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const CLEAR_QUESTIONS = 'CLEAR_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question
});

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
    }).then(() => {
      dispatch(hideLoading());
    });
};

export const handleAddQuestion = (question) => (dispatch) => {
  dispatch(showLoading());

  return _saveQuestion(question)
    .then((formattedQuestion) => {
      dispatch(addQuestion(formattedQuestion));
    }).then(() => {
      dispatch(hideLoading());
    });
};

export const handleAnswerQuestion = (info) => (dispatch) => {
  dispatch(answerQuestion(info));

  dispatch(showLoading());

  return _saveQuestionAnswer(info)
    .then(() => {
      dispatch(hideLoading());
    });
};
