import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { handleVoteQuestion } from '../actions/common.js'
//import reducers here.

class Question extends Component {

    handleAnswerClick = (e) => {
        e.preventDefault()
        const { dispatch, question, loggedInUser, users } = this.props

        dispatch(handleVoteQuestion(question, users, loggedInUser, 'optionTwo'))
    }

    render() {
        return (
            <div className='question-panel'>
                <img src={`${this.props.postedBy.avatarURL}`} className="avatar" alt="avatar" />
                <div className='question-details'>
                    <span>Would you rather?</span>
                    <button
                        disabled={this.props.answered === 'true'}
                        className={`answer-button`}
                        onClick={this.handleAnswerClick}>
                        {this.props.question.optionOne.text}
                    </button>
                    <button
                        disabled={this.props.answered === 'true'}
                        className={`answer-button`} onClick={this.handleAnswerClick}>
                        {this.props.question.optionTwo.text}

                    </button>
                    <Link to={`/question/${this.props.id}`} className='question'>Go to Poll Result</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ loggedInUser, questions, users }, { id, answered }) {
    const question = questions[id]
    return {
        loggedInUser,
        question,
        users,
        postedBy: users[question.author],
        answered,
        id
    }
}

export default connect(mapStateToProps)(Question);