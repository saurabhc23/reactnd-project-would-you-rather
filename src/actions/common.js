import { getData } from '../utils/api'
import { recieveUsers, recordUserAnswer } from '../actions/users'
import { recieveQuestions, voteQuestion } from '../actions/questions'
import { _saveQuestionAnswer } from '../utils/_DATA'

export function handleDataFetch() {
    return (dispatch) => {
        return getData()
            .then(({ users, questions }) => {
                dispatch(recieveUsers(users))
                dispatch(recieveQuestions(questions))
            })
    }
}



export function handleVoteQuestion(question, users, loggedInUser, answer) {
    return (dispatch, getState) => {
        const { loggedInUser } = getState()

        return _saveQuestionAnswer({
            authedUser: loggedInUser,
            qid: question.id,
            answer
        })
            .then(
                dispatch(voteQuestion(question, loggedInUser, answer)),
                dispatch(recordUserAnswer(question, loggedInUser, answer))
            )

    }
}
