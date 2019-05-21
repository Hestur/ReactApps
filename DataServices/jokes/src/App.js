import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateJoke from './components/CreateJoke';
import EditJoke from './components/EditJoke';
import JokeList from './components/JokeList'; 
import logo from "./logo.png";
import DateJoke from './components/DateJoke';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://reddit.com" target="_blank">
              <img src={logo} width="30" height="30" alt="hest" />
            </a>
            <Link to="/" className="navbar-brand">Joke App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Jokes</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Joke</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={JokeList} />
          <Route path="/edit/:id" component={EditJoke} />
          <Route path="/create" component={CreateJoke} />
          <Route path="/date" component={DateJoke} />
        </div>
      </Router>
    );
  }
}

export default App;