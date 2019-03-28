import React, { Component } from 'react';



class Elever extends Component{
  
  render(){
    const { elever } = this.props;
    const elevList = elever.map(elev => { 
      var divStyle = {
        background: elev.color,
        color: elev.color,
        padding: "10px",
        
      };

      return (
        <div className="personcontainer" key={elev.id}>
          <h2>{elev.name}</h2>
          <div class="personpic">
            <img src={elev.img} alt=""/> 
          </div>
          <div>Age: { elev.age }</div>
          <div>Color: { elev.color } <div style={divStyle}></div> </div>
          
          
        </div>
        
      )
    });
    return (
      <div className="elev-list">
        { elevList }
      </div>
    )
  }
}

export default Elever

