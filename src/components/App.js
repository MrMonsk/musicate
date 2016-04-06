import React from 'react'
import {Link} from 'react-router'


export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <nav>
          <div className='logo'>
            <Link to='/'>Musicate</Link>
          </div>
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
}
