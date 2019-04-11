import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedINLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey draken-3">
            <div className="container">
        <Link to='/' className="brand-logo"> Marioplan </Link>
        <SignedInLinks />
        <SignedOutLinks />
            </div>
        </nav>
    )
}
export default Navbar