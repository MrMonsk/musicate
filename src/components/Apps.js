import React from 'react'
import {Link} from 'react-router'
import Score from './Score'

export default class Apps extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/apps/analyzer'>Analyzer</Link>
          </li>
          <li>
            <Link to='/apps/chord-detector'>Chord Dectector</Link>
          </li>
        </ul>
        <Score />
        <Score />
        <Score />
      </div>
    )
  }
}
