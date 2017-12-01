import React from 'react'

function ShowTimes ({props}) {
  console.log(props)
  let stop = props.Stop
  let servicesArray = props.Services

  return (
    <div>
      <p>Leaving from: {stop.Name}</p>
      <p><strong>Last Modified:</strong> {props.LastModified}</p>
    </div>
  )
}

export default ShowTimes
