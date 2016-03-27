import React from 'react'
import {Link} from 'react-router'


const App = React.createClass({
  render() {
    return (
      <div style={{fontFamily: '"Open Sans", serif', textAlign: 'center'}}>
        <h1>Musicate</h1>
        <div className='homelinks'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
})

export default App