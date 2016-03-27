import React from 'react'
import Score from './Score'

const Welcome = React.createClass({
  render() {
    return (
      <div>
        <div>Welcome to the best</div>
        <Score />
        <Score />
        <Score />
      </div>
    )
  }
})

export default Welcome

