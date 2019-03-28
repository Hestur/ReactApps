import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#hotel">Hotel</a>
            </li>
            <li>
              <a href="#event">Event</a>
            </li>
            <li>
              <a href="#deal">Deals</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="searchbar">
          <input type="text" name="mail" id="search" />
          <button id="knap">SEARCH</button>
        </div>
      </header>
    );
  }
}

export default Header;
