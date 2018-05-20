import React from 'react';

import QuestionListItem from './QuestionListItem';

const QuestionList = ({ questionIds, questions, user }) => (
  <ul className="question-list">
    {questionIds.map(questionId => (
      <QuestionListItem
        answer={user.answers[questionId]}
        key={questionId}
        question={questions[questionId]}
      />
    ))}
  </ul>
);
export default QuestionList;
