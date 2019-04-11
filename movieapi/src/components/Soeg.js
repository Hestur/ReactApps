import React, { Component } from "react";

export default class Soeg extends Component {

    handleChange = (e) => {
      // e.preventDefault()
      if(e.target.value.length > 2)
      this.props.SearchInput(e.target.value);
  };

  render() {
    return (
      <div>
        <form>
          <label>Søg</label>
          <input type="text" onInput={this.handleChange} id="SW"/>
        </form>
      </div>
    );
  }
}
