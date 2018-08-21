import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions.js'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }
  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState(() => ({
      [name]: value
    }))
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))
    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true
    }))
  }
  render() {
    const { optionOne, optionTwo, toHome } = this.state
    if (toHome === true) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <h3 className='center'>Would You Rather?</h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <input type="text"
            placeholder="Option One"
            value={optionOne}
            onChange={this.handleChange}
            maxLength={100}
            className="inputOption"
            name="optionOne"
          />
          <input type="text"
            placeholder="Option Two"
            value={optionTwo}
            onChange={this.handleChange}
            maxLength={100}
            name="optionTwo"
            className="inputOption"
          />
          <button
            className='btn'
            type='submit'
            disabled={optionOne === '' || optionTwo === ''}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}
export default connect()(NewQuestion)