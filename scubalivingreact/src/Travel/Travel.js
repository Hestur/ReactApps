import React, { Component } from "react";

class Travel extends Component {
  render() {
    return (
      <main className="main">
        <section id="rejser" className="rejser">
          <div className="infoboxrejser">
            <h2 className="rejsetext">Dyk ud i verden</h2>
          </div>
          <div className="infobox2" />
          <div id="rejs1" className="rejse1">
            <img src="img/norge.JPG" alt="" />
            <div className="rejseinfo1">
              <h2 className="Capstxt">Norge</h2>
              <br />
              Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25 års
              erfaring med dyr i Norge. Oplev det klareste vand i verden!
            </div>
          </div>
          <div id="rejs2" className="rejse2">
            <img src="img/malta.jpg" alt="" />
            <div className="rejseinfo2">
              <h2 className="Capstxt">Malta</h2>
              <br />
              Oplev skønne malta og det syge dyreliv og sammenhold. Vi
              arrangerer dykkerrejser til Malta hele året rundt.
            </div>
          </div>
          <div id="linkrejse">
            <a href="#">Se flere destinationer og muligheder her...</a>
          </div>
        </section>
      </main>
    );
  }
}
export default Travel;
