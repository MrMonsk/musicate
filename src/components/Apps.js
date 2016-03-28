import React from 'react'
import {Link} from 'react-router'
import Score from './Score'

const Apps = React.createClass({
  render() {
    return (
      <div>
        <Link to='/apps/analyzer'>Analyzer</Link>
        <Link to='/apps/chord-detector'>Chord Dectector</Link>
        <Score />
        <Score />
        <Score />
      </div>
    )
  }
})

export default Apps
