import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import { setAuthedUser } from "../actions/authedUser";

class Nav extends React.Component {
  render() {
    const { name, avatarURL, loggedIn, dispatch, history } = this.props;
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">New Question</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
        {loggedIn && (
          <ul>
            <li>Hello, {name}</li>
            <li>
              <img className="avatar-logo" src={avatarURL} alt="avatar"></img>
            </li>
            <li
              className="logout"
              onClick={() => {
                dispatch(setAuthedUser(""));
                history.replace("/login");
              }}
            >
              Logout
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const { id } = authedUser || {};
  return {
    avatarURL: (users[id] || {}).avatarURL,
    name: (users[id] || {}).name,
    loggedIn: !!id,
  };
}

export default connect(mapStateToProps)(withRouter(Nav));
