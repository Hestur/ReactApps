import React from "react";
import Header from "./Header";
import Main from "./Main";

class GridLayout extends React.Component {
  render() {
    return (
      <div id="gridlayout" className="gridlayout">
        <Header />
        <Main />
      </div>
    );
  }
}

export default GridLayout;
