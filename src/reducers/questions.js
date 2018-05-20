import { CLEAR_QUESTIONS, RECEIVE_QUESTIONS } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case CLEAR_QUESTIONS:
      return {};

    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };

    default:
      return state;
  }
}
