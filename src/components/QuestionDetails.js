import React, { Fragment } from 'react';

import Question from './Question';
import QuestionAnswer from './QuestionAnswer';

import { formatTimestamp } from '../utils/helpers';

const QuestionDetails = ({ answer, authedUser, author, question, user }) => {
  const optionOneText = question.optionOne.text;
  const optionTwoText = question.optionTwo.text;

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;

  const totalVotes = optionOneVotes + optionTwoVotes;

  const optionOnePercentage = Math.round((100.0 * optionOneVotes) / totalVotes);
  const optionTwoPercentage = Math.round((100.0 * optionTwoVotes) / totalVotes);

  const authorName = author.id === user.id ? 'you' : author.name;

  return (
    <div className="question-details">
      <img
        alt={`Avatar of ${author.name}`}
        className="avatar"
        src={author.avatarURL}
      />

      <div className="question-author">
        Asked by {authorName} on {formatTimestamp(question.timestamp)}
      </div>

      {answer
        ? (
          <Question
            answer={answer}
            question={question}
          />
        ) : (
          <QuestionAnswer
            authedUser={authedUser}
            question={question}
          />
        )
      }

      {answer &&
        <div className="question-stats">
          <Fragment>
            <p>{`${optionOneVotes} of ${totalVotes} (${optionOnePercentage}%) would rather ${optionOneText}`}</p>
            <p>{`${optionTwoVotes} of ${totalVotes} (${optionTwoPercentage}%) would rather ${optionTwoText}`}</p>
          </Fragment>
        </div>
      }
    </div>
  );
};

export default QuestionDetails;
