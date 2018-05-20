import LoadingBar from 'react-redux-loading';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AddQuestion from './AddQuestion';
import Home from './Home';
import Leaderboard from './Leaderboard';
import Login from './Login';
import Nav from './Nav';
import NoMatch from './NoMatch';
import Question from './Question';

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
                      <Route path="/" exact component={Home} />
                      <Route path="/add" component={AddQuestion} />
                      <Route path="/leaderboard" component={Leaderboard} />
                      <Route path="/questions/:question_id" component={Question} />
                      <Route component={NoMatch} />
                    </Switch>
                  </div>
                </Fragment>
              ) : (
                <Login users={this.props.users} />
              )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users
  };
};

const mapDispatchToProps = {
  getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
