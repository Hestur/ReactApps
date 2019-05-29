import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Create from "./components/Create";
import Edit from "./components/Edit";
import List from "./components/List";
 import Delete from './components/Delete';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://reddit.com" target="_blank">
            </a>
            <Link to="/" className="navbar-brand">Produkt App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Produkter</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Produkt</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={List}/>
          <Route path="/edit/:id" component={Edit} />
          <Route path="/delete/:id" component={Delete} /> 
          <Route path="/create" component={Create} />
        </div>
      </Router>
    );
  }
}

export default App;