import React from 'react'
import { Link } from 'react-router-dom'
import "./Morse.scss"
import morse from "../../assets/images/morseCode.png"
import html5 from "../../assets/images/htmlLogo.svg";
import css from "../../assets/images/cssLogo.svg";
import javascript from "../../assets/images/javascriptLogo.svg";

const Morse = () => {
  return (
    <div className="morse">
      <h1 className="morse__header">Morse Code Translator</h1>
      <div className="morse__body">
        <img className="morse__image" src={morse} alt="" />
        <div className="morse__blurb">
        <h3 className="morse__text--header">Outline</h3>
        <p  className="morse__text">This was a project given to use during my time completing the 12 Week Nology Course. </p>
        <p className="morse__text">Brief:  You’re tasked with creating a morse code translator using TDD. It should be able to translate based on user input from the DOM.</p>
        <div className="punk__skill-images">
            <img className="punk__skill-image" src={html5} alt="" />
            <img className="punk__skill-image" src={css} alt="" />
            <img className="punk__skill-image" src={javascript} alt="" />
          </div>
        <a href="https://github.com/hoopercode/rob-morse"target="_blank"><p className="morse__text--link">Link to Github</p></a>
        <a href="https://hoopercode.github.io/rob-morse/"target="_blank"><p className="morse__text--link">Link to Live Project</p></a>

        </div>
      </div>
      <Link to ="/my-work"><button className="morse__button">Back to Work</button></Link>
    </div>
  )
}

export default Morse