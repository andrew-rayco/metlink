import React from 'react'
import { Link } from 'react-router-dom'

import * as fb from '../helpers/firebase-helpers'

const UserLinks = () => {
  return (
    <div>
      {fb.isLoggedIn()
        ? <div className="user-links">
            <Link to="/edit">Manage stops</Link>
            <Link to="/login">Logout</Link>
          </div>
        : <div className="user-links">
            <Link to="/edit">Manage stops</Link>
          </div>}
    </div>
  )
}


export default UserLinks
