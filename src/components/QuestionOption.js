import React from 'react';

const QuestionOption = ({ isAnswer, option }) => (
  <span className={isAnswer ? 'question-option answer' : 'question-option'}>
    {option.text}
  </span>
);

export default QuestionOption;
