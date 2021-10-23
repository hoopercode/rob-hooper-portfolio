import React from 'react'
import { Link } from 'react-router-dom'
import "./Punk.scss"
import punk from "../../assets/images/punk.jpg"

const Punk = () => {
  return (
    <div className="punk">
    <h1 className="punk__header">Punk Beers API Challenge</h1>
    <div className="punk__body">
      <img className="punk__image" src={punk} alt="" />
      <div className="punk__blurb">
      <h3 className="punk__text--header">Outline</h3>
      <p  className="punk__text">This was a project given to use during my time completing the 12 Week Nology Course. </p>
      <p className="punk__text">Brief: Your task is to build a website using React based on the specifications outline below. This will be based on the Punk API which contains all the data you will need for the task (there is also a link to a data file which we recommend you use before diving straight into using the API).  </p>
      <a href="https://github.com/hoopercode/punk"target="_blank"><p className="punk__text--link">Link to Github</p></a>
      <a href="https://hoopercode.github.io/beers-api/"><p className="punk__text--link"target="_blank">Link to Live Project</p></a>

      </div>
    </div>
    <Link to ="/my-work"><button className="punk__button">Back to Work</button></Link>
  </div>
  )
}

export default Punk
