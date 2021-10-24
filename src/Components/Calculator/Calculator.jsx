import React from "react";
import "./Calculator.scss";
import calculator from "../../assets/images/calculator.png";
import { Link } from "react-router-dom";
import html5 from "../../assets/images/htmlLogo.svg";
import css from "../../assets/images/cssLogo.svg";
import javascript from "../../assets/images/javascriptLogo.svg";

const Calculator = () => {
  return (
    <div className="calculator">
      <h1 className="calculator__header">Calculator Challenge</h1>
      <div className="calculator__body">
        <img className="calculator__image" src={calculator} alt="" />
        <div className="calculator__blurb">
          <h3 className="calculator__text--header">Outline</h3>
          <p className="calculator__text">
            This was a project given to use during my time completing the 12
            Week Nology Course.{" "}
          </p>
          <p className="calculator__text">
            Brief: A common first project is to build a calculator in your
            language of choice. Normally this is easy in pure JS but we are web
            developers, which means we need a UI to go with our logic. The end
            goal here is to have a site which can accept inputs, do some
            calculations and give you the outputs.
          </p>
          <div className="punk__skill-images">
            <img className="punk__skill-image" src={html5} alt="" />
            <img className="punk__skill-image" src={css} alt="" />
            <img className="punk__skill-image" src={javascript} alt="" />
          </div>
          <div className="calculator__links">
          <a href="https://github.com/hoopercode/calculator" target="_blank">
            <p className="calculator__text--link">Link to Github</p>
          </a>
          <a href="https://hoopercode.github.io/calculator/">
            <p className="calculator__text--link" target="_blank">
              Link to Live Project
            </p>
          </a>
          </div>
        </div>
      </div>
      <Link to="/my-work">
        <button className="calculator__button">Back to Work</button>
      </Link>
    </div>
  );
};

export default Calculator;
