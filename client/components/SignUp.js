import React from 'react'
import { Link } from 'react-router-dom'

import UserLinks from './UserLinks'
import * as fb from '../helpers/firebase-helpers'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    let id = e.target.id
    let value = e.target.value
    this.setState({[id]: value})
  }

  handleClick(e) {
    let email = this.state.email
    let password = this.state.password
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase.database().ref('/' + result.uid).set({
          homeStop: 4125,
          townStop: 5515
        })
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.')
        } else {
          alert(errorMessage)
        }
      })
  }

  isLoggedIn() {
    let userData
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        userData = {
          email: user.email
        }
        // ...
      } else {
        console.log('user is signed out')
        return false
        // User is signed out.
        // ...
      }
    })
    return userData
  }

  render() {
    console.log(this.isLoggedIn())
    return (
      <div>
        <h2>Sign up</h2>
        <form>
          <label htmlFor="email">
            Email
            <input id="email" type="email" value={this.state.email} onChange={this.handleChange}/>
          </label>
          <label htmlFor="password">
            Password
            <input id="password" type="text" value={this.state.password} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" onClick={this.handleClick}/>
        </form>
        <p>{this.isLoggedIn() ? 'user is logged in as ' + this.state.email : <Link to="/login">Log in</Link> }</p>
        <UserLinks />
      </div>

    )
  }
}

export default SignUp
