import React from 'react'
import {Link} from 'react-router'


const App = React.createClass({
  render() {
    return (
      <div className='container'>
        <nav>
          <div className='logo'>Musicate</div>
          <div className='homelinks'>
            <Link to='/'>Home</Link>
            <Link to='/article/coldplay'>Articles</Link>
            <Link to='/apps'>Apps</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
})

export default App
