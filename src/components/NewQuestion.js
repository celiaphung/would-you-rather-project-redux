import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";
import { handleAddQuestion } from "../actions/shared";

class NewQuestion extends React.Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };

  render() {
    const { users, mode, history, dispatch, authedUser } = this.props;

    const user = users[authedUser];

    return (
      <div className="question">
        <div className="user-asks">
          <div className="title">Create new question</div>
        </div>
        <div className="question-content">
          <div className="avatar">
            <img alt="" src={user.avatarURL} width="100%" height="100%" />
          </div>

          <div className="question-info">
            <div className="question-title">Would You Rather ...</div>
            <div>
              <input
                className="optionInput"
                type="text"
                name="optionOne"
                value={this.state.optionOneText}
                onChange={(e) => {
                  this.setState({ optionOneText: e.target.value });
                }}
              ></input>
              <br />
              or
              <br />
              <input
                className="optionInput"
                type="text"
                name="optionTwo"
                value={this.state.optionTwoText}
                onChange={(e) => {
                  this.setState({ optionTwoText: e.target.value });
                }}
              ></input>
            </div>
            <button
              className="btn"
              onClick={() => {
                  dispatch(handleAddQuestion(authedUser, this.state)).then(() => {
                      history.replace('/');
                });
              }}
            >
              {mode === "preview" ? "View full" : "Submit"}
            </button>
          </div>
        </div>
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

export default connect(mapStateToProps)(withRouter(NewQuestion));
