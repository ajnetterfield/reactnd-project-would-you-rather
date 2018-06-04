import LoadingBar from 'react-redux-loading';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AddQuestionPage from './AddQuestionPage';
import HomePage from './HomePage';
import Leaderboard from './Leaderboard';
import Login from './Login';
import Nav from './Nav';
import NoMatch from './NoMatch';
import QuestionPage from './QuestionPage';

import { getUsers } from '../actions/users';

class App extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const loadingBarColor = this.props.authedUser ? '#fff' : '#2d7dd2';

    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: loadingBarColor, height: '0.25rem' }} />

          <div className="app">
            {this.props.authedUser
              ? (
                <Fragment>
                  <Nav />

                  <div className="content">
                    <Switch>
                      <Route path="/" exact component={HomePage} />
                      <Route path="/add" component={AddQuestionPage} />
                      <Route path="/leaderboard" component={Leaderboard} />
                      <Route path="/questions/:question_id" component={QuestionPage} />
                      <Route component={NoMatch} />
                    </Switch>
                  </div>
                </Fragment>
              ) : (
                <Switch>
                  <Route path="/" exact component={Login} />
                  <Redirect to="/" />
                </Switch>
              )
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

const mapDispatchToProps = {
  getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
