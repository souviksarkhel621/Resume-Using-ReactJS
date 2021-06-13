import React from "react";
function Heading() {
  return (
    <div id="Head">
      <div id="dpimage">
        <img
          src="https://media-exp3.licdn.com/dms/image/C4D03AQEiVSqehhCszA/profile-displayphoto-shrink_400_400/0/1577101517797?e=1628726400&v=beta&t=uY0d9Rh6kpDR4RfA8wiDG2puu24C2HY15Z6aZTrTRhI"
          alt="Personal Image"
        />
      </div>
      <div id="contact">
        <h1> Souvik Sarkhel</h1>
        <p>
          <b>Aspiring Software Development Engineer</b>
        </p>
        <p>
          Undergraduate Student of{" "}
          <strong>Jalpaiguri Government Engineering College.</strong>
        </p>
        <p>
          <b>Mobile No:-</b>9932059045 / 7001947662
        </p>
        <p>
          <b>Email Id:-</b> souviksarkhel.kgp@gmail.com
        </p>

        <a href="https://www.linkedin.com/in/souviksarkhel/" target="_blank">
          <i className="fab fa-linkedin-in"></i>
        </a>

        <br />

        <a href="https://github.com/souviksarkhel621" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <br />
      </div>
    </div>
  );
}
export default Heading;
