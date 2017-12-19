import React from 'react'
import { Link } from 'react-router-dom'

const UserLinks = () => {
  return (
    <div className="user-links">
      <Link to="/edit">Manage stops</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
      {/* {isLoggedIn() ? 'someone is logged in' : 'no user logged in'} */}
    </div>
  )
}

// function isLoggedIn() {
//   let userData
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       console.log('UserLinks component', user.email)
//       userData = user
//     } else {
//       console.log('UserLinks component - No user logged in')
//     }
//     return userData
//   })
//   return userData
// }


export default UserLinks
