// Fejléc, navigáció
import React from 'react'
import {Link} from 'react-router-dom';
export const Header = () => {
    return (
        <header>
        <ul className="nav-links">
            <li>
                <Link to="/watchlist" className="nav-btn">Watch List</Link>
            </li>
            <li>
                <Link to="/search" className="nav-btn">Movie Search</Link>    
            </li>
            <li>
                <Link to="/upcoming" className="nav-btn">Upcoming Movies</Link>    
            </li>
        </ul>
        </header>
    )
}