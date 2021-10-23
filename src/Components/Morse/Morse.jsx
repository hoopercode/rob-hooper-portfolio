import React from 'react'
import { Link } from 'react-router-dom'
import "./Morse.scss"
import morse from "../../assets/images/morseCode.png"

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
        <a href="https://github.com/hoopercode/rob-morse"target="_blank"><p className="morse__text--link">Link to Github</p></a>
        <a href=""><p className="morse__text--link"target="_blank">Link to Live Project</p></a>

        </div>
      </div>
      <Link to ="/rob-hooper-portfolio/my-work"><button className="morse__button">Back to Work</button></Link>
    </div>
  )
}

export default Morse