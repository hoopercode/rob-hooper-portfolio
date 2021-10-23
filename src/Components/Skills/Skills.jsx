import React from "react";
import "./Skills.scss";
import react from "../../assets/images/reactLogo.svg";
import html5 from "../../assets/images/htmlLogo.svg";
import css from "../../assets/images/cssLogo.svg";
import javascript from "../../assets/images/javascriptLogo.svg";
import figma from "../../assets/images/figma-1.svg";
import github from "../../assets/images/github-icon.svg";
import sass from "../../assets/images/sass-1.svg";
import trello from "../../assets/images/trello.svg";
import postman from "../../assets/images/postman.svg";
import nodeJS from "../../assets/images/nodejs-icon.svg";
import java from "../../assets/images/java-4.svg";
import jest from "../../assets/images/jestBigger.svg";

const Skills = () => {
  return (
    <div className="myskills">
      <h1 className="myskills__header">Tech Stack</h1>
      <div className="myskills__grid">
        <div class="tooltip">
          <img class="myskills__image" src={react} alt="" />
          <span class="tooltiptext">React</span>
        </div>
         <div class="tooltip">
         <img class="myskills__image" src={html5} alt="" />
          <span class="tooltiptext">HTML 5</span>
        </div>
        <div class="tooltip">
        <img class="myskills__image" src={css} alt="" />
          <span class="tooltiptext">CSS</span>
        </div>
        <div class="tooltip">
        <img class="myskills__image" src={javascript} alt="" />
          <span class="tooltiptext">JavaScript</span>
        </div>
        <div class="tooltip">
        <img class="myskills__image" src={java} alt="" />
          <span class="tooltiptext">Java</span>
        </div>
        <div class="tooltip">
        <img class="myskills__image" src={github} alt="" />
          <span class="tooltiptext">GitHub</span>
        </div>
        <div class="tooltip">
        <img class="myskills__image" src={figma} alt="" />
          <span class="tooltiptext">Figma</span>
        </div>
       
        <div class="tooltip">
        <img class="myskills__image" src={sass} alt="" />
          <span class="tooltiptext">SASS</span>
        </div>
        <div class="tooltip">
        <img class="myskills__image" src={postman} alt="" />
          <span class="tooltiptext">PostMan</span>
        </div>
        <div class="tooltip">
        <img class="myskills__image" src={trello} alt="" />
          <span class="tooltiptext">Trello</span>
        </div>
        <div class="tooltip">
        <img class="myskills__image" src={nodeJS} alt="" />
          <span class="tooltiptext">NodeJS</span>
        </div>
        <div class="tooltip">
        <img class="myskills__image" src={jest} alt="" />
          <span class="tooltiptext">Jest</span>
        </div>
      
      
        
        
        
       
       
 
     
       
      </div>
    </div>
  );
};

export default Skills;
