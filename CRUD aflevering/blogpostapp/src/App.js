import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import BlogList from "./components/BlogList";
import test from './components/tryupload';
import logo from "./logo.png";
import DeletePost from './components/DeletePost';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://reddit.com" target="_blank">
              <img src={logo} width="30" height="30" alt="hest" />
            </a>
            <Link to="/" className="navbar-brand">Blog App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Blog Posts</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Post</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={BlogList} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/delete/:id" component={DeletePost} />
          <Route path="/create" component={CreatePost} />
          <Route path="/test" component={test}/>
        </div>
      </Router>
    );
  }
}

export default App;