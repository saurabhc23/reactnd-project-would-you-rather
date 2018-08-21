import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { handleDataFetch } from '../actions/common'
import Main from './Main.js'
import AppLogin from './AppLogin.js'

//import reducers here.

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleDataFetch())
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Would You Rather?</h1>
        </header>
        {this.props.loggedIn !== true
          ? <AppLogin />
          : <Main />
        }
      </div>
    );
  }
}

function mapStateToProps({ loggedInUser }) {
  return {
    loggedIn: loggedInUser != null
  }
}

export default connect(mapStateToProps)(App);
