import React from 'react'


const App = React.createClass({
  render() {
    return (
      <div style={{fontFamily: '"Open Sans", serif'}}>
        Musicate
        {this.props.children}
      </div>
    )
  }
})

export default App