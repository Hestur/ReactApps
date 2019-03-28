import React, { Component } from 'react';
import './index.js';
import AppFooter from './AppFooter.js';
import Elever from './Elever.js';





class App extends Component {
  
  state = {
    elever: [
      { name: 'Martin', age: 44, color: 'black',img: 'img/martin.jpg', id: 11 },
      { name: 'Christian', age: 24, color: 'black',img: 'img/funder.jpg', id: 22 },
      { name: 'Cabrina', age: 24, color: 'purple',img: 'img/cabrina.jpg', id: 33 },
      { name: 'Sommer', age: 24, color: 'pink',img: 'img/sommer.jpg', id: 44 },
      { name: 'Noura', age: 24, color: 'green',img: 'img/noura.jpg', id: 55 },
      { name: 'Cristian', age: 24, color: 'yellow',img: 'img/rosenville.jpg', id: 66 },
      { name: 'Kristian', age: 24, color: 'blue',img: 'img/rosenfeldt.jpg', id: 77 },
      { name: 'Kim', age: 24, color: 'teal',img: 'img/kim.jpg', id: 88 },
      { name: 'Jakob D', age: 24, color: 'white',img: 'img/jakob.jpg', id: 99 },
      { name: 'Jakob N', age: 24, color: 'honeydew',img: 'img/neander.jpg', id: 1010 },
      { name: 'Philip', age: 24, color: 'black',img: 'img/philip.jpg', id: 1111 },
      { name: 'Martin K', age: 24, color: 'red',img: 'img/martink.jpg', id: 1212 },
      { name: 'Felix', age: 24, color: 'orange',img: 'img/felix.jpg', id: 1313 },
      { name: 'Michael', age: 24, color: 'black',img: 'img/michael.jpg', id: 1414 },
      { name: 'Rune', age: 24, color: 'black',img: 'img/rune.jpg', id: 1515 }
    ]
  }
  
  
  render() {
    return (
      <div className="content">
        <Elever elever={this.state.elever} />
      <AppFooter />
       
      </div>
    );
  }
}

export default App;
