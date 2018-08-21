import { RECIEVE_QUESTIONS, ADD_QUESTION, VOTE_QUESTION } from '../actions/questions'

export default function questions(state = [], action) {
    const { question, loggedInUser, answer } = action
    switch (action.type) {
        case RECIEVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [question.id]: question
            }
        case VOTE_QUESTION:
            const retVal = {
                ...state,
                [question.id]: {
                    ...question,
                    [answer]: {
                        ...question[answer],
                        votes: question[answer].votes.concat([loggedInUser])
                    }
                }

            }
            return retVal
        default:
            return state
    }
}   