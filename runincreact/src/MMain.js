import React from "react";

class MMain extends React.Component {
  render() {
    return (
      <main className="main">
        <section id="home">
          <img src="gfx/hero.jpg" alt="mainhero" />
          <div className="infobox">
            <h2>
              we love <b className="fontcolor">running</b>
            </h2>
          </div>
        </section>
        <section id="event">
          <img src="gfx/event.jpg" alt="eventpic" />
          <div className="infobox">
            <h2>next event</h2>
          </div>
          <div className="eventtext">
            <h1>Events</h1>
            <h3>Copenhagen</h3>
            <h3>Marathon</h3>
            <h5>Den 29.maj 2018</h5>
            <h4>Aarhus city run</h4>
            <h6>Den 1. juni 2018</h6>
            <h4>Berlin Maraton</h4>
            <h6>Den 6. juni 2018</h6>
            <h4>KBH city run</h4>
            <h6>Den 1. juni 1974</h6>
            <h4>Olympiske lege</h4>
            <h6>Den 6. juni 1996</h6>
          </div>
        </section>
        <section id="shop">
          <div className="infobox3">
            <h2>Shop</h2>
          </div>
          <div className="shoptext">
            <h1>Shop</h1>
            <h2>Runinc Shop</h2>
            <h4>gratis fragt ved over kr. 500.-</h4>
            <h5>Nike</h5>
            <h5>Adidas</h5>
            <h5>Puma</h5>
            <h5>Asics</h5>
            <h5>Hummel</h5>
          </div>
          <div id="sko1">
            <img src="img/shoe_01.jpg" alt />
          </div>
          <div id="sko2">
            <img src="img/shoe_02.jpg" alt />
          </div>
          <div id="sko3">
            <img src="img/shoe_03.jpg" alt />
          </div>
          <div id="sko4">
            <img src="img/shoe_04.jpg" alt />
          </div>
          <div id="sko5">
            <img src="img/shoe_02.jpg" alt />
          </div>
          <div id="sko6">
            <img src="img/shoe_04.jpg" alt />
          </div>
        </section>
      </main>
    );
  }
}

export default MMain;
