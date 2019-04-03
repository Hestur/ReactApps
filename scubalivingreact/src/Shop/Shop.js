import React, { Component } from 'react';

class Shop extends Component{
    render(){
        return(
             <main className="main">
             <section id="udstyr" className="udstyr">
                        
                        <div className="infoboxudstyr">
                            <h2 className="udstyrtext">Mest populære dykkerudstyr</h2>
                        </div>
                        <div className="infobox2" >
                            </div>
                       <div id="img1div" className="udstyrdiv1" >
                    <img id="img1" src="img/reg.jpg" alt="" className="udstyrimg1" /> 
                    <p id="text" className="udstyrtext" >Regulator med resist</p> 
                     <p id="textpris" className="udstyrpris" > KR.899.- </p>  
                      </div>
                       <div id="img2div" className="udstyrdiv2" >
                            <img  id="img2" src="img/hanske.jpg" alt="" className="udstyrimg2" /> 
                            <p id="text" className="udstyrtext" >Coldwater gloves</p>  
                            <p id="textpris" className="udstyrpris" > KR.1499.- </p>  
                             </div>
                        <div id="img3div" className="udstyrdiv3" > 
                            <img id="img3"src="img/reg.jpg" alt="" className="udstyrimg3"/>
                             <p id="text" className="udstyrtext" >Regulator med resist</p>  
                             <p id="textpris" className="udstyrpris" > KR.899.- </p>  
                              </div>
                        <div id="img4div" className="udstyrdiv4" >
                             <img id="img4" src="img/hanske.jpg" alt="" className="udstyrimg4" /> 
                             <p id="text" className="udstyrtext" >Coldwater gloves</p> 
                              <p id="textpris" className="udstyrpris" > KR.1499.- </p>  
                               </div>
                        <div id="linkshop" className="linkshop" ><a href="#" className="link" >Se mere lækkert udstyr her...</a></div>
                    </section>
                    </main>
        )
    }
}
export default Shop