import React, { Component } from "react";

class AppFooter extends Component {
  render() {
    return (
      <footer>
        <div className="footerbox">
          <div className="praktiskinfo">
              <h4>Praktisk info</h4>
            <li>Om scuba living</li>
            <li>Kontakt</li>
            <li>Handelsbetingelser</li>
            <li>Persondatapolitik</li>
            <li>Åbningstider</li>
            </div>
            <div className="sociale">
                <h4>Sociale medier - følg os her!</h4>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </div>
          
        </div>
      </footer>
    );
  }
}
export default AppFooter;
