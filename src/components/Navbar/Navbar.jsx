import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <Link to ="/" className="btnHome">
                    <h2>Find Places</h2>
                </Link>
                <Link to="/Places" className="icono">
                    <h3>Lugares</h3>
                </Link>
                <Link to="/login" className="icono">
                    <h3>Login</h3>
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;