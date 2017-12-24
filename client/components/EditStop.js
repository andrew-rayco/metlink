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
    fb.getUserData((userData) => {
      if (userData.loggedIn) {
        this.setState({
          userId: userData.userId,
          homeStop: userData.homeStop,
          townStop: userData.townStop,
          serviceId: userData.serviceId || '14'
        })
      } else {
        //  Redirect to login page if user not logged in.
        this.props.history.push({
          pathname: '/login',
          state: {
            message: 'You need to be logged in to do that'
          }
        })
      }
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

    firebase.database().ref(this.state.userId).update(postData)
      .then(() => {
        console.log('data saved successfully')
        this.setState({ message: 'Successfully updated' })
      })
      .catch((e) => {
        console.log('data could not be saved.', e)
      })
  }

  displayMessage() {
    setTimeout(() => {
      this.setState({ message: '' })
    }, 3000)
  }

  render() {
    return (
      <form>
        <div className="message">
          {this.state.message
            ? <p className="danger">{this.state.message}{this.displayMessage()}</p>
            : null}
        </div>
        <label>Home stop #
          <input name="homeStop" type="number" value={this.state.homeStop} onChange={this.handleChange} />
          <button onClick={this.handleClick} id="homeStop">Update Home Stop</button>
        </label>

        <label>Town stop #
          <input name="townStop" type="number" value={this.state.townStop} onChange={this.handleChange}/>
          <button onClick={this.handleClick} id="townStop">Update Town Stop</button>
        </label>

        <Link to="/login">Login</Link>
      </form>
    )
  }
}

export default EditStop
