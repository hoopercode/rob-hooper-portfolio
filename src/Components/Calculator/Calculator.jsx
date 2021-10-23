import React from 'react'
import "./Calculator.scss"
import calculator from "../../assets/images/calculator.png"
import { Link } from 'react-router-dom'
const Calculator = () => {
  return (
    <div className="calculator">
    <h1 className="calculator__header">Calculator Challenge</h1>
    <div className="calculator__body">
      <img className="calculator__image" src={calculator} alt="" />
      <div className="calculator__blurb">
      <h3 className="calculator__text--header">Outline</h3>
      <p  className="calculator__text">This was a project given to use during my time completing the 12 Week Nology Course. </p>
      <p className="calculator__text">Brief: A common first project is to build a calculator in your language of choice. Normally this is easy in pure JS but we are web developers, which means we need a UI to go with our logic.  The end goal here is to have a site which can accept inputs, do some calculations and give you the outputs. The inputs will be generated from users clicking on the calculator buttons. </p>
      <a href="https://github.com/hoopercode/calculator"target="_blank"><p className="calculator__text--link">Link to Github</p></a>
      <a href="https://hoopercode.github.io/calculator/"><p className="calculator__text--link"target="_blank">Link to Live Project</p></a>
      </div>
    </div>
    <Link to ="/my-work"><button className="calculator__button">Back to Work</button></Link>
  </div>
  )
}

export default Calculator
