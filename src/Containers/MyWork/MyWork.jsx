import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/images/300x.gif";
import "./MyWork.scss";
import candy from "../../assets/images/candyCrushB.png";
import punk from "../../assets/images/punk.jpg";
import calculator from "../../assets/images/calculator.png";
import morse from "../../assets/images/morseCode.png";
import html5 from "../../assets/images/htmlLogo.svg";
import css from "../../assets/images/cssLogo.svg";
import javascript from "../../assets/images/javascriptLogo.svg";
import react from "../../assets/images/reactLogo.svg";
import redux from "../../assets/images/redux-project.png";
import moreComing from "../../assets/images/more.gif"

const MyWork = () => {
  return (
    <div className="work">
      <h1 className="work__header">Portfolio</h1>
      <h3 className="work__hover">Hover for more information</h3>
      <div className="work__grid">
      <div className="work__flipbox">
          <div className="work__flipbox-inner">
            <div className="work__flipbox-front">
            <img className="work__image" src={redux} alt="" />
                <Link to="/redux">
                  <button className="work__button">More Info</button>
                </Link>
            </div>
            <div className="work__flipbox-back">
              <h2 className="work__flipbox-back--header">Redux Music Player</h2>
              <img className="work__flipbox--image" src={html5} alt="" />
              <img className="work__flipbox--image" src={css} alt="" />
              <img className="work__flipbox--image" src={javascript} alt="" />
              <Link to="/redux">
                <p className="work__link">Click for more Info</p>
              </Link>
            </div>
          </div>
        </div>
         <div className="work__flipbox">
          <div className="work__flipbox-inner">
            <div className="work__flipbox-front">
              <img className="work__image" src={punk} alt="" />
              <Link to="/punk">
                <button className="work__button">More Info</button>
              </Link>
            </div>
            <div className="work__flipbox-back">
              <h2 className="work__flipbox-back--header">Punk API</h2>
              <img className="work__flipbox--image" src={html5} alt="" />
              <img className="work__flipbox--image" src={css} alt="" />
              <img className="work__flipbox--image" src={javascript} alt="" />
              <img className="work__flipbox--image" src={react} alt="" />
              <Link to="/punk">
                <p className="work__link">Click for more Info</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="work__flipbox">
          <div className="work__flipbox-inner">
            <div className="work__flipbox-front">
              <img className="work__image" src={candy} alt="" />
              <Link to="/candy-crush">
                <button className="work__button">More Info</button>
              </Link>
            </div>
            <div className="work__flipbox-back">
              <h2 className="work__flipbox-back--header">Candy Crush</h2>
              <img className="work__flipbox--image" src={html5} alt="" />
              <img className="work__flipbox--image" src={css} alt="" />
              <img className="work__flipbox--image" src={javascript} alt="" />
              <Link to="/candy-crush">
                <p className="work__link">Click for more Info</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="work__flipbox">
          <div className="work__flipbox-inner">
            <div className="work__flipbox-front">
              <img className="work__image" src={calculator} alt="" />
              <Link to="/calculator">
                <button className="work__button">More Info</button>
              </Link>
            </div>
            <div className="work__flipbox-back">
              <h2 className="work__flipbox-back--header">Calculator</h2>
              <img className="work__flipbox--image" src={html5} alt="" />
              <img className="work__flipbox--image" src={css} alt="" />
              <img className="work__flipbox--image" src={javascript} alt="" />
              <Link to="/calculator">
                <p className="work__link">Click for more Info</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="work__flipbox">
          <div className="work__flipbox-inner">
            <div className="work__flipbox-front">
              <img className="work__image" src={morse} alt="" />
              <Link to="/morse">
                <button className="work__button">More Info</button>
              </Link>
            </div>
            <div className="work__flipbox-back">
              <h2 className="work__flipbox-back--header">Morse Code Translator</h2>
              <img className="work__flipbox--image" src={html5} alt="" />
              <img className="work__flipbox--image" src={css} alt="" />
              <img className="work__flipbox--image" src={javascript} alt="" />
              <Link to="/morse">
                <p className="work__link">Click for more Info</p>
              </Link>
            </div>
          </div>
        </div>
        <img className="work__image" src={moreComing} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
