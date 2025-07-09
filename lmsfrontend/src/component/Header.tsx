import React from "react";
import './css/Header.css'; 

const Header = () => {
  return (
<nav className="navbar">
        <div className="logo">
            <div></div>
            <span>e-Learn</span>
        </div>
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    
        <div className="buttons">
            <button className="btn login">Login</button>
            <button className="btn signup">Sign Up</button>
        </div>
    </nav>
  );
};

export default Header;
