import React from 'react'
import Score from './Score'

const Welcome = React.createClass({
  render() {
    return (
      <div>
        Welcome to the best
        <Score />
        <Score />
        <Score />
      </div>
    )
  }
})

export default Welcome

