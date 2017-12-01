import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

class ToTown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentWillMount() {
    request
      .get('http://ergast.com/api/f1/drivers.json')
      .end((err, result) => {
        if (err) {
          result.send('oh no! Error:', err)
        } else {
          this.setState({ data: result.body.MRData.DriverTable })
        }
      })

  }

  render() {
    return (
      <div className="to-town">
        <button><Link to="/test">I'm going home</Link></button>
        <h3>Going to Town</h3>
        <p>{this.state.data ? this.state.data.Drivers[0].familyName : 'loading...'}</p>
      </div>
    )
  }
}

export default ToTown
