import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className='navbar navbar-dark bg-dark'>
            <Link to ="/">
                <h2 style={{color: "white", marginLeft:"20px"}}>Find Places</h2>
            </Link>
            <Link to="/Places" className="icono">
                <h2>Lugares</h2>
            </Link>
            <Link to="/login" className="icono">
                <h2>Login</h2>
            </Link>
            <Link to="/users/favorites">
                <h2>Favs</h2>
            </Link>
        </nav>
    );
}

export default Navbar;