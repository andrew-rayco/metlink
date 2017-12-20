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
      data: null
    }
  }

  componentWillMount() {
    fb.getUserData((userData) => {
      console.log('userData', userData)
      api.getData('to-town', (toTownData) => {
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
