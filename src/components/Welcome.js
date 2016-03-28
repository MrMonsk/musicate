import React from 'react'
import {Link} from 'react-router'

const Welcome = React.createClass({
  render() {
    return (
      <div>
        <div>Musicate is a set of tools to simplify your music analyses</div>
        <Link to='/article/coldplay'>Coldplay stuff</Link>
      </div>
    )
  }
})

export default Welcome
