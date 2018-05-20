import React from 'react';
import { connect } from 'react-redux';

import { handleLogin } from '../actions/authedUser';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      userId: ''
    };
  }

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      error: false,
      userId: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.userId) {
      this.props.handleLogin(this.state.userId);
    } else {
      this.setState({
        error: true
      });
    }
  }

  render() {
    const { loading, users } = this.props;

    const userIds = loading ? [] : Object.keys(users);

    return (
      <div className="login">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h3 className="login-form-title">
            Please log in to continue
          </h3>

          <div className="login-form-field">
            <select
              className={this.state.error ? 'input select error w-100' : 'input select w-100'}
              onChange={this.handleChange}
              value={this.state.userId}
            >
              <option value="">
                {loading ? 'Loading...' : 'Please select a user'}
              </option>

              {userIds.map(userId => (
                <option key={userId} value={userId}>
                  {users[userId].name}
                </option>
              ))}
            </select>
          </div>

          <input className="input button blue w-100" type="submit" value="Log in" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    loading: users === null,
    users
  };
};

const mapDispatchToProps = {
  handleLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
