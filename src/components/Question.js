import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";
import { handleAddVote } from "../actions/shared";

class Question extends React.Component {
  state = {
    selectedOption: "optionOne",
  };

  render() {
    const { question, users, mode, history, dispatch, authedUser } = this.props;

    if (!question) {
      return (
        <div className="question">
          <div className="user-asks">
            <div className="title">404 - Not found</div>
          </div>
          <div className="question-info">
            <div className="question-title">Question not found</div>
          </div>
        </div>
      );
    }

    const { author, optionOne, optionTwo } = question || {};
    const { selectedOption } = this.state;
    const user = users[author];

    const answered =
      authedUser &&
      users &&
      Object.keys(users[authedUser].answers).includes(question.id);
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;

    return (
      <div className="question">
        <div className="user-asks">
          <div className="title">{user.name} asks:</div>
        </div>
        <div className="question-content">
          <div className="avatar">
            <img alt="" src={user.avatarURL} width="100%" height="100%" />
          </div>

          <div className="question-info">
            <div className="question-title">Would You Rather ...</div>
            {mode === "display" ? (
              <div>
                {!answered && (
                  <div
                    onChange={(e) => {
                      this.setState({ selectedOption: e.target.value });
                    }}
                  >
                    <input
                      type="radio"
                      id="optionOne"
                      value="optionOne"
                      defaultChecked={this.state.selectedOption === "optionOne"}
                      name="answer"
                    />
                    <label htmlFor="optionOne" className="option">
                      {optionOne.text.substr(0, 1).toUpperCase()}
                      {optionOne.text.substr(1, optionOne.text.length)}
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="optionTwo"
                      value="optionTwo"
                      name="answer"
                      defaultChecked={this.state.selectedOption === "optionTwo"}
                    />
                    <label htmlFor="optionTwo" className="option">
                      {optionTwo.text.substr(0, 1).toUpperCase()}
                      {optionTwo.text.substr(1, optionTwo.text.length)}
                    </label>
                    <br />
                  </div>
                )}
                {answered && (
                  <div width="100%">
                    <div className="chart">
                      <div className="chart-title">
                        {optionOne.text.substr(0, 1).toUpperCase()}
                        {optionOne.text.substr(1, optionOne.text.length)}
                      </div>
                      <div id="option-1" className="results">
                        <div className="result-show">
                          <div
                            className="result-count"
                            style={{
                              width: `${
                                (optionOne.votes.length / totalVotes) * 100
                              }%`,
                            }}
                          >
                            <span className="vote">
                              {Math.round(
                                (optionOne.votes.length / totalVotes) * 100
                              )}
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="number-vote">
                        {optionOne.votes.length} out of {totalVotes} votes
                        {users &&
                          users[authedUser] &&
                          users[authedUser].answers &&
                          users[authedUser].answers[question.id] ===
                            "optionOne" && <p> (you selected this option)</p>}
                      </div>
                    </div>
                    <div className="chart">
                      <div className="chart-title">
                        {optionTwo.text.substr(0, 1).toUpperCase()}
                        {optionTwo.text.substr(1, optionOne.text.length)}
                      </div>
                      <div id="option-2" className="results">
                        <div className="result-show">
                          <div
                            className="result-count"
                            style={{
                              width: `${
                                (optionTwo.votes.length / totalVotes) * 100
                              }%`,
                            }}
                          >
                            <span className="vote">
                              {Math.round(
                                (optionTwo.votes.length / totalVotes) * 100
                              )}
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="number-vote">
                        {optionTwo.votes.length} out of {totalVotes} votes
                        {users &&
                          users[authedUser] &&
                          users[authedUser].answers &&
                          users[authedUser].answers[question.id] ===
                            "optionTwo" && <p> (you selected this option)</p>}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="option">...{optionOne.text.substr(0, 15)}...</div>
            )}
            {(mode === "preview" || !answered) && (
              <button
                className="btn"
                onClick={() => {
                  if (mode === "preview") {
                    history.push(`/question/${question.id}`);
                  } else if (mode === "display") {
                    // Handle answer action
                    dispatch(
                      handleAddVote(authedUser, question.id, selectedOption)
                    );
                  }
                }}
              >
                {mode === "preview" ? "View full" : "Submit"}
              </button>
            )}
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

export default connect(mapStateToProps)(withRouter(Question));
