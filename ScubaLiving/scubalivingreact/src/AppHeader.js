import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AppHeader extends Component {
    render(){
        return(
            <header className="header">
                    <section className="logo">
            
                    <img src="img/ScubaLiving_logo_small.svg" alt="logo" />
            
                    </section>
            
                    <nav className="nav" >
                       <ul className="ul" >
                           <Link to="/" className="list-item">Home</Link>
                           <Link to="/shop" className="list-item">Dykkerudstyr</Link>
                           <Link to="/travel" className="list-item">Dykkerrejser</Link>
                           <Link to="/education" className="list-item">Certifikat</Link>
                           <Link to="/feedback" className="list-item">Feedback</Link>
                           <Link to="/contact" className="list-item">Kontakt</Link>
                       </ul> 
                    </nav>
                    
                    <div id="searchbar" className="searchbar">
                        <input type="text" name="mail" id="search" className="searchinput" />
                        <button id="knap" className="searchbtn" >Søg</button></div>
                    <img id="imglock" src="img/lock-icon-300x300.png" alt="" className="imglockinlogo" /><button id="login" className="login" >Login</button>
                </header>
        )
    }
}
export default AppHeader