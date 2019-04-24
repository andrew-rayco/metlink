import React from 'react'

import CountDown from './CountDown'
import ServiceDetails from './ServiceDetails'

import { serviceId } from '../config'

class ShowTimes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {},
      seconds: props.data.Services[0] ? props.data.Services[0].DisplayDepartureSeconds : 9999
    }
    this.timer = 0
    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60))

    let divisor_for_minutes = secs % (60 * 60)
    let minutes = Math.floor(divisor_for_minutes / 60)

    let divisor_for_seconds = divisor_for_minutes % 60
    let seconds = Math.ceil(divisor_for_seconds)

    let obj = {
      'h': hours,
      'm': minutes,
      's': seconds
    }
    return obj
  }

  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000)
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1

    // ref is used to avoid React error: 'Can only update a mounted or mounting component'
    if (this.refs.myRef) {
      this.setState({time: this.secondsToTime(seconds), seconds: seconds})
    }

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer)
    }
  }

  findFollowingService(services) {
    // if no following realtime services on selected route, display scheduled services (if any)
    const thisRoute = services.filter(service => service.ServiceID === serviceId)
    if (thisRoute.length < 1) return {}
    if (thisRoute[0].IsRealtime === false && thisRoute.length > 1) {
      return thisRoute[1]
    }
    return thisRoute[0]
  }

  render() {
    let stop = this.props.data.Stop
    let servicesArray = this.props.data.Services
    let realTimeServices = servicesArray.filter(service => service.IsRealtime === true && service.ServiceID === serviceId)
    const followingService = this.findFollowingService(servicesArray)
    return (
      // ref is used to avoid React error: 'Can only update a mounted or mounting component'
      <div ref="myRef">
        {this.startTimer()}
        <div className="service-details departure-point">
          <h4>Leaving from</h4>
          <p>{stop.Name}</p>
        </div>
        <CountDown min={this.state.time.m} sec={this.state.time.s} />
        <ServiceDetails
          date={this.props.data.LastModified}
          nextService={realTimeServices[0]}
          followingService={followingService}
        />
      </div>
    )
  }
}

export default ShowTimes
