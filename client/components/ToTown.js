import React from 'react'
import { Link } from 'react-router-dom'

import * as api from '../api'
import * as fb from '../helpers/firebase-helpers'
import ShowTimes from './ShowTimes'
import Loading from './Loading'

class ToTown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      homeStop: "4125",
      townStop: "5515",
      userId: undefined,
      serviceId: "14"
    }
  }

  componentWillMount() {
    fb.getUserData((userData) => {
      let payload = {
        serviceId: userData.ServiceId,
        homeStop: userData.homeStop,
        townStop: userData.townStop
      }
      api.getData('to-town', payload, (toTownData) => {
        this.setState({ data: toTownData })
      })
    })

  }

  render() {
    console.log(this.state);
    return (
      <div className="to-town">
        <h2>Going to Town</h2>
        <Link to="/going-home"><button>Wait... I want to go home</button></Link>
        <div>
          {this.state.data ? <ShowTimes data={this.state.data} /> : <Loading />}
        </div>
      </div>
    )
  }
}

export default ToTown
