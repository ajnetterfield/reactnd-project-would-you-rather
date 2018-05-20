import React from 'react';

import QuestionOption from './QuestionOption';

const Question = ({ answer, question }) => (
  <div className="question">
    {'Would you rather '}

    <QuestionOption
      isAnswer={answer === 'optionOne'}
      option={question.optionOne}
    />

    {' or '}

    <QuestionOption
      isAnswer={answer === 'optionTwo'}
      option={question.optionTwo}
    />

    {' ?'}
  </div>
);

export default Question;
