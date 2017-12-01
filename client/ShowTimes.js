import React from 'react'

function ShowTimes ({props}) {
  console.log(props)
  return (
    <div>
      <p><strong>Last Modified:</strong> {props.LastModified}</p>
      This is the ShowTimes component
    </div>
  )
}

export default ShowTimes
