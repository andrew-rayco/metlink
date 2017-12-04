import React from 'react'
import TimeAgo from 'react-timeago'
import moment from 'moment'

const ServiceDetails = (props) => {
  return (
    <div className="service-details">
      <h4>Last modified</h4>
      <p><TimeAgo date={props.date}/></p>

      <h4>Expected time</h4>
      <p>{moment(props.nextService.ExpectedDeparture).format('h:mm a')} and  {moment(props.nextService.ExpectedDeparture).format('ss')} seconds</p>

      <h4>Following service</h4>
      <p>{props.followingService ? moment(props.followingService.ExpectedDeparture).format('h:mm a') :
      'None expected yet'}</p>
    </div>
  )
}

export default ServiceDetails
