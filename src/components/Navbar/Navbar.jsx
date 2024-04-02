import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className='navbar navbar-dark bg-dark'>
            <Link to ="/" className="icono">
                <h2>Find Places</h2>
            </Link>
            <Link to="/Places" className="icono">
                <h3>Lugares</h3>
            </Link>
            <Link to="/login" className="icono">
                <h3>Login</h3>
            </Link>
            <Link to="/users/favorites" className="icono">
                <h3>Favs</h3>
            </Link>
            <Link to="/users/visited" className="icono">
                <h3>Visited</h3>
            </Link>
        </nav>
    );
}

export default Navbar;