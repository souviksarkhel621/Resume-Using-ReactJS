import React from "react";
function Footer() {
  var today = new Date();

  var date =
    today.getDate() +
    " / " +
    today.toLocaleString("default", { month: "long" }) +
    " / " +
    today.getFullYear();
  return (
    <div className="footer">
      <p>
        Developed and Maintained By Souvik Sarkhel using{" "}
        <i className="fab fa-react"> React JS</i>
      </p>

      <p>Date - {date}</p>
    </div>
  );
}
export default Footer;
