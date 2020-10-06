import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

class LogIn extends React.Component {
  state = {
    selectedUser: "",
  };
  render() {
    const { users, dispatch, history, location } = this.props;
    const { selectedUser } = this.state;
    const avatarUrl =
      (users[selectedUser] || users[Object.keys(users)[0]] || {}).avatarURL ||
      "";
    return (
      <div className="question">
        <div className="user-asks">
          <div className="title">Login to an account</div>
        </div>
        {!!Object.keys(this.props.users).length && (
          <div className="question-content">
            <div className="avatar">
              <img alt="" src={avatarUrl} width="100%" height="100%" />
            </div>

            <div className="question-info">
              <div className="question-title">Log in as ...</div>
              <select
                onChange={(e) => {
                  this.setState({ selectedUser: e.target.value });
                }}
              >
                {users &&
                  Object.keys(users).map((userId) => (
                    <option key={userId} value={userId}>
                      {users[userId].name}
                    </option>
                  ))}
              </select>
              <button
                className="btn"
                onClick={() => {
                  dispatch(
                    setAuthedUser(selectedUser || Object.keys(users)[0])
                  );
                  history.replace(
                    location.state && location.state.from
                      ? location.state.from
                      : "/"
                  );
                }}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    users,
    loggedIn: authedUser,
  };
}

export default connect(mapStateToProps)(withRouter(LogIn));
