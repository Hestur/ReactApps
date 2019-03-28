import React from "react";
import Header from "./Header";
import MMain from "./MMain";

class GridLayOut extends React.Component {
  render() {
    return (
      <div id="gridlayout" className="gridlayout">
        <Header />
        <MMain />
      </div>
    );
  }
}

export default GridLayOut;
