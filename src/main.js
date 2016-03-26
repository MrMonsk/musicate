import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

import Root from './containers/Root'

document.title = 'Project'


ReactDOM.render(<Root />, document.getElementById('root'))
