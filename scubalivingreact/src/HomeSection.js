import React from "react";
import MainHeroImg from "./MainHeroImg";
import InfoBox from "./InfoBox";

class HomeSection extends React.Component {
  render() {
    return (
      <section id="home" className="home">
        <MainHeroImg />
        <InfoBox />
      </section>
    );
  }
}

export default HomeSection;
