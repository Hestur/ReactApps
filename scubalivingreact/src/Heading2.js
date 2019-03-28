import React from "react";
import Heading3 from "./Heading3";

class Heading2 extends React.Component {
  render() {
    return (
      <div>
        <h2 className="heading2">
          The best way to observe a fish is to become a fish <br />{" "}
        </h2>
        <Heading3 />
        <br />
      </div>
    );
  }
}

export default Heading2;
