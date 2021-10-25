import React from 'react'
import "./Redux.scss"
import { Link } from 'react-router-dom';
import redux from "../../assets/images/redux-project.png"
import html5 from "../../assets/images/htmlLogo.svg";
import css from "../../assets/images/cssLogo.svg";
import javascript from "../../assets/images/javascriptLogo.svg";
import react from "../../assets/images/reactLogo.svg";


const Redux = () => {
  return (
    <div className="redux">
      <h1 className="redux__header">React Music Player</h1>
      <div className="redux__body">
        <img className="redux__image" src={redux} alt="" />
        <div className="redux__blurb">
        <h3 className="redux__text--header">Outline</h3>
        <p  className="redux__text">This was a project that I completed as part of the DevEd - React/Redux course.</p>
        <p className="redux__text">The aim of the project was to use all the React JS knowledge that I had gained up until that point to create something fun and entertaining.  On top of this, the goal was also to make it elegant and mobile friendly.  I think that I achieved this.</p>
        <div className="redux__skill-images">
            <img className="redux__skill-image" src={html5} alt="" />
            <img className="redux__skill-image" src={css} alt="" />
            <img className="redux__skill-image" src={javascript} alt="" />
            <img className="redux__skill-image" src={react} alt="" />
          </div>
          <div className="redux__links-container">
        <a href="https://github.com/hoopercode/redux-music-player"target="_blank"><p className="redux__text--link">Link to Github</p></a>
        <a href="https://hoopercode.github.io/redux-music-player/"target="_blank"><p className="redux__text--link">Link to Live Project</p></a>
        </div>

        </div>
      </div>
      <Link to ="/my-work"><button className="redux__button">Back to Work</button></Link>
    </div>
  )
  
}
export default Redux;