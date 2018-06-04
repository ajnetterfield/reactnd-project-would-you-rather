import React from 'react';
import { connect } from 'react-redux';

import { handleAnswerQuestion } from '../actions/questions';

class QuestionAnswer extends React.Component {
  onClickOption = (e, answer) => {
    e.preventDefault();

    const { authedUser, question } = this.props;

    this.props.handleAnswerQuestion({
      answer,
      authedUser,
      qid: question.id
    });
  }

  render() {
    const { question } = this.props;

    return (
      <div className="question question-answer">
        {'Would you rather '}

        <button
          className="question-option"
          onClick={e => this.onClickOption(e, 'optionOne')}
        >
          {question.optionOne.text}
        </button>

        {' or '}

        <button
          className="question-option"
          onClick={e => this.onClickOption(e, 'optionTwo')}
        >
          {question.optionTwo.text}
        </button>

        {' ?'}
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleAnswerQuestion
};

export default connect(null, mapDispatchToProps)(QuestionAnswer);
