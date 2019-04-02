import React, { Component } from 'react';
import './App';

class AppFooter extends Component {
    
    render(){
        const { number } = this.props;
        return(
            <div id="footer">
                <p>Antal: <span className="MyRed"> {number} </span> </p>
            </div>
        )
    }
    
}
export default AppFooter;
