import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";

class LeaderBoard extends React.Component {
  render() {
    const { users } = this.props;

    const scoredUsers = Object.keys(users)
      .map((userId) => users[userId])
      .map((user) => {
        return {
          ...user,
          score: Object.keys(user.questions).length + Object.keys(user.answers).length,
        };
      })
      .sort((a, b) => b.score - a.score);
    return (
      <div>
        {scoredUsers.map((user, index) => (
          <div key={user.id} className="question">
            <div className="user-asks">
              <div className="title">
                #{index + 1} {user.name}
              </div>
            </div>
            <div className="question-content">
              <div className="avatar">
                <img alt="" src={user.avatarURL} width="100%" height="100%" />
              </div>

              <div>
                        <p className="leaderboard-text leaderboard-text-first">Score: {user.score}</p>
                        <p className="leaderboard-text">Questions asked: {Object.keys(user.questions).length}</p>
                        <p className="leaderboard-text">Questions answered: {Object.keys(user.answers).length}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser.id,
    users,
  };
}

export default connect(mapStateToProps)(withRouter(LeaderBoard));
