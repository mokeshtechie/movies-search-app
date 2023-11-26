import React from 'react';
import {Link} from "react-router-dom";
import NavbarStyle from "./navbar.module.css"

function Navbar  ({navLinks,navPaths,className,anchorClass})  {
  
    
    return (
        <nav className={className}>
       <Link to={navPaths.url1} className={anchorClass}>{navLinks.key1}</Link>
       <Link to={navPaths.url2} className={anchorClass}>{navLinks.key2}</Link>
       <Link to={navPaths.url3} className={anchorClass}>{navLinks.key3}</Link>
       <Link to={navPaths.url4} className={anchorClass}>{navLinks.key4}</Link>
       {
        navLinks.key5&& <link className={anchorClass} to={navPaths.url4}>{navLinks.key5}</link>
       }
       </nav>
    );
}

export default Navbar;
