import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Question from './Question.js'

//import reducers here.

class UnansweredList extends Component {

    render() {
        return (
            <div>
                <h3 className='center'>Unanswered Questions</h3>
                <ul className='answer-list'>
                    {this.props.unansweredQuestions.map((question) => (
                        <li key={question}>
                            <Question id={question} answered='false' />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ loggedInUser, questions }) {
    return {
        unansweredQuestions: Object.values(questions)
            .filter((q) => !q.optionOne.votes.includes(loggedInUser) && !q.optionTwo.votes.includes(loggedInUser))
            .sort((a, b) => b.timestamp - a.timestamp)
            .map(p => p.id)
    }
}

export default connect(mapStateToProps)(UnansweredList);