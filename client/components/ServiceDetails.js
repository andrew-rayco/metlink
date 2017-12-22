import React from 'react'
import TimeAgo from 'react-timeago'
import moment from 'moment'

import UserLinks from './UserLinks'

const ServiceDetails = (props) => {
  if (props.nextService) {
    if (!props.nextService.ExpectedDeparture) {
      // console.log(props.nextService)
      props.nextService.ExpectedDeparture = props.nextService.DisplayDeparture
    }
    return (
      <div className="service-details">
        <h4>Last modified</h4>
        <p><TimeAgo date={props.date}/></p>

        <h4>Expected time</h4>
        <p>{moment(props.nextService.ExpectedDeparture).format('h:mm a')} and {moment(props.nextService.ExpectedDeparture).format('ss')} seconds</p>

        <h4>Following service</h4>
        <p>{props.followingService
            ? moment(props.followingService.ExpectedDeparture).format('h:mm a')
            : 'None expected yet'}</p>
        <UserLinks />
      </div>

    )
  } else {
    return (
      <p>Problem getting data. Try in a few moments</p>
    )
  }
}

export default ServiceDetails
