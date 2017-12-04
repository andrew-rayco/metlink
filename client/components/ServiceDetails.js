import React from 'react'
import TimeAgo from 'react-timeago'
import moment from 'moment'

const ServiceDetails = (props) => {
  return (
    <div className="service-details">
      <p><strong>Last modified: </strong>
        <TimeAgo date={props.date}/>
      </p>
      <p><strong>Expected time: </strong>
          {moment(props.nextService.ExpectedDeparture).format('h:mm a')} and  {moment(props.nextService.ExpectedDeparture).format('ss')} seconds</p>
      <p><strong>Following service: </strong> {props.followingService ? moment(props.followingService.ExpectedDeparture).format('h:mm a') : 'None expected yet'}</p>
    </div>
  )
}

export default ServiceDetails
