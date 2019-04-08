import React, { Component } from 'react';
import Map from './Map/Map';
import Gif2 from '../Gif/Gif2';
import Gif1 from '../Gif/Gif1';
import Gif3 from '../Gif/Gif3';
import Video from '../Video/Video';




class Contact extends Component{
    render(){
        return(
            <main className="main">
            <Gif1 />
            <Gif2 />
            <Gif3 />
            <section className="kontakt">
          <div className="åbningstider">
            <h4>Åbningstider</h4>
            <p>Man-Fre: 8:00-18:00</p>
            <p>Lørdag: 10:00-21:00</p>
            <p>Søndag: 10:00-16:00</p>
            <p></p>
          </div>
          <div className="adresse">
            <h4>Find os</h4>
            <div className="aarhus">
              <h5>Århus</h5>
              <p>Adresse: hestevejen 20</p>
              <p>Postnr: 7000</p>
              <p>Danmark</p>
              <p></p>
            </div>
            <div className="kbh">
              <h5>København</h5>
              <p>Adresse: hestegade 29</p>
              <p>Postnr: 9000</p>
              <p>Danmark</p>
              <p></p>
            </div>
            <div className="berlin">
              <h5>Berlin</h5>
              <p>Adresse: hesteStraße 9</p>
              <p>Postnr: 10115</p>
              <p>Germany</p>
            </div>
          </div>
          <div className="links">
            <p>
              Telefon: <a href="88888888">88888888</a>
            </p>
            <p>
              E-mail: <a href="info@scubaliving.dk">info@scubaliving.dk</a>
            </p>
          </div>
        </section>
        <Map />
        <Video />
           
        
            </main>
        )
    }
}
export default Contact