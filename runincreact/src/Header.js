import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Logo />
        <Nav />
        {}
        <div id="searchbar">
          <input type="text" name="mail" id="search" />
          <button id="knap">SEARCH</button>
        </div>
      </header>
    );
  }
}

export default Header;
