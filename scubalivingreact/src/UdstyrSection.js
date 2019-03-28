import React from "react";
import InfoBox from "./InfoBox";
import InfoBox2 from "./InfoBox2";
import UdstyrDiv1 from "./UdstyrDiv1";
import UdstyrDiv2 from "./UdstyrDiv2";
import UdstyrDiv3 from "./UdstyrDiv3";
import UdstyrDiv4 from "./UdstyrDiv4";
import LinkShop from "./LinkShop";

class UdstyrSection extends React.Component {
  render() {
    return (
      <section id="udstyr" className="udstyr">
        <InfoBox />
        <InfoBox2 />
        <UdstyrDiv1 />
        <UdstyrDiv2 />
        <UdstyrDiv3 />
        <UdstyrDiv4 />
        <LinkShop />
      </section>
    );
  }
}

export default UdstyrSection;
