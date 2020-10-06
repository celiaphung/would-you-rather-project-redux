import { showLoading, hideLoading } from "react-redux-loading";

import { addQuestionVote, addQuestion, fetchData } from "../utils/api";
import { receiveQuestions, receiveQuestion } from "./questions";
import { receiveUsers } from "./users";

export function handleFetchData() {
    //redux-thunk pattern
    return (dispatch) => {
        dispatch(showLoading());
        return fetchData().then(({ users, questions }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading());
        })
    }
};

export function handleAddQuestion(authedUser, question) {
    return (dispatch) => {
        dispatch(showLoading());
        return addQuestion(authedUser, question).then((question) => {
            dispatch(receiveQuestion(question));
            dispatch(hideLoading());
        });
    };
}

export function handleAddVote(authedUser, qid, answer) {
    return (dispatch) => {
        dispatch(showLoading());
        return addQuestionVote(authedUser, qid, answer).then(() => {
            return fetchData().then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            })
        })
    }
}