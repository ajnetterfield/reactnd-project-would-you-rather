import React, { Fragment } from 'react';

import Question from './Question';

import { formatTimestamp } from '../utils/helpers';

const QuestionDetails = ({ answer, author, question, user }) => {
  const optionOneText = question.optionOne.text;
  const optionTwoText = question.optionTwo.text;

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;

  const totalVotes = optionOneVotes + optionTwoVotes;

  const optionOnePercentage = (100.0 * optionOneVotes) / totalVotes;
  const optionTwoPercentage = (100.0 * optionTwoVotes) / totalVotes;

  const authorName = author.id === user.id ? 'you' : author.name;

  return (
    <div className="question-details">
      <img
        alt={`Avatar of ${author.name}`}
        className="avatar"
        src={author.avatarURL}
      />

      <Question
        answer={answer}
        question={question}
      />

      <div className="question-stats">
        {answer !== undefined &&
          <Fragment>
            <p>{`${optionOneVotes} of ${totalVotes} (${optionOnePercentage}%) would rather ${optionOneText}`}</p>
            <p>{`${optionTwoVotes} of ${totalVotes} (${optionTwoPercentage}%) would rather ${optionTwoText}`}</p>
          </Fragment>
        }

        <p>Asked by {authorName} on {formatTimestamp(question.timestamp)}</p>
      </div>
    </div>
  );
};

export default QuestionDetails;
