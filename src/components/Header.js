import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setLoggedInUser } from '../actions/loggedInUser'

class Header extends Component {

  logout = (e) => {
    const { dispatch } = this.props
    e.preventDefault()
    dispatch(setLoggedInUser(null))
  }

  render() {
    return (
      <div className="User-header">
        <img src={`${this.props.user.avatarURL}`} className="avatar" alt="avatar" />
        <h1 className="App-title">Welcome {this.props.user.name}</h1>
        <a href='#' onClick={this.logout}>Logout</a>
      </div>
    );
  }
}

function mapStateToProps({ loggedInUser, users }) {
  return {
    user: users[loggedInUser]
  }
}

export default connect(mapStateToProps)(Header);