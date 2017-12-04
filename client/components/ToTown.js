import React from 'react'
import { Link } from 'react-router-dom'

import * as api from '../api'
import ShowTimes from './ShowTimes'

class ToTown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentWillMount() {
    api.getData('to-town', (toTownData) => {
      this.setState({ data: toTownData })
    })
  }

  render() {
    return (
      <div className="to-town">
        <h2>Going to Town</h2>
        <Link to="/going-home"><button>Wait... I want to go home</button></Link>
        <div>
          {this.state.data ? <ShowTimes data={this.state.data} /> : 'loading...'}
        </div>
      </div>
    )
  }
}

export default ToTown
