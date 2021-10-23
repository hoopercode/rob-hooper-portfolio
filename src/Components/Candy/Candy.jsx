import React from "react";
import "./Candy.scss";
import candy from "../../assets/images/candyCrushB.png";

const Candy = () => {
  return (
    <div className="candy">
      <h1 className="candy__header">Candy Crush</h1>
      <div className="candy__body">
        <img className="candy__image" src={candy} alt="" />
        <div className="candy__blurb">
        <h3 className="candy__text--header">Outline</h3>
        <p  className="candy__text">This was a project given to use during my time completing the 12 Week Nology Course. </p>
        <p className="candy__text">Brief:  Put everything you’ve learned in your first 3 weeks to the test by designing and building your own full functioning browser based game using HTML, CSS/SCSS and JavaScript.</p>
        <a href="https://github.com/hoopercode/candy-crush"><p className="candy__text--link">Link to Github</p></a>
        <a href=""><p className="candy__text--link">Link to Live Project</p></a>

        </div>
      </div>
    </div>
  );
};

export default Candy;

