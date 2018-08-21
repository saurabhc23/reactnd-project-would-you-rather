import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';


//import reducers here.

class LeaderBoard extends Component {

    render() {
        console.log(this.props.userList);
        return (
            <div>
                <h3 className='center'>Leadership Board</h3>
                <ul className='answer-list'>
                    {this.props.userList.map((user) => (
                        <li key={user.id}>
                            <div className='poll'>
                                <img src={`${user.avatarURL}`} className="avatar" alt="avatar" />
                                <span>{user.name}</span>
                                <div className='poll-details'>
                                    <div

                                        className={`poll-count`}>
                                        Answered: {Object.keys(user.answers).length}
                                    </div>
                                    <div

                                        className={`poll-count`}>
                                        Asked: {user.questions.length}
                                    </div>

                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ loggedInUser, users }) {
    return {
        userList: Object.values(users)
            .sort((a, b) => (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length))
    }
}

export default connect(mapStateToProps)(LeaderBoard);