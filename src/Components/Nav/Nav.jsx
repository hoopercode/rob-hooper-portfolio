import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "../MobileNav/MobileNav";
import hamburger from "../../assets/images/menuWhite.png"
import "./Nav.scss"

const Nav = () => {
  const [showNav, setShowNav] = useState(false);


  const toggleNav = () => {
    setShowNav(!showNav);

  };
 
  return (
    <div className="navigation">
      {showNav && <MobileNav handleClick={toggleNav} />}
      <div className="topnav">
        <Link to ="/"><p  className="topnav__item" href="#home">Home</p></Link>
        <Link to ="/rob-hooper-portfolio/my-work"><p className="topnav__item" href="#news">Work</p></Link>
        <Link to ="/rob-hooper-portfolio/my-skills"><p className="topnav__item" href="#contact">Skills</p></Link>
        <Link to ="/rob-hooper-portfolio/contact-me"><p className="topnav__item topnav__contact" href="#about">Contact</p></Link>
  
      </div>

      <div className="mobile-nav-header">
        <img className="mobile__hamburger"src={hamburger} alt="" onClick={toggleNav} />
      </div>
    </div>
  );
};

export default Nav;
