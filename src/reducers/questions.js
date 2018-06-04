import {
  ADD_QUESTION,
  ANSWER_QUESTION,
  CLEAR_QUESTIONS,
  RECEIVE_QUESTIONS
} from '../actions/questions';

export default function questions(state = null, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };

    case ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: [
              ...state[action.qid][action.answer].votes,
              action.authedUser
            ]
          }
        }
      };

    case CLEAR_QUESTIONS:
      return null;

    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };

    default:
      return state;
  }
}
