import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom'

import Header from './Header'
import Home from './Home'
import OtherPage from './OtherPage'

function App (props) {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/test" component={OtherPage} />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
