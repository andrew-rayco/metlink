import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom'

import Header from './Header'
import ToTown from './ToTown'
import GoingHome from './GoingHome'
import EditStop from './EditStop'
import LogIn from './LogIn'

function App (props) {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" component={ToTown} />
        <Route path="/going-home" component={GoingHome} />
        <Route path="/edit" component={EditStop} />
        <Route path="/login" component={LogIn} />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
