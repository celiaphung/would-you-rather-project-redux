import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "../_DATA";

export function fetchData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function addQuestion(authedUser, question) {
  question.author = authedUser;
  return _saveQuestion(question);
}

export function addQuestionVote(authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}
