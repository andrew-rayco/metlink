import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

import ShowTimes from './ShowTimes'

class ToTown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentWillMount() {
    request
      .get('/test')
      .end((err, result) => {
        if (err) {
          result.send('oh no! Error:', err)
        } else {
          this.setState({ data: result.body })
        }
      })
  }

  render() {
    return (
      <div className="to-town">
        <button><Link to="/test">I'm going home</Link></button>
        <h3>Going to Town</h3>
        {this.state.data ? <ShowTimes props={this.state.data} /> : 'loading...'}
      </div>
    )
  }
}

export default ToTown
