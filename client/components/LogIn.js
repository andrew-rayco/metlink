import React from 'react'

import UserLinks from './UserLinks'

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      email: '',
      loggedIn: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
    this.addRealtimeAuthListener()
  }

  handleChange(e) {
    let id = 'input' + e.target.id[0].toUpperCase() + e.target.id.slice(1)
    let value = e.target.value
    this.setState({[id]: value})
  }

  // Add a realtime listener
  addRealtimeAuthListener() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('from the realtime listener', user)
        this.setState({
          email: user.email,
          inputEmail: '',
          inputPassword: '',
          loggedIn: true })
      } else {
        console.log('from the realtime listener - not logged in')
      }
    })
  }

  handleLogIn() {
    // Get email and pass
    const email = this.state.inputEmail
    const pass = this.state.inputPassword
    const auth = firebase.auth()
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass)
    promise.catch(e => alert(e.message))
  }

  handleSignUp() {
    // Get email and pass
    // TODO: Check for real email
    const email = this.state.inputEmail
    const pass = this.state.inputPassword
    const auth = firebase.auth()
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass)
    promise
      .catch(e => alert(e.message))
  }

  handleLogOut() {
    this.setState({
      email: '',
      password: '',
      inputEmail: '',
      inputPassword: '',
      loggedIn: false
    })
    firebase.auth().signOut()
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Log in</h2>
        <form>
          <label htmlFor="email">
            <input id="email" type="email" placeholder="Email" value={this.state.inputEmail} onChange={this.handleChange}/>
          </label>
          <label htmlFor="password">
            <input id="password" type="text" placeholder="Password" value={this.state.inputPassword} onChange={this.handleChange}/>
          </label>
          {this.state.loggedIn
            ? null
            : <button onClick={this.handleLogIn}>Log in</button>
          }
          {this.state.loggedIn
            ? null
            : <button onClick={this.handleSignUp}>Sign Up</button>
          }
          {this.state.loggedIn
            ? <button onClick={this.handleLogOut}>Log out</button>
            : null
          }
        </form>
      </div>

    )
  }
}

export default LogIn
