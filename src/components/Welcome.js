import React from 'react'
import {Link} from 'react-router'
import Score from './Score'

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div>Welcome to the best</div>
        <Link to='/article/coldplay'>Coldplay stuff</Link>
        <Score />
        <Score />
        <Score />
      </div>
    )
  }
}
