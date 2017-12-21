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
      this.setState({
        userId: userData.userId,
        homeStop: userData.homeStop,
        townStop: userData.townStop,
        serviceId: userData.serviceId || '14'
      })
    })
  }

  handleChange(e) {
    let name = e.target.name
    let value = e.target.value
    this.setState( { [name]: value } )
  }

  handleClick(e) {
    e.preventDefault()
    let postData = {
      [e.target.id]: this.state[e.target.id]
    }

    let updateDb = new Promise(firebase.database().ref(this.state.userId).update(postData))

    console.log(updateDb)
    updateDb.then((data) => {
      console.log('I cannot believe that worked!', data);
    })
  }

  render() {
    return (
      <form>
        <label htmlFor="homeStop">
          Home stop #
          <input name="homeStop" type="number" value={this.state.homeStop} onChange={this.handleChange} />
        </label>
        <button onClick={this.handleClick} id="homeStop">Update Home Stop</button>
        <label htmlFor="townStop">
          Town stop #
          <input name="townStop" type="number" value={this.state.townStop} onChange={this.handleChange}/>
        </label>
        <button onClick={this.handleClick} id="townStop">Update Town Stop</button>
        <Link to="/login">Login</Link>
      </form>
    )
  }
}

export default EditStop
