import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss"

const Nav = () => {
  return (
    <>
      <div className="topnav">
        <Link to ="/"><p  className="topnav__item" href="#home">Home</p></Link>
        <Link to ="/my-work"><p className="topnav__item" href="#news">Work</p></Link>
        <Link to ="/my-skills"><p className="topnav__item" href="#contact">Skills</p></Link>
        <Link to ="/contact-me"><p className="topnav__item topnav__contact" href="#about">Contact</p></Link>
       
      </div>
    </>
  );
};

export default Nav;
