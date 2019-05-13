import React, { Component } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';


class App extends Component {
  

  state = {
    favAnimal: 'Horse'
  }

  favAnimalChangedHandler = (e) => {
    this.setState({
      favAnimal: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="card pink lighten-3 left">
          <p>(App)</p>
       <h1>Hvilket dyr er det bedste i verden?</h1>
        
       <UserInput
          changed={this.favAnimalChangedHandler}
          currentfavAnimal={this.state.favAnimal}/>
       <UserOutput favAnimal={this.state.favAnimal}/>
       <UserOutput favAnimal={this.state.favAnimal}/>
       <UserOutput favAnimal={this.state.favAnimal}/>
       </div>
      </div>
    );
  }
}

export default App;