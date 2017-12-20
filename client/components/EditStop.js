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

    let user = firebase.auth().currentUser

    if (user) {
      // check if there are currently stops for this user
      firebase.database().ref(user.uid).once('value')
        .then((data) => {
          console.log('data', data.val())
          let userData = data.val()
          this.setState({
            userId: user.uid,
            homeStop: userData.homeStop,
            townStop: userData.townStop,
            serviceId: userData.serviceId || '14'
          })
        })
        .catch((e) => {
          console.log(e.message)
        })
    }
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
        <Link to="/login">Login</Link>
      </form>
    )
  }
}

export default EditStop
