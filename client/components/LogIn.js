import React from 'react'

import UserLinks from './UserLinks'

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      email: '',
      loggedIn: false,
      message: ''
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
    promise.catch(e => this.setState({ message: e.message }))
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
      .catch(e => this.setState({ message: e.message }))
  }

  handleLogOut() {
    this.setState({
      email: '',
      password: '',
      inputEmail: '',
      inputPassword: '',
      message: '',
      loggedIn: false
    })
    firebase.auth().signOut()
  }


  render() {
    return (
      <div className="user">
        <h2>Log in</h2>

        {/* Show message if exists */}
        {this.state.message
          ? <p className="danger">{this.state.message}</p>
          : null}

        {/* If logged in show only logged in message and logout button */}
        {this.state.loggedIn
          ? <div>
              <p>Currently logged in as {this.state.email}</p>
              <button onClick={this.handleLogOut}>Log out</button>
            </div>
          : null}

        {/* Only show form if not logged in */}
        {this.state.loggedIn
          ? null
          : <form>
              <label htmlFor="email">
                <input id="email" type="email" placeholder="Email" value={this.state.inputEmail} onChange={this.handleChange}/>
              </label>
              <label htmlFor="password">
                <input id="password" type="text" placeholder="Password" value={this.state.inputPassword} onChange={this.handleChange}/>
              </label>
            </form>
          }

        {/* Only show login and signup buttons if not logged in */}
        {this.state.loggedIn
          ? null
          : <div className="login-buttons">
              <button className="opposite-button" onClick={this.handleSignUp}>Sign Up</button>
              <button onClick={this.handleLogIn}>Log in</button>
            </div>
        }

      </div>

    )
  }
}

export default LogIn