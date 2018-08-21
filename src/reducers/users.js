import { RECIEVE_USERS, VOTE_QUESTION } from '../actions/users'

export default function users(state = [], action) {
    switch (action.type) {
        case RECIEVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case VOTE_QUESTION:
            const { question, users, loggedInUser, answer } = action
            const retVal = {
                ...state,
                [loggedInUser]: {
                    ...state[loggedInUser],
                    answers: {
                        ...state[loggedInUser].answers,
                        [question.id]: answer
                    }
                }

            }
            return retVal
        default:
            return state
    }
}   