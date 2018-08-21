import React, { Component, Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setLoggedInUser } from '../actions/loggedInUser'
import AnsweredList from './AnsweredList.js'
import UnansweredList from './UnansweredList.js'

class Header extends Component {

  state = {
    show: 'answered'
  }

  handleClick = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState(() => ({
      show: name
    }))
  }

  render() {
    return (
      <Fragment>
        <div className='center'>
          <nav className='nav'>
            <ul>
              <li>
                <a href="#" name='answered' className='active' onClick={this.handleClick}>
                  Answered
                  </a>
              </li>
              <li>
                <a href='#' name='unanswered' className='active' onClick={this.handleClick}>
                  Unanswered
                  </a>
              </li>
            </ul>
          </nav>
        </div>
        {this.state.show === 'answered' ? <AnsweredList /> : <UnansweredList />}

      </Fragment>
    );
  }
}

function mapStateToProps({ loggedInUser, users }) {
  return {
    user: users[loggedInUser]
  }
}

export default connect(mapStateToProps)(Header);