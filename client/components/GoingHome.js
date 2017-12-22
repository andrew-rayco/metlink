import React from 'react'
import { Link } from 'react-router-dom'

import * as api from '../api'
import * as fb from '../helpers/firebase-helpers'
import ShowTimes from './ShowTimes'
import Loading from './Loading'

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
      let payload = {
        serviceId: userData.ServiceId,
        homeStop: userData.homeStop,
        townStop: userData.townStop
      }
      api.getData('to-home', payload, (toHomeData) => {
        this.setState({ data: toHomeData })
      })
    })

    // api.getData('to-home', (toHomeData) => {
    //   let allServices = toHomeData.Services
    //   let onlyMyServices = allServices.filter((service) => {
    //     return service.ServiceID == "14"
    //   })
    //   toHomeData.Services = onlyMyServices
    //   this.setState({ data: toHomeData })
    // })
  }

  render() {
    return (
      <div className="to-home">
        <h2>Going Home</h2>
        <Link to="/"><button>Wait... I want to go into town</button></Link>
        <div>
          {this.state.data ? <ShowTimes data={this.state.data} /> : <Loading />}
        </div>
      </div>
    )
  }
}

export default GoingHome
