import React from 'react'

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    console.log(this.props.history)
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
        this.setState({ email: user.email })
        this.props.history.push('/')
        return true
        // ...
      } else {
        console.log('user is signed out')
        return false
        // User is signed out.
        // ...
      }
    })
  }

  handleChange(e) {
    let id = e.target.id
    let value = e.target.value
    this.setState({[id]: value})
  }

  handleClick(e) {
    console.log(this.state)
    let email = this.state.email
    let password = this.state.password
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      console.log(result)
    }).catch(function(error) {
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

  render() {
    return (
      <div>
        <h2>Log in</h2>
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
        <p>{this.state.email ? 'user is logged in as ' + this.state.email : 'Log in'}</p>
      </div>

    )
  }
}

export default LogIn
