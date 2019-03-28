import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
