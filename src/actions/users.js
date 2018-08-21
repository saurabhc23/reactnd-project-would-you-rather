export const RECIEVE_USERS = 'RECIEVE_USERS'
export const VOTE_QUESTION = 'VOTE_QUESTION'


export function recieveUsers(users) {
    return {
        type: RECIEVE_USERS,
        users,
    }
}

export function recordUserAnswer(question, loggedInUser, answer) {
    return {
        type: VOTE_QUESTION,
        question,
        loggedInUser,
        answer
    }
}