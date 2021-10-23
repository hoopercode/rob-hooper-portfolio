import React from "react";
import "./Contact.scss";
import linked from "../../assets/images/linkedinCircle.svg";
import github from "../../assets/images/github-icon.svg";
import headShot from "../../assets/images/headShot.png"

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact__header">Contact Me</h1>
      <div className="contact__body">
      <img className="contact__profileimage" src={headShot} alt="" />
      <h3 className="contact__text">Email: hooper.rob@gmail.com</h3>
      <h3 className="contact__text">Phone: 07796235237</h3>
      </div>
      <div className="contact__images">
        <a href="https://www.linkedin.com/in/robert-james-hooper/"><img className="contact__image" src={linked} alt="" /></a>
        <a href="https://github.com/hoopercode"><img className="contact__image" src={github} alt="" /></a>
      </div>
    </div>
  );
};

export default Contact;
