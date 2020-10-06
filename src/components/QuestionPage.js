import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";

import Question from "./Question";

class QuestionPage extends React.Component {
  render() {
    const { question } = this.props;
    return <Question question={question} mode="display" />;
  }
}

function mapStateToProps({ authedUser, questions }, props) {
    const { id } = props.match.params;
  const question = questions[id];
  return {
    authedUser: authedUser.id,
    question,
  };
}

export default connect(mapStateToProps)(withRouter(QuestionPage));
