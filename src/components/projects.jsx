import React from "react";
import Test_Case_Generator from "./photos/Test Case Generator.PNG";
import Messege_Amplifier from "./photos/Messege_Amplifier.PNG";
import Drummer from "./photos/Drummer.PNG";
import Account_opener from "./photos/Scoial Media Acount opener Chrome Extension.PNG";
function Projects(props) {
  return (
    <div className="projects">
      <div className="projectview">
        <img src={Test_Case_Generator} alt="Test_Case_Generator UI Image" />
        <div className="ProjectDetails">
          <p>
            <b>Description:- </b>A Frontend Webpage that generates random
            testcases for Competitive Programming within a given range
          </p>
          <p>
            <b>TechStack Used:- </b>HTML CSS JavaScript
          </p>
          <a
            href="https://souviksarkhel621.github.io/Test-Case-Generator/"
            target="_blank"
          >
            Check Out
          </a>
        </div>
      </div>
      <div className="projectview">
        <img src={Messege_Amplifier} alt="Messege_Amplifier" />
        <div className="ProjectDetails">
          <p>
            <b>Description:- </b>A Frontend Webpage that generates multiple
            copies of a messege in any Language or Emojis
          </p>
          <p>
            <b>TechStack Used:- </b>HTML CSS JavaScript
          </p>
          <a
            href="https://souviksarkhel621.github.io/Messege-Amplifier/"
            target="_blank"
          >
            Check Out
          </a>
        </div>
      </div>
      <div className="projectview">
        <img src={Drummer} alt="Drummer" />
        <div className="ProjectDetails">
          <p>
            <b>Description:- </b>A Frontend Webpage we can play sound of
            different Drums by clicking or pressing keys
          </p>
          <p>
            <b>TechStack Used:- </b>HTML CSS JavaScript
          </p>
          <a href="https://souviksarkhel621.github.io/Drummer/" target="_blank">
            Check Out
          </a>
        </div>
      </div>
      <div className="projectview">
        <img src={Account_opener} alt="Account_opener" />
        <div className="ProjectDetails">
          <p>
            <b>Description:- </b>A Frontend Webpage we can play sound of
            different Drums by clicking or pressing keys
          </p>
          <p>
            <b>TechStack Used:- </b>HTML CSS
          </p>
          <a
            href="https://github.com/souviksarkhel621/Account-Manager-Chrome-Extention"
            target="_blank"
          >
            Check Out GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
export default Projects;
