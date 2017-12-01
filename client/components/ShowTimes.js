import React from 'react'
import TimeAgo from 'react-timeago'
import moment from 'moment'

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

  componentDidMount() {
    console.log(this.props.data.Services[0].DisplayDepartureSeconds)
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
        <p><strong>Leaving from: </strong> {stop.Name}</p>
        <p>
          <strong>Last Modified: </strong>
          <TimeAgo date={this.props.data.LastModified}/></p>
        <p>
          <strong>Expected time: </strong>
          {moment(servicesArray[0].ExpectedDeparture).format('h:mm a')} and  {moment(servicesArray[0].ExpectedDeparture).format('ss')} seconds</p>
        <p className="expected">Expected in: {this.state.time.m} m and {this.state.time.s} seconds</p>
        <p><strong>Next service: </strong> {moment(servicesArray[1].ExpectedDeparture).format('h:mm a')}</p>
      </div>
    )
  }
}

// function countDown(seconds) {
//   let count = 0 - seconds
//   let intervalId = setInterval(() => {
//     count--
//   }, 1000)
// }

export default ShowTimes
