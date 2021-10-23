import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.scss";
import cross from "../../assets/images/whiteCross.png";

const MobileNav = (props) => {
  const { handleClick } = props;

  return (
    <div className="mobile-nav">
      <img className="mobile-nav__cross"src={cross} alt="" onClick={handleClick}/>
      <div className="mobile-nav__item">
        <Link
          to="/home"
          className="mobile-nav__item--text "
          onClick={handleClick}
        ><p className="mobile-nav__item--header">Home</p>
          
        </Link>
      </div>
      <div className="mobile-nav__item">
        <Link
          to="/my-work"
          className="mobile-nav__item--text "
          onClick={handleClick}
          
        ><p className="mobile-nav__item--header">Work</p>
        </Link>
      </div>
      <div className="mobile-nav__item">
        <Link
          to="/my-skills"
          className="mobile-nav__item--text "
          onClick={handleClick}
        ><p className="mobile-nav__item--header">Skills</p>
          
        </Link>
      </div>
      <div className="mobile-nav__item">
        <Link
          to="/contact-me"
          className="mobile-nav__item--text "
          onClick={handleClick}
        ><p className="mobile-nav__item--header">Contact</p>
          
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
