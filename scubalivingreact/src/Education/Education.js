import React, { Component } from 'react';

class Education extends Component{
    render(){
        return(
            <main className="main">
            <section id="kurser" className="kurser" >
                        
                        <div className="infoboxkurser" >
                            <h2 className="kursustext" >PADI - Dykkercertifikat</h2>
                        </div>
                        <div className="infobox2" > 
                            </div>
                            <div className="certificat">
                                <div className="padiText"> 
                                    <h2>Tag et internationalt anerkendt certificat</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ea labore perferendis assumenda eaque, deserunt adipisci nisi consequuntur fuga ad in. Iure corrupti doloribus quas explicabo aut commodi aspernatur sint.</p>
                                </div>
                        <img className="padi" src="img/PADI_-_Logo.svg" alt="" />
                        
                        </div>
                         <div id="linkkursus" ><a href="#">Se alle kurser og certifikater her...</a></div>
                    </section>
            </main>
        )
    }
}
export default Education