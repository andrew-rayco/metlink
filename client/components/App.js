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

function App (props) {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" component={ToTown} />
        <Route path="/going-home" component={GoingHome} />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
