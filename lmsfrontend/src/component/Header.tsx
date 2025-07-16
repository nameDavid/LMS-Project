import React from "react";
import './css/Header.css'; 
import { Link } from "react-router-dom";


const Header = () => {
  return (
<nav className="navbar">
        <div className="logo">
            
            <span>e-Learn</span>
        </div>
        <ul className="nav-links">
            <li><Link className="Link" to = "/">Home</Link></li>
            <li><Link className="Link" to ="" >Pages</Link></li>
            <li><Link className="Link" to= ""> Courses</Link></li>
            <li><Link className="Link" to ="" >Shop</Link></li>         
            <li><Link className="Link" to ="" >Blog</Link></li>
            <li><Link className="Link" to ="" >Contact</Link></li>
        </ul>
    
        <div className="buttons">
            <Link className="btn login" to= "" >Login</Link>
            <Link className="btn signup" to= "/Signup">Sign Up</Link>
        </div>
    </nav>
  );
};

export default Header;
