import React from 'react'

import * as fb from '../helpers/firebase-helpers'

class EditStop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      homeStop: '15',
      townStop: '1111'
     }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    fb.isLoggedIn() ? null : this.props.history.push({
      pathname: '/login',
      state: {
        message: 'You need to be logged in to do that'
      }
    })
  }

  handleChange(e) {
    let id = e.target.id
    let value = e.target.value
    this.setState( { [id]: value } )
  }

  handleClick(e) {
    e.preventDefault()
    console.log(e.target.id)
    console.log(this.state[e.target.id])
  }

  render() {
    return (
      <form>
        <label htmlFor="homeStop">
          Home stop #
          <input id="homeStop" type="number" value={this.state.homeStop} onChange={this.handleChange}/>
          <input onClick={this.handleClick} type="submit" id="homeStop" value="Update" />
        </label>
        <label htmlFor="townStop">
          Town stop #
          <input id="townStop" type="number" value={this.state.townStop} onChange={this.handleChange}/>
          <input type="submit" id="townStop" value="Update" />
        </label>
      </form>
    )
  }
}

export default EditStop
