import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const VOTE_QUESTION = 'VOTE_QUESTION'

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { loggedInUser } = getState()

        return _saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: loggedInUser
        })
            .then((question) => dispatch(addQuestion(question)))
    }
}


export function voteQuestion(question, loggedInUser, answer) {
    return {
        type: VOTE_QUESTION,
        question,
        loggedInUser,
        answer
    }
}


export function recieveQuestions(questions) {
    return {
        type: RECIEVE_QUESTIONS,
        questions,
    }
}