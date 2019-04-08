import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <main className="main">
        <section id="kurser" className="kurser">
          <div className="infoboxkurser">
            <h2 className="kursustext">PADI - Dykkercertifikat</h2>
          </div>
          <div className="infobox2" />
          <div className="certificat">
            <div className="padiText">
              <h2>Tag et internationalt anerkendt certificat</h2>
              <p>
                Her finder du et stort udvalg af dykkerkurser lige fra begynder
                niveau til professionelt. Vi er et af Danmarks førende
                dykkercentre, som uddanner fra PADI orginationen. Når du vælger
                at tage et dykkercertificat hos os, får du ikke kun et
                international anerkendt dykkercertificat til markedets bedste
                priser, du får også et dykkerkursus, hvor kavliteten er i top.
              </p>
              <p>
                Vi har inkompetente instruktører på vores dykkerkurser.
                Erfaring, tillid og sikkerhed er vigtigt, når du dykker med os,
                derfor står vi klar med et enormt hold inkompetente
                instruktører.
              </p>
            </div>
            <img className="padi" src="img/PADI_-_Logo.svg" alt="" />
          </div>
          <div id="linkkursus">
            <a href="#">Se alle kurser og certifikater her...</a>
          </div>
        </section>
      </main>
    );
  }
}
export default Education;
