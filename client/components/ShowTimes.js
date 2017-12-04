import React from 'react'

import CountDown from './CountDown'
import ServiceDetails from './ServiceDetails'

class ShowTimes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {},
      seconds: props.data.Services[0].DisplayDepartureSeconds
    }
    this.timer = 0
    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({time: this.secondsToTime(seconds), seconds: seconds});

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    let stop = this.props.data.Stop
    let servicesArray = this.props.data.Services
    let expectedDeparture = servicesArray[0].ExpectedDeparture
    return (
      <div>
        {this.startTimer()}
        <div className="service-details departure-point">
          <p><strong>Leaving from: </strong> {stop.Name}</p>
        </div>
        <CountDown min={this.state.time.m} sec={this.state.time.s} />
        <ServiceDetails
          date={this.props.data.LastModified}
          nextService={servicesArray[0]}
          followingService={servicesArray[1]}
        />
      </div>
    )
  }
}

export default ShowTimes
