import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

import * as api from '../api'
import ShowTimes from './ShowTimes'

class GoingHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentWillMount() {
    api.getData('to-home', (toTownData) => {
      this.setState({ data: toTownData })
    })
  }

  render() {
    return (
      <div className="to-town">
        <button><Link to="/test">I'm going into town</Link></button>
        <h3>Going Home</h3>
        {this.state.data ? <ShowTimes data={this.state.data} /> : 'loading...'}
      </div>
    )
  }
}

export default GoingHome
