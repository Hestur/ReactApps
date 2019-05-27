import React, { Component } from 'react';
import './index.css';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import {BrowserRouter, Route} from 'react-router-dom';
import Travel from './Travel/Travel';
import Education from './Education/Education';
import Contact from './Contact/Contact';
import FeedbacksList from './Feedback/Feedback';



class App extends Component {
  render() {
    return (
      
      <div className="gridlayout">
        <BrowserRouter>
<AppHeader />
<Route exact path="/" component={Home}/>
<Route path="/shop" component={Shop}/>
<Route path="/travel" component={Travel}/>
<Route path="/education" component={Education}/>
<Route path="/feedback" component={FeedbacksList}/>
<Route path="/contact" component={Contact}/>
<AppFooter />
</BrowserRouter>
      </div>
    );
  }
}

export default App;
