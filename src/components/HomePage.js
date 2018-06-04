import React from 'react';
import { connect } from 'react-redux';

import QuestionList from './QuestionList';

const ANSWERED = 'answered';
const UNANSWERED = 'unanswered';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: UNANSWERED
    };
  }

  onClickPill = (e, tab) => {
    e.preventDefault();

    this.setState({
      tab
    });
  }

  render() {
    if (this.props.loading) {
      return 'Loading...';
    }

    const { authedUser, questions, users } = this.props;

    const user = users[authedUser];

    const allQuestionIds = Object.keys(questions);

    const filteredQuestionIds = this.state.tab === UNANSWERED
      ? allQuestionIds.filter(x => user.answers[x] === undefined)
      : allQuestionIds.filter(x => user.answers[x] !== undefined);

    const questionIds = filteredQuestionIds.sort((a, b) => (
      questions[b].timestamp - questions[a].timestamp
    ));

    return (
      <div className="home-page">
        <ul className="pill-list">
          <li className={this.state.tab === UNANSWERED ? 'pill-list-item active' : 'pill-list-item'}>
            <button className="pill-button red" onClick={e => this.onClickPill(e, UNANSWERED)}>
              Unanswered Questions
            </button>
          </li>

          <li className={this.state.tab === ANSWERED ? 'pill-list-item active' : 'pill-list-item'}>
            <button className="pill-button green" onClick={e => this.onClickPill(e, ANSWERED)}>
              Answered Questions
            </button>
          </li>
        </ul>

        <QuestionList
          questionIds={questionIds}
          questions={questions}
          user={user}
        />

        {questionIds.length === 0 &&
          <p className="no-questions">
            {this.state.tab === UNANSWERED
              ? 'You have answered every question'
              : "You haven't answered a question yet"
            }
          </p>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, questions, users }) => {
  return {
    authedUser,
    loading: questions === null,
    questions,
    users
  };
};

export default connect(mapStateToProps)(Home);
