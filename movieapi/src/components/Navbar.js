import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper green darken-2">
        <div className="container">

        <ul className="left">
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
        <a href="/" className="brand-logo">FilmAPI</a>

        </div>
      </nav>

        
     
    )
  }
}

