import React from "react";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";

class InfoBox extends React.Component {
  render() {
    return (
      <div className="infobox">
        <Heading2 />
        <Heading3 />
        <br />
      </div>
    );
  }
}

export default InfoBox;
