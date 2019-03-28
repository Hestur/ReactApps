import React from "react";
import PTag from "./PTag";
import MyRed from "./MyRed";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer" className="footer">
        <PTag />
        <MyRed />
      </div>
    );
  }
}

export default Footer;
