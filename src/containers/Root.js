import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import {About, App, Welcome} from '../components'

const Root = React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='about' component={About} />
          <IndexRoute component={Welcome} />
        </Route>
      </Router>
    )
  }
})

export default Root