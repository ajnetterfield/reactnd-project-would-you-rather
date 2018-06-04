import { ANSWER_QUESTION } from '../actions/questions';
import { RECEIVE_USERS } from '../actions/users';

export default function users(state = null, action) {
  switch (action.type) {
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      };

    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };

    default:
      return state;
  }
}
