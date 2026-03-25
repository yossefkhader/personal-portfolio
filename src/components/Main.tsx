import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import portrait from '../assets/images/portrait-square.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={portrait} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/yossefkhader" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="http://www.linkedin.com/in/yossef-khader-1a6a49264" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Yossef Khader</h1>
          <p>Computer Science Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yossefkhader/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="http://www.linkedin.com/in/yossef-khader-1a6a49264" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;