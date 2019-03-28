import React from "react";
import UdstyrImg1 from "./UdstyrImg1";
import UdstyrText from "./UdstyrText";
import UdstyrPris from "./UdstyrPris";

class UdstyrDiv1 extends React.Component {
  render() {
    return (
      <div id="img1div" className="udstyrdiv1">
        {" "}
        <UdstyrImg1 /> <UdstyrText /> <br /> <UdstyrPris /> <br />{" "}
      </div>
    );
  }
}

export default UdstyrDiv1;
