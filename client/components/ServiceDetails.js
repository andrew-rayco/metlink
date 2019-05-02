import React from 'react'
import TimeAgo from 'react-timeago'
import moment from 'moment'

import {
  findFollowingServices,
  convertTimeHoursMins,
  convertTimeSeconds
 } from '../helpers/helpers'

const ServiceDetails = (props) => {
  if (props.nextService) {
    let {
      ExpectedDeparture,
      DisplayDeparture,
      IsRealtime
     } = props.nextService

    if (!ExpectedDeparture) ExpectedDeparture = DisplayDeparture

    return (
      <div className="service-details">
        <h4>Last modified</h4>
        <p><TimeAgo date={props.date}/></p>

        <h4>Expected time</h4>
        <p data-test="expected-time">{convertTimeHoursMins(ExpectedDeparture)} and {convertTimeSeconds(ExpectedDeparture)} seconds{IsRealtime ? null : ' (sched)'}</p>

        <h4>Following services</h4>
        <p className="subtext">Scheduled service in grey. Realtime in black.</p>
        <ul data-test="following-content">
          {
            Object.keys(props.followingServices).length > 0
            ? findFollowingServices(props.followingServices)
            : 'None expected yet'
          }
        </ul>
      </div>

    )
  } else {
    return (
      <p data-test="no-data-error">Problem getting data. Try in a few moments</p>
    )
  }
}

export default ServiceDetails
