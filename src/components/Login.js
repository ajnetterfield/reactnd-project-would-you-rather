import React from 'react';
import { connect } from 'react-redux';

import { handleLogin } from '../actions/authedUser';

class Login extends React.Component {
  componentDidMount() {
    // TODO: Replace this temporary hard-coded "login" with an actual login form
    setTimeout(() => {
      this.props.handleLogin('tylermcginnis');
    }, 1000);
  }

  render() {
    return (
      <div className="login">
        Login
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleLogin
};

export default connect(null, mapDispatchToProps)(Login);
