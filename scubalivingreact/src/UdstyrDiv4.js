import React from "react";
import UdstyrImg4 from "./UdstyrImg4";
import UdstyrText from "./UdstyrText";
import UdstyrPris from "./UdstyrPris";

class UdstyrDiv4 extends React.Component {
  render() {
    return (
      <div id="img4div" className="udstyrdiv4">
        {" "}
        <UdstyrImg4 /> <UdstyrText /> <br /> <UdstyrPris /> <br />{" "}
      </div>
    );
  }
}

export default UdstyrDiv4;
