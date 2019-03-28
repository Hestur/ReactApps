import React from "react";
import UdstyrImg2 from "./UdstyrImg2";
import UdstyrText from "./UdstyrText";
import UdstyrPris from "./UdstyrPris";

class UdstyrDiv2 extends React.Component {
  render() {
    return (
      <div id="img2div" className="udstyrdiv2">
        {" "}
        <UdstyrImg2 /> <UdstyrText /> <br /> <UdstyrPris /> <br />{" "}
      </div>
    );
  }
}

export default UdstyrDiv2;
