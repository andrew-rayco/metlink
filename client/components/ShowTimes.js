import React from 'react'
import TimeAgo from 'react-timeago'
import moment from 'moment'

function ShowTimes ({props}) {
  console.log(props)
  let stop = props.Stop
  let servicesArray = props.Services

  return (
    <div>
      <p>Leaving from: {stop.Name}</p>
      <p><strong>Last Modified:</strong> <TimeAgo date={props.LastModified} /></p>
      <p><strong>Expected time:</strong> {servicesArray[0].ExpectedDeparture}</p>
    </div>
  )
}

export default ShowTimes
