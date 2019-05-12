import React from 'react'
import { Link } from 'react-router-dom'

import * as api from '../api'
import * as fb from '../helpers/firebase-helpers'
import ShowTimes from './ShowTimes'
import Loading from './Loading'
import UserLinks from './UserLinks'
import Refresh from './Refresh'

import { serviceId, homeStop, townStop } from '../config'

class ToTown extends React.Component {
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
    fb.getUserData(data => this.getAndSetData(data))

  }

  getAndSetData(userData) {
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
      api.getData('to-town', payload, (toTownData) => {
        this.setState({ data: toTownData })
      })
    }


  render() {
    return (
      <div className="to-town">
        <h2>Going to Town</h2>
        <Link to="/going-home"><button>Wait... I want to go home</button></Link>
        <Refresh fetchData={this.componentWillMount.bind(this)}/>
        <div>
          {this.state.data
              ? <ShowTimes data={this.state.data} />
              : <Loading />
          }
        </div>
        <UserLinks />
      </div>
    )
  }
}

export default ToTown
