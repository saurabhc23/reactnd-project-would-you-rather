import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './Header.js'
import NewQuestion from './NewQuestion.js'
import LeaderBoard from './LeaderBoard.js'
import Home from './Home.js'
import Nav from './Nav.js'
import { setLoggedInUser } from '../actions/loggedInUser'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuestionPollPage from './QuestionPollPage.js';

//import reducers here.
//        <UnansweredList/>
//<AnsweredList/>
// <LeaderBoard/>

class Main extends Component {

  logout = (e) => {
    const { dispatch } = this.props
    e.preventDefault()
    dispatch(setLoggedInUser(null))
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Nav />
          <Route path='/' exact component={Home} />
          <Route path='/leaderboard' component={LeaderBoard} />
          <Route path='/question/:id' component={QuestionPollPage} />
          <Route path='/new' component={NewQuestion} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ loggedInUser, users }) {
  console.log("User:" & { loggedInUser })
  return {
    user: users[loggedInUser]
  }
}

export default connect(mapStateToProps)(Main);