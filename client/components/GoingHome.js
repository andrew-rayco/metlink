import React from 'react'
import { Link } from 'react-router-dom'

function GoingHome (props) {
  return (
    <div className="going-home">
      <button><Link to="/">I'm going to town</Link></button>
      <h3>Going Home</h3>
    </div>
  )
}

export default GoingHome
