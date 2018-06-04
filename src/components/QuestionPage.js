import React from 'react';
import { connect } from 'react-redux';

import NoMatch from './NoMatch';
import QuestionDetails from './QuestionDetails';

const QuestionPage = ({ authedUser, question, users}) => {
  if (question === undefined) {
    return <NoMatch />;
  }

  const author = users[question.author];
  const user = users[authedUser];
  const answer = user.answers[question.id];

  return (
    <div className="question-page">
      <QuestionDetails
        answer={answer}
        authedUser={authedUser}
        author={author}
        question={question}
        user={user}
      />
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const questionId = props.match.params.question_id;

  return {
    authedUser,
    question: questions[questionId],
    users
  };
};

export default connect(mapStateToProps)(QuestionPage);
