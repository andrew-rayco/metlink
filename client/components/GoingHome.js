import React from 'react'
import { Link } from 'react-router-dom'

import * as api from '../api'
import ShowTimes from './ShowTimes'
import Loading from './Loading'

class GoingHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentWillMount() {
    api.getData('to-home', (toTownData) => {
      let allServices = toTownData.Services
      let onlyMyServices = allServices.filter((service) => {
        return service.ServiceID == "14"
      })
      toTownData.Services = onlyMyServices
      this.setState({ data: toTownData })
    })
  }

  render() {
    return (
      <div className="to-town">
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
