import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setLoggedInUser } from '../actions/loggedInUser'

//import reducers here.

class AppLogin extends Component {

  login = (e) => {
    const { dispatch } = this.props
    e.preventDefault()
    dispatch(setLoggedInUser(e.target.value))
  }

  render() {
    return (
      this.props.loading === true
        ? null :
        <div>
          <h3>Who are you</h3>
          <select onChange={this.login}><option value=''></option>
            {
              this.props.users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))
            }
          </select>
        </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    loading: users ? false : true,
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(AppLogin);