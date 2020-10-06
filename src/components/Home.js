import { connect } from "react-redux";
import React from "react";
import Question from "./Question";

class Home extends React.Component {
  state = {
    mode: "unanswered",
  };
  render() {
    const { questions, users, authedUser } = this.props;
    const { mode } = this.state;
    const answered = Object.keys(users[authedUser].answers || {});
    return (
      <div>
        <div className="question-filter">
          <div
            onClick={() => {
              this.setState({ mode: "unanswered" });
            }}
            className={mode === "unanswered" ? "active" : ""}
          >
            Unanswered
          </div>
          <div
            onClick={() => {
              this.setState({ mode: "answered" });
            }}
            className={mode === "answered" ? "active" : ""}
          >
            Answered
          </div>
        </div>
        <div>
          {Object.keys(questions)
            .map((questionId) => questions[questionId])
            .sort((a, b) => b.timestamp - a.timestamp)
            .filter((question) =>
              mode === "unanswered"
                ? !answered.includes(question.id)
                : answered.includes(question.id)
            )
            .map((question) => (
              <Question key={question.id} mode="preview" question={question} />
            ))}
        </div>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser: authedUser.id,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(Home);
