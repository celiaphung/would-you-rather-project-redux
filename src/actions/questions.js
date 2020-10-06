export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
export const VOTE = 'VOTE'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_VOTE = 'ADD_VOTE';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function receiveQuestion(question) {
    return {
        type: RECEIVE_QUESTION,
        question
    }
}
export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function addVote(question, userId) {
    return {
        type: ADD_VOTE,
        userId,
        question,
    }
}