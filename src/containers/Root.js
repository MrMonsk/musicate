import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import {About, App, Article, Welcome, Contact} from '../components'

const Root = React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='about' component={About} />
          <Route path='apps' component={Welcome} />
          <Route path='contact' component={Contact} />
          <Route path='article/:id' component={Article} />
          <IndexRoute component={Welcome} />
        </Route>
      </Router>
    )
  }
})

export default Root
