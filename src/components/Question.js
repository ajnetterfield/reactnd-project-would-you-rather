import React from 'react';

const Question = ({ answer, question }) => (
  <div className="question">
    {'Would you rather '}

    <span className={answer === 'optionOne' ? 'question-option answer' : 'question-option'}>
      {question.optionOne.text}
    </span>

    {' or '}

    <span className={answer === 'optionTwo' ? 'question-option answer' : 'question-option'}>
      {question.optionTwo.text}
    </span>

    {' ?'}
  </div>
);

export default Question;
