import React from "react";
import UdstyrImg3 from "./UdstyrImg3";
import UdstyrText from "./UdstyrText";
import UdstyrPris from "./UdstyrPris";

class UdstyrDiv3 extends React.Component {
  render() {
    return (
      <div id="img3div" className="udstyrdiv3">
        {" "}
        <UdstyrImg3 /> <UdstyrText /> <br /> <UdstyrPris /> <br />{" "}
      </div>
    );
  }
}

export default UdstyrDiv3;
