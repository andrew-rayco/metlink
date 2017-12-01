import React from 'react'
import TimeAgo from 'react-timeago'
import moment from 'moment'

function ShowTimes ({props}) {
  console.log(props)
  let stop = props.Stop
  let servicesArray = props.Services
  let expectedDeparture = servicesArray[0].ExpectedDeparture

  return (
    <div>
      <p>Leaving from: {stop.Name}</p>
      <p><strong>Last Modified:</strong> <TimeAgo date={props.LastModified} /></p>
      <p><strong>Expected time:</strong> {moment(servicesArray[0].ExpectedDeparture).format('h:mm a')} and {moment(servicesArray[0].ExpectedDeparture).format('ss')} seconds</p>
      <p className="expected">Expected: {servicesArray[0].ExpectedDeparture}</p>
    </div>
  )
}

function countDown(seconds) {
  let count = 0 - seconds
  let intervalId = setInterval(() => {
    count--
  }, 1000)
}

export default ShowTimes
