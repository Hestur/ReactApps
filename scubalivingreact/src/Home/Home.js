import React, { Component } from "react";
import Videodive from "../Video/Videodive";


class Home extends Component {
  render() {
    return (
      <main className="main">
        <section id="home" className="home">
          <img src="img/scuba2.jpg" alt="mainimg" className="mainimg" />
          <div className="infoboxmain">
            <h2 className="heading2">
              The best way to observe a fish is to become a fish <br />
              <h3 className="heading3">jacques cousteau</h3>
              <br />
            </h2>
          </div>
        </section>

        <section id="udstyr" className="udstyr">
          <div className="infoboxudstyr">
            <h2 className="udstyrtext">Mest populære dykkerudstyr</h2>
          </div>
          <div className="infobox2" />
          <div id="img1div" className="udstyrdiv1">
            <img id="img1" src="img/reg.jpg" alt="" className="udstyrimg1" />
            <p id="text" className="udstyrtext">
              Regulator med resist
            </p>
            <br />
            <p id="textpris" className="udstyrpris">
              
              KR.899.-
            </p>
          </div>
          <div id="img2div" className="udstyrdiv2">
            <img id="img2" src="img/hanske.jpg" alt="" className="udstyrimg2" />
            <p id="text" className="udstyrtext">
              Coldwater gloves
            </p>
            <br />
            <p id="textpris" className="udstyrpris">
              
              KR.1499.-
            </p>
          </div>
          <div id="img3div" className="udstyrdiv3">
            <img id="img3" src="img/reg.jpg" alt="" className="udstyrimg3" />
            <p id="text" className="udstyrtext">
              Regulator med resist
            </p>
            <br />
            <p id="textpris" className="udstyrpris">
              
              KR.899.-
            </p>
          </div>
          <div id="img4div" className="udstyrdiv4">
            <img id="img4" src="img/hanske.jpg" alt="" className="udstyrimg4" />
            <p id="text" className="udstyrtext">
              Coldwater gloves
            </p>
            <br />
            <p id="textpris" className="udstyrpris">
              
              KR.1499.-
            </p>
          </div>
          <div id="linkshop" className="linkshop">
            <a href="/shop" className="link">
              Se mere lækkert udstyr her...
            </a>
          </div>
        </section>

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
            <a href="/travel">Se flere destinationer og muligheder her...</a>
          </div>
        </section>

        <section id="kurser" className="kurser">
          <div className="infoboxkurser">
            <h2 className="kursustext">PADI - Dykkercertifikat</h2>
          </div>
          <div className="infobox2" />
          <div className="certificat">
            <div className="padiText">
            <h2>Tag et internationalt anerkendt certificat</h2>
            <p>
                Her finder du et stort udvalg af dykkerkurser lige fra begynder niveau til professionelt. Vi er et af Danmarks førende dykkercentre, som uddanner fra PADI orginationen. Når du vælger at tage et dykkercertificat hos os, får du ikke kun et international anerkendt dykkercertificat til markedets bedste priser, du får også et dykkerkursus, hvor kavliteten er i top.
              </p>
              <p>
                  Vi har inkompetente instruktører på vores dykkerkurser. Erfaring, tillid og sikkerhed er vigtigt, når du dykker med os, derfor står vi klar med et enormt hold inkompetente instruktører.
              </p>
            </div>
            <img className="padi" src="img/PADI_-_Logo.svg" alt="" />
          </div>
          <div id="linkkursus">
            <a href="/education">Se alle kurser og certifikater her...</a>
          </div>
        </section>
        <Videodive />
      </main>
    );
  }
}
export default Home;
