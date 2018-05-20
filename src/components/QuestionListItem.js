import React from 'react';
import { Link } from 'react-router-dom';

import Question from './Question';

const QuestionListItem = ({ answer, question }) => (
  <li className="question-list-item">
    <Link to={`/questions/${question.id}`} className="question-link">
      <Question
        answer={answer}
        question={question}
      />
    </Link>
  </li>
);

export default QuestionListItem;
