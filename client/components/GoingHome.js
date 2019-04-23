import React from 'react'
import { Link } from 'react-router-dom'

import * as api from '../api'
import * as fb from '../helpers/firebase-helpers'
import ShowTimes from './ShowTimes'
import Loading from './Loading'
import UserLinks from './UserLinks'

import { serviceId, homeStop, townStop } from '../config'

class GoingHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      homeStop: homeStop,
      townStop: townStop,
      userId: undefined,
      serviceId: serviceId
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
          serviceId: serviceId,
          homeStop: homeStop,
          townStop: townStop
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
