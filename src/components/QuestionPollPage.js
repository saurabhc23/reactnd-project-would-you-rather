import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

//import reducers here.

class QuestionPollPage extends Component {

    render() {
        if (this.props.pageNotFound) {
            return (<div>
                Page Not Found!!
         </div>
            );
        } else {
            return (
                <div className='question'>
                    <img src={`${this.props.postedBy.avatarURL}`} className="avatar" alt="avatar" />
                    <div className='question-details'>
                        <div className='answer'>

                            <div> {this.props.optionOne} : {this.props.optionOneCount} out of {this.props.totalUsers}
                                ({Math.round((this.props.optionOneCount / this.props.totalUsers) * 100)}%)</div>
                            {
                                this.props.loggedInUserVote === 'optionOne' ? <p>Your Vote</p> : null
                            }
                        </div>
                        <div className='answer'>
                            <div> {this.props.optionTwo} : {this.props.optionTwoCount} out of {this.props.totalUsers}
                                ({Math.round((this.props.optionTwoCount / this.props.totalUsers) * 100)}%)</div>
                            {
                                this.props.loggedInUserVote === 'optionTwo' ? <p>Your Vote</p> : null
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps({ loggedInUser, questions, users }, props) {
    const { id } = props.match.params
    const question = questions[id]
    if (!question) {
        return {
            pageNotFound: true
        }
    }
    const user = users[loggedInUser]
    return {
        optionOne: question.optionOne.text,
        optionOneCount: question.optionOne.votes.length,
        optionTwo: question.optionTwo.text,
        optionTwoCount: question.optionTwo.votes.length,
        postedBy: users[question.author],
        totalUsers: Object.keys(users).length,
        loggedInUserVote: user.answers[id]
    }
}

export default connect(mapStateToProps)(QuestionPollPage);