import React from 'react'

const App = React.createClass({
  render() {
    return (
      <div style={{fontFamily: '"Helvetica Neue", serif'}}>
        Hello?
        It's me.ds
        {this.props.children}
      </div>
    )
  }
})

export default App