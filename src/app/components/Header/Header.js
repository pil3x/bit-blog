import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">BitBlog</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/authors">Authors</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
