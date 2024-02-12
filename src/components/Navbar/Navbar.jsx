import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
    return(
        <nav className='navbar navbar-dark bg-dark'>
            <Link to ="/">
                <h2 style={{color: "white", marginLeft:"20px"}}>Find Places</h2>
            </Link>
            <Link to="/Places">
                <h2>Lugares</h2>
            </Link>
        </nav>
    );
}

export default Navbar;