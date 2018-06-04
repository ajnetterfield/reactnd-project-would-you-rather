import React from 'react';
import { connect } from 'react-redux';
import { FaHome, FaListOl, FaPlus, FaSignOut, FaUser } from 'react-icons/lib/fa';
import { NavLink, withRouter } from 'react-router-dom';

import { handleLogout } from '../actions/authedUser';

class Nav extends React.Component {
  handleClickLogout = (e) => {
    e.preventDefault();
    this.props.handleLogout();
  }

  render() {
    const { authedUser, users } = this.props;

    return (
      <nav className="nav">
        <ul className="nav-list nav-list-left">
          <li className="nav-list-item">
            <NavLink to="/" exact className="nav-list-item-link" activeClassName="active">
              <FaHome className="fa" />
              Home
            </NavLink>
          </li>

          <li className="nav-list-item">
            <NavLink to="/leaderboard" exact className="nav-list-item-link" activeClassName="active">
              <FaListOl className="fa" />
              Leaderboard
            </NavLink>
          </li>

          <li className="nav-list-item">
            <NavLink to="/add" exact className="nav-list-item-link" activeClassName="active">
              <FaPlus className="fa" />
              Add Question
            </NavLink>
          </li>
        </ul>

        <ul className="nav-list nav-list-right">
          <li className="nav-list-item">
            <div className="nav-list-item-label">
              <FaUser className="fa" />
              {users[authedUser].name}
            </div>
          </li>

          <li className="nav-list-item">
            <NavLink to="/" exact className="nav-list-item-link" activeClassName="" onClick={this.handleClickLogout}>
              <FaSignOut className="fa" />
              Log out
            </NavLink>
          </li>
        </ul>
      </nav>
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
  handleLogout
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
