import React from 'react'
import { Link } from 'react-router-dom'

import * as api from '../api'
import * as fb from '../helpers/firebase-helpers'
import ShowTimes from './ShowTimes'
import Loading from './Loading'
import UserLinks from './UserLinks'

class GoingHome extends React.Component {
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
      let payload
      if (userData.loggedIn) {
        payload = {
          serviceId: userData.ServiceId,
          homeStop: userData.homeStop,
          townStop: userData.townStop
        }
      } else {
        payload = {
          serviceId: '14',
          homeStop: '4125',
          townStop: '5515'
        }
      }
      api.getData('to-home', payload, (toHomeData) => {
        this.setState({ data: toHomeData })
      })
    })
  }

  render() {
    return (
      <div className="to-home">
        <h2>Going Home</h2>
        <Link to="/"><button>Wait... I want to go into town</button></Link>
        <div>
          {this.state.data ? <ShowTimes data={this.state.data} /> : <Loading />}
        </div>
        <UserLinks />
      </div>
    )
  }
}

export default GoingHome
