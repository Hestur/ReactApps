import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Vis from "./components/Vis";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import BlogList from "./components/BlogList";
import DeletePost from "./components/DeletePost";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://reddit.com"></a>
            <Link to="/" className="navbar-brand">
              Heste App
            </Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Blog Posts
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Post
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          

          <Route path="/" exact component={BlogList} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/delete/:id" component={DeletePost} />
          <Route path="/create" component={CreatePost} />
          <Route path="/vis/:id" component={Vis} />
          <footer>
            <div id="footer" className="bg-light">
              <p style={{ padding: 20, lineHeight: 2 }}>Velkommen til HesteBloggen
              <br/>Her snakker vi KUN om heste</p>
            </div>
          </footer>
        </Router>
      </div>
    );
  }
}

export default App;
