import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import FooterCom from './components/FooterCom';
// import Post from './components/Post';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch> 
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/:post_id" component={Post} /> */}
          </Switch>
          <FooterCom>
          </FooterCom>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;