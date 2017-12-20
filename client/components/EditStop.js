import React from 'react'
import { Link } from 'react-router-dom'

import * as fb from '../helpers/firebase-helpers'

class EditStop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      homeStop: '',
      townStop: ''
     }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    // fb.isLoggedIn((data) => {
    //   console.log('callback agogo', data)
    // })

    //  Redirect to login page if user not logged in.
    // fb.isLoggedIn()
    //   ? null
    //   : this.props.history.push({
    //     pathname: '/login',
    //     state: {
    //       message: 'You need to be logged in to do that'
    //     }
    //   })

    fb.getUserData((userData) => {
      console.log(userData)
      this.setState({
        userId: userData.uid,
        homeStop: userData.homeStop,
        townStop: userData.townStop,
        serviceId: userData.serviceId || '14'
      })
    })
  }

  handleChange(e) {
    let id = e.target.id
    let value = e.target.value
    this.setState( { [id]: value } )
  }

  handleClick(e) {
    // e.preventDefault()
    // console.log(e.target.id)
    // console.log(this.state[e.target.id])
    let postData = {
      [e.target.id]: this.state[e.target.id]
    }

    firebase.database().ref(this.state.userId).update(postData)
  }

  render() {
    console.log(this.state)
    return (
      <form>
        <label htmlFor="homeStop">
          Home stop #
          <input id="homeStop" type="number" value={this.state.homeStop} onChange={this.handleChange}/>
        </label>
        <button onClick={this.handleClick} id="homeStop">Update Home Stop</button>
        <label htmlFor="townStop">
          Town stop #
          <input id="townStop" type="number" value={this.state.townStop} onChange={this.handleChange}/>
        </label>
        <button onClick={this.handleClick} id="townStop">Update Town Stop</button>
        <Link to="/login">Login</Link>
      </form>
    )
  }
}

export default EditStop
