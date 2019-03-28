import React from "react";
import Header from "./Header";
import MMain from "./MMain";
import FormContact from "./FormContact";

class GridLayOut extends React.Component {
  render() {
    return (
      <div id="gridlayout" className="gridlayout">
        <Header />
        <MMain />
        <footer>
          <section id="contact">
            <FormContact />
            <img id="bottom" src="images/bottom.png" alt />
          </section>
        </footer>
      </div>
    );
  }
}

export default GridLayOut;
