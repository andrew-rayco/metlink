import React from 'react'
import { Link } from 'react-router-dom'

import * as fb from '../helpers/firebase-helpers'

const UserLinks = () => {
  return (
    <div>
      {isLoggedIn()
        ? <div className="user-links">
            <Link to="/edit">Manage stops</Link>
            <Link to="/login">Logout</Link>
          </div>
        : <div className="user-links">
            <Link to="/edit">Manage stops</Link>
          </div>
      }
    </div>
  )
}

function isLoggedIn(callback) {
  let user = firebase.auth().currentUser

  if (user) {
    console.log('user is logged in')
    return true
  } else {
    console.log('no user is logged in')
    return false
  }
}


export default UserLinks
