import React from 'react'
import "./Header.scss"
import linked from "../../assets/images/linkedinCircle.svg"
import github from "../../assets/images/github-icon.svg"
import gmail from "../../assets/images/gmail-icon.svg"


export const Home = () => {


  return (
    <div className="landing">
      <h1 className="landing__header">Rob Hooper</h1>
      <h3 className="landing__subheading">Junior Front-End Developer</h3>
      <div className="landing__images">
        <a href="https://www.linkedin.com/in/robert-james-hooper/"target="_blank"><img className="landing__image" src={linked} alt="" /></a>
        <a href="mailto: hooper.rob@gmail.com"target="_blank"><img className="landing__image" src={gmail} alt="" /></a>
        <a href="https://github.com/hoopercode"target="_blank"><img className="landing__image" src={github} alt="" /></a>
      </div>
      <div>
        <a href="https://drive.google.com/file/d/1ec9aYgBmXxAZANSfgGA3wMeQa78028xm/view?usp=sharing" target="_blank" className="landing__button">My Résumé</a>
        </div>
    </div>
  )
}
export default Home